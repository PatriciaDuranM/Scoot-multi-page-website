const acordionElement = document.getElementById("acordion");
const acordionTextElement = document.getElementById("acordion-text");
const menuElement = document.getElementById("menu");
const burgerElement = document.getElementById("burger");

/*menu*/

const toggleMenu = () => {
  menuElement.classList.toggle("menu-show");
  document.body.classListtoggle("showing-menu");

  if (menuElement.classList.contains("menu-show")) {
    burgerElement.src = "./assets/icons/close.svg";
  } else {
    burgerElement.src = "assets/icons/hamburger.svg";
  }
};

burgerElement.addEventListener("click", toggleMenu);

/*acordeon*/
const showText = (event) => {
  console.log(event.target);
  event.target.children[1].classList.toggle("acordion-show");
};

acordionElement.addEventListener("click", showText);
