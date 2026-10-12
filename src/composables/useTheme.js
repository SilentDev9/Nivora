export function getTheme() {
  return localStorage.getItem("nivora-theme") || document.documentElement.getAttribute("data-theme") || "dark";
}
export function applyTheme(theme) {
  const nextTheme = theme === "light" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", nextTheme);
  localStorage.setItem("nivora-theme", nextTheme);
  return nextTheme;
}
export function toggleTheme() {
  return applyTheme(getTheme() === "dark" ? "light" : "dark");
}
