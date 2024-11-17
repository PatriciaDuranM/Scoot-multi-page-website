const acordionElement = document.getElementById("acordion");
const acordionTextElement = document.getElementById("acordion-text");

const showText = (event) => {
  console.log(event.target);
  event.target.children[0].classList.toggle["acordion-show"];
};

acordionElement.addEventListener("click", showText);
