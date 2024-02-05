var openn = document.getElementById("open");
var closse = document.getElementById("close");
var nav = document.getElementsByClassName("nav")[0];
openn.addEventListener("click", () => {
    openn.style.display = "none";
    closse.style.display = "block";
    nav.style.visibility = "visible";
});
closse.addEventListener("click", () => {
    closse.style.display = "none";
    openn.style.display = "block";
    nav.style.visibility = "hidden";
});