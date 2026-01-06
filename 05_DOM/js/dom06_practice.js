const main = document.getElementById("main")
const sub = document.getElementById("sub")
const soup = document.getElementById("soup")
const side = document.getElementById("side")
const btn = document.getElementById("submit")
const menu = document.getElementById("menu")

btn.onclick = () => {
    menu.innerText = `注文内容は${main.value},${sub.value},${soup.value},${side.value}です。`;
}