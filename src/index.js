import "../styles/index.scss";

const showDesk = (e) => {
  const p = document.querySelector(`#${e.srcElement.id} p`);
  if (!p.classList.contains("active")) p.classList.add("active");
};
const elements = document.querySelectorAll("h2");
console.log(elements);
elements.forEach((el) => el.addEventListener("click", showDesk));
