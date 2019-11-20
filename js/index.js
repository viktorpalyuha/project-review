$("header .logo, .company-name").fadeIn(3000);
$("#main p").fadeIn(3000);
$("nav").fadeIn(3000);

function openCloseBurgerMenu() {
  let selectorUl = document.querySelector("ul");
  if (selectorUl.style.display === "flex") {
    selectorUl.style.display = "none";
  } else {
    selectorUl.style.display = "flex";
  }
}

const clock = document.querySelector(".clock");
setInterval(() => {
	clock.innerHTML = new Date().toLocaleTimeString();
}, 1000);