const text = document.getElementById("num");
const btn = document.getElementById("btn");
const out = document.getElementById("input");
const result = document.getElementById("result")


function setpx() {
    out.innerText = (text.value)
    result.innerText = (`${text.value}px`)

}


btn.onclick = () => {
    setpx();
}


