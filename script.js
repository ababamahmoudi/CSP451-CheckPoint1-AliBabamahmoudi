const box = document.getElementsByClassName("introduction")[0];

box.addEventListener("mouseenter", () => {
    console.log("Mouse is over the box!");
    box.style.backgroundColor = "#755761"
    box.style.color = "white";
})

box.addEventListener("mouseleave", () => {
    console.log("Mouse left the box!");
    box.style.backgroundColor = "#F1FFFA"
    box.style.color = "black";
})
