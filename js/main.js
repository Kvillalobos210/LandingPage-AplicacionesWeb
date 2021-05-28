
let btnOpen = document.querySelector(".open");
let btnClose = document.querySelector(".close");

btnOpen.addEventListener("click", () => {
    document.querySelector(".sidebar").style.width = "100%";
});

btnClose.addEventListener("click", () => {
    document.querySelector(".sidebar").style.width = "0";
});