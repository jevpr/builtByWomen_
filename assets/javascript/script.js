const img = document.getElementById("menuImg");
img.addEventListener("click", revealMenu);

function revealMenu() {
  const x = document.getElementById("dropDown");
  if (x.style.display === "block") {
    img.style.transform = "rotate(0deg)";
    img.style.transition = "transform 3s";
    setTimeout(() => {
      x.style.display = "none";
    }, 200);
  } else {
    img.style.transform = "rotate(180deg)";
    img.style.transition = "transform 2s";
    setTimeout(() => {
      x.style.display = "block";
    }, 200);
  }
}

const arrows = document.querySelectorAll("#arrowTwo");
const subMenu = document.getElementById("builtByDropd");
const hiddenDiv = document.getElementById("hiddenDiv");

arrows.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    if (arrow.style.transform === "rotate(90deg)") {
      arrow.style.transform = "rotate(0deg)";
      setTimeout(() => {
        subMenu.style.display = "none";
        hiddenDiv.style.display = "none";
      }, 200);
    } else {
      arrow.style.transform = "rotate(90deg)";
      setTimeout(() => {
        subMenu.style.display = "block";
        hiddenDiv.style.display = "block";
      }, 200);
    }
  });
});
