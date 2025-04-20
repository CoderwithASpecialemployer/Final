// Scroll-Fix: Verhindert automatisches Springen zu #Ankern beim Laden
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
window.addEventListener("load", () => {
  if (window.location.hash) {
    setTimeout(() => {
      window.scrollTo(0, 0);
      history.replaceState(null, "", window.location.pathname);
    }, 0);
  }
});

// Dark‑Mode Toggle mit Speicherung
const modeBtn = document.getElementById("modeBtn");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const stored = localStorage.getItem("theme");

if (stored === "dark" || (!stored && prefersDark)) {
  enableDark();
} else {
  disableDark();
}

modeBtn.addEventListener("click", () => {
  document.body.classList.contains("dark") ? disableDark() : enableDark();
});

function enableDark() {
  document.body.classList.add("dark");
  modeBtn.textContent = "☀️";
  localStorage.setItem("theme", "dark");
}

function disableDark() {
  document.body.classList.remove("dark");
  modeBtn.textContent = "🌙";
  localStorage.setItem("theme", "light");
}

// Back‑to‑Top Button
const toTop = document.getElementById("toTop");
window.addEventListener("scroll", () => {
  toTop.style.display = window.scrollY > 300 ? "flex" : "none";
});
toTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
