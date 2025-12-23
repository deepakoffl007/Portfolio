window.addEventListener("load", () => {
  document.getElementById("page").classList.add("show");
});

function goTo(page) {
  window.location.href = page;
}

function openGitHub() {
  window.open("https://github.com/yourusername", "_blank");
}

function openLinkedIn() {
  window.open("https://www.linkedin.com/in/thamina-farzana?", "_blank");
}

function openEmail() {
  window.location.href = "mailto:yourmail@gmail.com";
}
