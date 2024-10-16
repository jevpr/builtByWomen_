const img = document.getElementById("menuImg");
img.addEventListener("click", revealMenu);

function revealMenu() {
  const x = document.getElementById("dropDown");
  if (x.style.display === "none") {
    x.style.display = "block";
    img.style.transform = "rotate(180deg)";
    img.style.transition = "transform 2s";
  } else {
    img.style.transform = "rotate(-180deg)";
    img.style.transition = "transform 2s";
    setTimeout(() => {
      x.style.display = "none";
    }, 1000);
  }
}
