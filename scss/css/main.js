document.addEventListener("DOMContentLoaded", function () {
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

if (searchBtn && searchInput) {
searchBtn.addEventListener("click", function () {
searchInput.focus();
});
}
});