const DATA_URLS = ["./data/latest.json", "./data/latest.csv"];

const FALLBACK_ROWS = [
  {
    snapshot_date: "2026-04-21",
    login: "lyuchenyang",
    name: "Chenyang Lyu",
    url: "https://github.com/lyuchenyang",
    avatar_url: "https://avatars.githubusercontent.com/u/73568459?v=4",
    location: "Dublin, Ireland",
    location_raw: "Dublin, Ireland",
    location_normalized: "Dublin, Ireland",
    jurisdiction: "Republic of Ireland",
    irish_confidence: 0.95,
    irish_confidence_label: "High",
    bio: "PhD student at ML-Labs, Dublin City University. Interested in NLP and machine learning.",
    email: "",
    email_masked: "",
    email_domain: "",
    website_url: "",
    followers: 115,
    total_stars: 1609,
    top_repo_name: "Macaw-LLM",
    top_repo_url: "https://github.com/lyuchenyang/Macaw-LLM",
    top_repo_stars: 1508,
    recent_repo_count: 4,
    total_contributions_last_12_months: 512,
    weekend_contributions: 124,
    account_age_years: 4.83,
    career_stage_bucket: "likely_student",
    career_stage_confidence: 0.93,
    career_stage_reasons: [
      "University signal: Dublin City University.",
      "Matched student signal: 'phd student'.",
      "GitHub account is relatively recent (<= 6 years).",
    ],
    university_signal: true,
    university_name: "Dublin City University",
    university_domain: "",
    university_reasons: ["Profile text mentions Dublin City University."],
    is_young: true,
    is_hireable: false,
    most_used_languages: [{ name: "Python", size: 9000 }, { name: "Jupyter Notebook", size: 4200 }],
    stars_delta_7d: 44,
    stars_delta_30d: 180,
    followers_delta_30d: 16,
    momentum_score: 86,
    momentum_basis: "history",
    outreach_score: 90.4,
    score: 90.4,
  },
  {
    snapshot_date: "2026-04-21",
    login: "tmoroney",
    name: "Thomas Moroney",
    url: "https://github.com/tmoroney",
    avatar_url: "https://avatars.githubusercontent.com/u/74097498?v=4",
    location: "Dublin",
    location_raw: "Dublin",
    location_normalized: "Dublin",
    jurisdiction: "Republic of Ireland",
    irish_confidence: 0.82,
    irish_confidence_label: "Medium",
    bio: "Currently doing a Masters in Computer Science at Trinity College Dublin.",
    email: "",
    email_masked: "",
    email_domain: "",
    website_url: "",
    followers: 79,
    total_stars: 1438,
    top_repo_name: "ControlRoom",
    top_repo_url: "https://github.com/tmoroney/controlroom",
    top_repo_stars: 900,
    recent_repo_count: 3,
    total_contributions_last_12_months: 413,
    weekend_contributions: 97,
    account_age_years: 4.9,
    career_stage_bucket: "likely_student",
    career_stage_confidence: 0.91,
    career_stage_reasons: [
      "University signal: Trinity College Dublin.",
      "Matched student signal: 'masters student'.",
    ],
    university_signal: true,
    university_name: "Trinity College Dublin",
    university_domain: "",
    university_reasons: ["Profile text mentions Trinity College Dublin."],
    is_young: true,
    is_hireable: false,
    most_used_languages: [{ name: "Swift", size: 8000 }, { name: "TypeScript", size: 2500 }],
    stars_delta_7d: 16,
    stars_delta_30d: 70,
    followers_delta_30d: 6,
    momentum_score: 72,
    momentum_basis: "history",
    outreach_score: 84.1,
    score: 84.1,
  },
  {
    snapshot_date: "2026-04-21",
    login: "idontknowjs",
    name: "Darragh",
    url: "https://github.com/idontknowjs",
    avatar_url: "https://avatars.githubusercontent.com/u/16319963?v=4",
    location: "Dublin, Ireland",
    location_raw: "Dublin, Ireland",
    location_normalized: "Dublin, Ireland",
    jurisdiction: "Republic of Ireland",
    irish_confidence: 0.95,
    irish_confidence_label: "High",
    bio: "Frontend Engineer @amzn, open source at Google Summer of Code, ex-intern @microsoft.",
    email: "",
    email_masked: "",
    email_domain: "",
    website_url: "",
    followers: 129,
    total_stars: 394,
    top_repo_name: "react-bits",
    top_repo_url: "https://github.com/idontknowjs/react-bits",
    top_repo_stars: 170,
    recent_repo_count: 5,
    total_contributions_last_12_months: 630,
    weekend_contributions: 150,
    account_age_years: 6.09,
    career_stage_bucket: "likely_early_career",
    career_stage_confidence: 0.81,
    career_stage_reasons: [
      "Matched early-career signal: 'intern'.",
      "Matched student signal: 'gsoc'.",
    ],
    university_signal: false,
    university_name: "",
    university_domain: "",
    university_reasons: [],
    is_young: true,
    is_hireable: false,
    most_used_languages: [{ name: "TypeScript", size: 6500 }, { name: "JavaScript", size: 3000 }],
    stars_delta_7d: 18,
    stars_delta_30d: 110,
    followers_delta_30d: 9,
    momentum_score: 79,
    momentum_basis: "history",
    outreach_score: 82.3,
    score: 82.3,
  },
  {
    snapshot_date: "2026-04-21",
    login: "Crypto-Cat",
    name: "Crypto Cat",
    url: "https://github.com/Crypto-Cat",
    avatar_url: "https://avatars.githubusercontent.com/u/70304572?v=4",
    location: "Belfast, Northern Ireland",
    location_raw: "Belfast, Northern Ireland",
    location_normalized: "Belfast, Northern Ireland",
    jurisdiction: "Northern Ireland",
    irish_confidence: 0.95,
    irish_confidence_label: "High",
    bio: "Web malware PhD, offensive security enthusiast, CTF competitor.",
    email: "",
    email_masked: "",
    email_domain: "",
    website_url: "",
    followers: 1500,
    total_stars: 2031,
    top_repo_name: "BlackCat",
    top_repo_url: "https://github.com/Crypto-Cat/blackcat",
    top_repo_stars: 1300,
    recent_repo_count: 2,
    total_contributions_last_12_months: 284,
    weekend_contributions: 92,
    account_age_years: 10.23,
    career_stage_bucket: "likely_student",
    career_stage_confidence: 0.76,
    career_stage_reasons: ["Matched student signal: 'phd student' equivalent via profile text."],
    university_signal: false,
    university_name: "",
    university_domain: "",
    university_reasons: [],
    is_young: true,
    is_hireable: false,
    most_used_languages: [{ name: "Go", size: 4300 }, { name: "Python", size: 3100 }],
    stars_delta_7d: 8,
    stars_delta_30d: 40,
    followers_delta_30d: 12,
    momentum_score: 61,
    momentum_basis: "history",
    outreach_score: 78.6,
    score: 78.6,
  },
  {
    snapshot_date: "2026-04-21",
    login: "AndrewLJackson",
    name: "Andrew L Jackson",
    url: "https://github.com/AndrewLJackson",
    avatar_url: "https://avatars.githubusercontent.com/u/1490210?v=4",
    location: "Dublin, Ireland",
    location_raw: "Dublin, Ireland",
    location_normalized: "Dublin, Ireland",
    jurisdiction: "Republic of Ireland",
    irish_confidence: 0.95,
    irish_confidence_label: "High",
    bio: "Associate Professor in Ecology and Evolution at Trinity College Dublin.",
    email: "andrew@tcd.ie",
    email_masked: "an****@tcd.ie",
    email_domain: "tcd.ie",
    website_url: "",
    followers: 104,
    total_stars: 81,
    top_repo_name: "ecology-tools",
    top_repo_url: "https://github.com/AndrewLJackson/ecology-tools",
    top_repo_stars: 33,
    recent_repo_count: 1,
    total_contributions_last_12_months: 92,
    weekend_contributions: 8,
    account_age_years: 12.59,
    career_stage_bucket: "academic_research",
    career_stage_confidence: 0.94,
    career_stage_reasons: [
      "University signal: Trinity College Dublin.",
      "Matched academic seniority signal: 'associate professor'.",
    ],
    university_signal: true,
    university_name: "Trinity College Dublin",
    university_domain: "tcd.ie",
    university_reasons: ["Public email domain matches Trinity College Dublin."],
    is_young: false,
    is_hireable: false,
    most_used_languages: [{ name: "R", size: 2500 }, { name: "Python", size: 1400 }],
    stars_delta_7d: 0,
    stars_delta_30d: 2,
    followers_delta_30d: 1,
    momentum_score: 18,
    momentum_basis: "history",
    outreach_score: 37.4,
    score: 37.4,
  },
];

let rows = [];
let view = [];
let meta = {};
let page = 1;
let pageSize = 50;
let sortKey = "total_stars";
let sortDir = "desc";

const $ = (id) => document.getElementById(id);

const tbody = () => $("table-body");
const rowCount = () => $("row-count");
const pageInfo = () => $("page-info");
const prevBtn = () => $("prev-page");
const nextBtn = () => $("next-page");
const pageSizeSel = () => $("page-size");
const searchInput = () => $("filter-search");
const stageFilter = () => $("filter-stage");
const jurisdictionFilter = () => $("filter-jurisdiction");
const minStarsFilter = () => $("filter-stars");
const minMomentumFilter = () => $("filter-momentum");
const minIrelandFilter = () => $("filter-ireland-confidence");
const universityOnlyFilter = () => $("filter-university");
const applyBtn = () => $("apply-filters");
const resetBtn = () => $("reset-filters");
const sortButtons = () => Array.from(document.querySelectorAll("th button[data-sort]"));

function parseMaybeJson(value, fallback = []) {
  if (Array.isArray(value)) return value;
  if (!value || typeof value !== "string") return fallback;
  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
}

function toBool(value) {
  const normalized = String(value ?? "").trim().toLowerCase();
  return normalized === "1" || normalized === "true" || normalized === "t";
}

function toNum(value, fallback = 0) {
  if (value === "" || value == null) return fallback;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function maskEmail(email) {
  if (!email || !String(email).includes("@")) return "";
  const [local, domain] = String(email).split("@");
  if (!local) return "";
  const visible = local.length <= 2 ? `${local[0] || ""}*` : `${local.slice(0, 2)}${"*".repeat(Math.max(local.length - 2, 1))}`;
  return `${visible}@${domain}`;
}

function coerce(row) {
  const location = row.location || row.location_normalized || row.location_raw || "";
  const careerStageReasons = parseMaybeJson(row.career_stage_reasons, row.career_stage_reasons ? [row.career_stage_reasons] : []);
  const universityReasons = parseMaybeJson(row.university_reasons, row.university_reasons ? [row.university_reasons] : []);
  const languages = parseMaybeJson(row.most_used_languages, []);

  return {
    ...row,
    snapshot_date: row.snapshot_date || meta.snapshot_date || "",
    followers: toNum(row.followers),
    total_stars: toNum(row.total_stars),
    top_repo_stars: toNum(row.top_repo_stars),
    total_contributions_last_12_months: toNum(row.total_contributions_last_12_months || row.total_commits_in_the_last_year),
    weekend_contributions: toNum(row.weekend_contributions || row.weekend_commits),
    account_age_years: toNum(row.account_age_years),
    irish_confidence: toNum(row.irish_confidence),
    career_stage_confidence: toNum(row.career_stage_confidence),
    recent_repo_count: toNum(row.recent_repo_count),
    stars_delta_7d: safeNullableNumber(row.stars_delta_7d),
    stars_delta_30d: safeNullableNumber(row.stars_delta_30d),
    followers_delta_30d: safeNullableNumber(row.followers_delta_30d),
    momentum_score: toNum(row.momentum_score),
    outreach_score: toNum(row.outreach_score || row.score),
    score: toNum(row.score || row.outreach_score),
    university_signal: typeof row.university_signal === "boolean" ? row.university_signal : toBool(row.university_signal),
    is_young: typeof row.is_young === "boolean" ? row.is_young : toBool(row.is_young),
    is_hireable: typeof row.is_hireable === "boolean" ? row.is_hireable : toBool(row.is_hireable),
    location,
    email_masked: row.email_masked || maskEmail(row.email),
    career_stage_reasons: careerStageReasons,
    university_reasons: universityReasons,
    most_used_languages: languages,
  };
}

function safeNullableNumber(value) {
  if (value === "" || value == null) return null;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

function cmp(a, b, key, dir) {
  const av = a[key];
  const bv = b[key];
  const aNum = typeof av === "number" && Number.isFinite(av);
  const bNum = typeof bv === "number" && Number.isFinite(bv);
  let result = 0;
  if (aNum && bNum) result = av - bv;
  else result = String(av ?? "").localeCompare(String(bv ?? ""), undefined, { sensitivity: "base" });
  return dir === "asc" ? result : -result;
}

function resetFilters(shouldRender = true) {
  searchInput().value = "";
  stageFilter().value = "";
  jurisdictionFilter().value = "";
  minStarsFilter().value = "0";
  minMomentumFilter().value = "0";
  minIrelandFilter().value = "0";
  universityOnlyFilter().checked = false;
  if (shouldRender) {
    sortKey = "total_stars";
    sortDir = "desc";
    applyFilters();
  }
}

function applyFilters() {
  const search = searchInput().value.trim().toLowerCase();
  const stage = stageFilter().value;
  const jurisdiction = jurisdictionFilter().value;
  const minStars = toNum(minStarsFilter().value);
  const minMomentum = toNum(minMomentumFilter().value);
  const minIrelandConfidence = toNum(minIrelandFilter().value);
  const universityOnly = universityOnlyFilter().checked;

  view = rows.filter((row) => {
    const haystack = [row.login, row.name, row.bio, row.location, row.university_name, row.top_repo_name]
      .join(" ")
      .toLowerCase();

    if (search && !haystack.includes(search)) return false;
    if (stage && row.career_stage_bucket !== stage) return false;
    if (jurisdiction && row.jurisdiction !== jurisdiction) return false;
    if (minStars && row.total_stars < minStars) return false;
    if (minMomentum && row.momentum_score < minMomentum) return false;
    if (minIrelandConfidence && row.irish_confidence < minIrelandConfidence) return false;
    if (universityOnly && !row.university_signal) return false;
    return true;
  });

  view.sort((a, b) => cmp(a, b, sortKey, sortDir));
  page = 1;
  render();
}

function formatNullableDelta(value) {
  if (value == null) return "—";
  const sign = value > 0 ? "+" : "";
  return `${sign}${num(value)}`;
}

function num(value) {
  if (value === "" || value == null) return "";
  return Number(value).toLocaleString();
}

function pill(text, tone, title = "") {
  return `<span class="pill ${tone}" ${title ? `title="${escapeHTML(title)}"` : ""}>${escapeHTML(text)}</span>`;
}

function stageLabel(bucket) {
  return {
    likely_student: "Student",
    likely_early_career: "Early-career",
    academic_research: "Academic",
    industry_experienced: "Experienced",
    unknown: "Unknown",
  }[bucket] || "Unknown";
}

function stageTone(bucket) {
  return {
    likely_student: "stage-student",
    likely_early_career: "stage-early",
    academic_research: "stage-academic",
    industry_experienced: "stage-experienced",
    unknown: "stage-unknown",
  }[bucket] || "stage-unknown";
}

function formatConfidence(value) {
  return `${Math.round(value * 100)}%`;
}

function topLanguage(row) {
  if (!row.most_used_languages.length) return "";
  return row.most_used_languages[0].name || "";
}

function renderSummary() {
  $("dataset-note").textContent = meta.snapshot_date
    ? `Snapshot: ${meta.snapshot_date}${meta.fallback ? " • fallback sample data" : ""}`
    : "Snapshot unavailable";
}

function render() {
  const total = view.length;
  const pages = Math.max(1, Math.ceil(total / pageSize));
  page = Math.min(Math.max(1, page), pages);
  const start = (page - 1) * pageSize;
  const slice = view.slice(start, start + pageSize);

  renderSummary();

  tbody().innerHTML = slice.map((row) => {
    const stage = pill(
      `${stageLabel(row.career_stage_bucket)} • ${formatConfidence(row.career_stage_confidence)}`,
      stageTone(row.career_stage_bucket),
      row.career_stage_reasons.join(" • ")
    );
    const locationBadges = [
      pill(row.jurisdiction === "Republic of Ireland" ? "ROI" : row.jurisdiction === "Northern Ireland" ? "NI" : row.jurisdiction, "geo", `Ireland confidence: ${formatConfidence(row.irish_confidence)}`),
      pill(row.irish_confidence_label || "Unknown", "confidence"),
    ].join("");
    const university = row.university_signal
      ? `<div class="detail-strong">${escapeHTML(row.university_name || row.university_domain || "University signal")}</div>
         <div class="detail-sub">${escapeHTML(row.university_domain || row.university_reasons[0] || "")}</div>`
      : `<span class="muted">—</span>`;
    const repo = row.top_repo_url
      ? `<a href="${row.top_repo_url}" target="_blank" rel="noopener">${escapeHTML(row.top_repo_name || "View repo")}</a>
         <div class="detail-sub">${num(row.top_repo_stars)} stars</div>`
      : `<span class="muted">—</span>`;
    const avatar = row.avatar_url ? `<img class="avatar" src="${row.avatar_url}" alt="${escapeHTML(row.login)} avatar">` : "";
    const profile = `<div class="profile-cell">
        <a href="${row.url || "#"}" target="_blank" rel="noopener">${avatar}</a>
        <div>
          <a class="detail-strong" href="${row.url || "#"}" target="_blank" rel="noopener">${escapeHTML(row.login || "")}</a>
          <div class="detail-sub">${escapeHTML(row.name || "")}</div>
        </div>
      </div>`;

    return `<tr>
      <td>${profile}</td>
      <td>
        <div class="detail-strong">${escapeHTML(row.location || "")}</div>
        <div class="badge-row">${locationBadges}</div>
      </td>
      <td>${stage}</td>
      <td>${university}</td>
      <td>${num(row.followers)}</td>
      <td>${num(row.total_stars)}</td>
      <td>${repo}</td>
      <td>
        <div class="detail-strong">${num(row.total_contributions_last_12_months)}</div>
        <div class="detail-sub">weekend ${num(row.weekend_contributions)}</div>
      </td>
      <td>
        <div class="detail-strong">${formatNullableDelta(row.stars_delta_30d)}</div>
        <div class="detail-sub">followers ${formatNullableDelta(row.followers_delta_30d)}</div>
      </td>
      <td>
        <div class="detail-strong">${row.momentum_score.toFixed(1)}</div>
        <div class="detail-sub">${escapeHTML(row.momentum_basis)}</div>
      </td>
    </tr>`;
  }).join("");

  rowCount().textContent = `${total.toLocaleString()} profiles`;
  pageInfo().textContent = `Page ${page} of ${pages}`;
  prevBtn().disabled = page <= 1;
  nextBtn().disabled = page >= pages;

  sortButtons().forEach((btn) => {
    const key = btn.getAttribute("data-sort");
    btn.setAttribute("aria-sort", key === sortKey ? (sortDir === "asc" ? "ascending" : "descending") : "none");
    const indicator = btn.querySelector(".sort-indicator");
    if (indicator) indicator.textContent = key === sortKey ? (sortDir === "asc" ? "▲" : "▼") : "";
    btn.closest("th")?.classList.toggle("active-sort", key === sortKey);
  });
}

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, (match) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[match]));
}

function attachEvents() {
  sortButtons().forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.getAttribute("data-sort");
      if (key === sortKey) {
        sortDir = sortDir === "asc" ? "desc" : "asc";
      } else {
        sortKey = key;
        sortDir = "desc";
      }
      view.sort((a, b) => cmp(a, b, sortKey, sortDir));
      render();
    });
  });

  applyBtn().addEventListener("click", applyFilters);
  resetBtn().addEventListener("click", () => resetFilters(true));
  prevBtn().addEventListener("click", () => {
    page -= 1;
    render();
  });
  nextBtn().addEventListener("click", () => {
    page += 1;
    render();
  });
  pageSizeSel().addEventListener("change", () => {
    pageSize = toNum(pageSizeSel().value, 50);
    render();
  });
}

async function fetchDataset() {
  for (const url of DATA_URLS) {
    try {
      const response = await fetch(url, { mode: "cors" });
      if (!response.ok) continue;
      if (url.endsWith(".json")) {
        const payload = await response.json();
        const users = Array.isArray(payload) ? payload : payload.users || [];
        return {
          rows: users,
          meta: {
            snapshot_date: payload.snapshot_date || users[0]?.snapshot_date || "",
            fallback: false,
          },
        };
      }

      const text = await response.text();
      const parsed = Papa.parse(text, { header: true, skipEmptyLines: true });
      return {
        rows: parsed.data,
        meta: {
          snapshot_date: parsed.data[0]?.snapshot_date || "",
          fallback: false,
        },
      };
    } catch (error) {
      console.warn(`Failed to load dataset from ${url}`, error);
    }
  }

  return {
    rows: FALLBACK_ROWS,
    meta: {
      snapshot_date: FALLBACK_ROWS[0]?.snapshot_date || "",
      fallback: true,
    },
  };
}

async function init() {
  attachEvents();
  pageSize = toNum(pageSizeSel().value, 50);

  const dataset = await fetchDataset();
  meta = dataset.meta;
  rows = dataset.rows.map(coerce);
  view = rows.slice().sort((a, b) => cmp(a, b, sortKey, sortDir));
  render();
}

document.addEventListener("DOMContentLoaded", init);
