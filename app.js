/* Config */
const CSV_URL = "https://joinpatch.s3.eu-west-1.amazonaws.com/users.csv";

/* State */
let rows = [];
let view = [];
let page = 1;
let pageSize = 100;
let sortKey = "followers";
let sortDir = "desc";

/* DOM */
const tbody = () => document.getElementById("table-body");
const rowCount = () => document.getElementById("row-count");
const pageInfo = () => document.getElementById("page-info");
const prevBtn = () => document.getElementById("prev-page");
const nextBtn = () => document.getElementById("next-page");
const pageSizeSel = () => document.getElementById("page-size");
const filterLoc = () => document.getElementById("filter-loc");
const filterStars = () => document.getElementById("filter-stars");
const filterYoung = () => document.getElementById("filter-young");
const applyBtn = () => document.getElementById("apply-filters");
const sortButtons = () => Array.from(document.querySelectorAll("th button[data-sort]"));

/* Helpers */
const coerce = (r) => {
  // Convert numeric/boolean fields
  const toNum = (k) => (r[k] === "" || r[k] == null ? 0 : Number(r[k]));
  const toBool = (k) => {
    const v = (r[k] ?? "").toString().trim().toLowerCase();
    return v === "1" || v === "true" || v === "t";
  };
  return {
    ...r,
    followers: toNum("followers"),
    total_stars: toNum("total_stars"),
    total_commits_in_the_last_year: toNum("total_commits_in_the_last_year"),
    weekend_commits: toNum("weekend_commits"),
    account_age_years: Number(r.account_age_years ?? 0),
    score: Number(r.score ?? 0),
    is_young: toBool("is_young"),
    is_hireable: toBool("is_hireable"),
  };
};

const cmp = (a, b, key, dir) => {
  const av = a[key];
  const bv = b[key];
  const an = typeof av === "number";
  const bn = typeof bv === "number";
  let c = 0;
  if (an && bn) c = av - bv;
  else c = String(av ?? "").localeCompare(String(bv ?? ""), undefined, { sensitivity: "base" });
  return dir === "asc" ? c : -c;
};

function applyFilters() {
  const loc = filterLoc().value.trim().toLowerCase();
  const minStars = Number(filterStars().value || 0);
  const youngOnly = !!filterYoung().checked;

  view = rows.filter(r => {
    if (loc && !(r.location || "").toLowerCase().includes(loc)) return false;
    if (minStars && (r.total_stars || 0) < minStars) return false;
    if (youngOnly && !r.is_young) return false;
    return true;
  });

  view.sort((a, b) => cmp(a, b, sortKey, sortDir));
  page = 1;
  render();
}

function render() {
  // pagination
  const total = view.length;
  const pages = Math.max(1, Math.ceil(total / pageSize));
  page = Math.min(Math.max(1, page), pages);
  const start = (page - 1) * pageSize;
  const slice = view.slice(start, start + pageSize);

  // table
  tbody().innerHTML = slice.map(u => {
    const tags = [
      u.is_young ? `<span class="pill young">Young</span>` : "",
      u.is_hireable ? `<span class="pill hireable">Hireable</span>` : "",
    ].join("");
    const age = Number.isFinite(u.account_age_years) ? u.account_age_years.toFixed(2) : "";
    const score = Number.isFinite(u.score) ? u.score.toFixed(3) : "";

    const avatar = u.avatar_url ? `<img class="avatar" src="${u.avatar_url}" alt="avatar">` : "";
    const login = u.login ? `<a href="${u.url || "#"}" target="_blank" rel="noopener">${u.login}</a>` : "";

    return `<tr>
      <td>${u.url ? `<a href="${u.url}" target="_blank" rel="noopener">${avatar}</a>` : avatar}</td>
      <td>${login}</td>
      <td>${escapeHTML(u.name ?? "")}</td>
      <td>${escapeHTML(u.location ?? "")}</td>
      <td>${num(u.followers)}</td>
      <td>${num(u.total_stars)}</td>
      <td>${num(u.total_commits_in_the_last_year)}</td>
      <td>${num(u.weekend_commits)}</td>
      <td>${age}</td>
      <td>${score}</td>
      <td>${tags}</td>
      <td>${escapeHTML(u.email ?? "")}</td>
    </tr>`;
  }).join("");

  // counts & buttons
  rowCount().textContent = `${total.toLocaleString()} users • showing ${slice.length} (page ${page}/${pages})`;
  pageInfo().textContent = `Page ${page} of ${pages}`;
  prevBtn().disabled = page <= 1;
  nextBtn().disabled = page >= pages;

  // update aria-sort on headers
  sortButtons().forEach(btn => {
    const k = btn.getAttribute("data-sort");
    btn.setAttribute("aria-sort", k === sortKey ? (sortDir === "asc" ? "ascending" : "descending") : "none");
  });
}

function num(v) { return (v ?? "") === "" ? "" : Number(v).toLocaleString(); }
function escapeHTML(s) { return String(s).replace(/[&<>"']/g, (m)=>({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[m])); }

function attachEvents() {
  // sorting
  sortButtons().forEach(btn => {
    btn.addEventListener("click", () => {
      const k = btn.getAttribute("data-sort");
      if (k === sortKey) {
        sortDir = (sortDir === "asc" ? "desc" : "asc");
      } else {
        sortKey = k;
        sortDir = "desc";
      }
      view.sort((a, b) => cmp(a, b, sortKey, sortDir));
      render();
    });
  });

  // filters
  applyBtn().addEventListener("click", applyFilters);

  // pagination controls
  prevBtn().addEventListener("click", () => { page--; render(); });
  nextBtn().addEventListener("click", () => { page++; render(); });

  // page size
  pageSizeSel().addEventListener("change", () => {
    pageSize = Number(pageSizeSel().value || 100);
    render();
  });
}

async function init() {
  attachEvents();
  pageSize = Number(pageSizeSel().value || 100);

  try {
    const res = await fetch(CSV_URL, { mode: "cors" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const text = await res.text();
    const parsed = Papa.parse(text, { header: true, skipEmptyLines: true });
    rows = parsed.data.map(coerce);
    // default sort by followers desc (matches aria-sort in header)
    view = rows.slice().sort((a, b) => cmp(a, b, sortKey, sortDir));
    render();
  } catch (err) {
    console.error("Failed to load CSV from S3. If you see a CORS error, enable CORS on the S3 bucket for this domain.", err);
    rowCount().textContent = "Failed to load data. Check console for details.";
  }
}

document.addEventListener("DOMContentLoaded", init);
