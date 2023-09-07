let inp = document.querySelector(".inpColor");
console.log(inp);

let pbCol = document.querySelector(".pbSetColor");
console.log(pbCol);

pbCol.textContent = "Push to set the color";

let bdy = document.querySelector("body");
console.log(bdy)

let inpColorValue = document.querySelector(".inpColorValue")
console.log(inpColorValue)

const inpColorPicker = document.getElementById("inpColorPicker")

const pTags = document.getElementById('p');
function useColorPicker(){
    let col =inpColorPicker.value;
    console.log(col);
    bdy.style.backgroundColor = col;
    pbCol.style.color = col;
}
function setBackgroundColor(){
    let col = inp.value;
    console.log(col);
    bdy.style.backgroundColor = col;
    pbCol.style.color = col;
}
pbCol.addEventListener('click', setBackgroundColor);

inpColorPicker.addEventListener("input", useColorPicker);

