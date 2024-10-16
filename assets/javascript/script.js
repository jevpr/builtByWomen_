const img = document.getElementById("menuImg");
img.addEventListener("click", revealMenu);

function revealMenu() {
  const x = document.getElementById("dropDown");
  if (x.style.display === "block") {
    img.style.transform = "rotate(-180deg)";
    img.style.transition = "transform 3s";
    setTimeout(() => {
      x.style.display = "none";
    }, 200);
  } else {
    img.style.transform = "rotate(180deg)";
    img.style.transition = "transform 2s";
    setTimeout(() => {
      x.style.display = "block";
    }, 1000);
  }
}
