const btnElOne = document.getElementById("btn-el-1");
const btnElTwo = document.getElementById("btn-el-2");
const btnElThree = document.getElementById("btn-el-3");
const sectionOne = document.getElementById("section-1");
const sectionTwo = document.getElementById("section-2");
const sectionThree = document.getElementById("section-3");
const mainEl = document.getElementById("main");
btnElOne.addEventListener("click", () => {
 sectionOne.classList.toggle("js");
 sectionTwo.classList.toggle("none");
 sectionThree.classList.toggle("none");
 mainEl.classList.toggle("width");
});
btnElTwo.addEventListener("click", () => {
 sectionTwo.classList.toggle("js");
 sectionOne.classList.toggle("none");
 sectionThree.classList.toggle("none");
 mainEl.classList.toggle("width");
});
btnElThree.addEventListener("click", () => {
 sectionThree.classList.toggle("js");
 sectionTwo.classList.toggle("none");
 sectionOne.classList.toggle("none");
 mainEl.classList.toggle("width");
});
