const btnS = document.getElementById("btn-small");
const btnL = document.getElementById("btn-large")
const text = document.getElementById("wrap")
let count = 16



btnL.onclick = () => {
    count += 2;
    console.log(count)
    text.style.fontSize = `${count}px`;

}

btnS.onclick = () => {
    count -= 2;
    console.log(count)
    if (count < 4) {
        count += 2;
    }
    text.style.fontSize = `${count}px`;
}


