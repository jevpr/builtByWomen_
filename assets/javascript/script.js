const img = document.getElementById("menuImg");
img.addEventListener("click", revealMenu);

function revealMenu() {
  const x = document.getElementById("dropDown");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
