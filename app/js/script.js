const btnElOne = document.getElementById("btn-el-1");
const btnElTwo = document.getElementById("btn-el-2");
const btnElThree = document.getElementById("btn-el-3");
const sectionOne = document.getElementById("section-1");
const sectionTwo = document.getElementById("section-2");
const sectionThree = document.getElementById("section-3");
btnElOne.addEventListener("click", () => {
 sectionOne.classList.toggle("js");
});
btnElTwo.addEventListener("click", () => {
 sectionTwo.classList.toggle("js");
});
btnElThree.addEventListener("click", () => {
 sectionThree.classList.toggle("js");
});
