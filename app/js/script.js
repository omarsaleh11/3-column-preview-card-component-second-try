const btnEl = document.getElementById("btn-el");
const sectionOne = document.getElementsByClassName("section-1");
btnEl.addEventListener("click", () => {
 sectionOne.classList.toggle("js");
});
