const btnElOne = document.getElementById("btn-el-1");
const btnElTwo = document.getElementById("btn-el-2");
const btnElThree = document.getElementById("btn-el-3");
const sectionOne = document.getElementById("section-1");
const sectionTwo = document.getElementById("section-2");
const sectionThree = document.getElementById("section-3");
const logo = document.getElementById("logo");
const about = document.getElementById("about");
const removeEvents = document.getElementById("remove-events");
const mainEl = document.getElementById("main");
logo.addEventListener("click", () => {
 about.classList.toggle("none");
});
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
removeEvents.addEventListener("click", () => {
 sectionOne.classList.remove("js");
 sectionOne.classList.remove("none");
 sectionTwo.classList.remove("js");
 sectionTwo.classList.remove("none");
 sectionThree.classList.remove("js");
 sectionThree.classList.remove("none");
 mainEl.classList.remove("width");
 about.classList.add("none");
});
