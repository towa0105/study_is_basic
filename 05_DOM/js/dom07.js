const size = document.getElementById("size")
const text = document.getElementById("item_name")
const btn = document.getElementById("btn")
const list = document.getElementById("orderlist")

btn.onclick = () => {
    list.innerHTML += `<li>${size.value}サイズ： ${item_name.value}</li> `;
}

