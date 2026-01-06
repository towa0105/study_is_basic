const size = document.getElementById("size")
const output = document.getElementById("text")

size.onchange = () => {
    output.innerText = `選択したサイズ：${size.value}サイズ`;
}