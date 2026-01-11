const btn = document.getElementsByClassName("changeBtn");
const bg = document.getElementById("bg");

for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = (evt) => {
        console.log(btn)
        bg = evt.target.backgroundColor(#000);
    }
}


// btn.onclick = () => {
//     document.body.style.backgroundColor = "tomato";
// }

// output.innerText = evt.target.innerText + "が押された";


// vaScriptソース
//     ?
//     1
// 2
// 3
// function changeBoxColor(newColor) {
//     document.getElementById('sakurabox').style.backgroundColor = newColor;
// }