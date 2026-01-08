const btnS = document.getElementById("btn-small");
const btnL = document.getElementById("btn-large")
const text = document.getElementById("wrap")
let count = 16
const al = document.getElementById("alart")


btnL.onclick = () => {
    count += 2;
    console.log(count)
    text.style.fontSize = `${count}px`;
    if (count > 32) {
        count -= 2;
        al.innerText = "これ以上大きくできません";
    }
}

btnS.onclick = () => {
    count -= 2;
    console.log(count)
    if (count < 4) {
        count += 2;
        al.innerText = "これ以上小さくできません";

    }
    text.style.fontSize = `${count}px`;
}




