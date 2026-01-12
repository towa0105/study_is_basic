const msg = document.getElementById("text");
const btn = document.getElementById("btn");
const out = document.getElementById("out");

function message(val) {
    out.innerText = (`あたなの入力した文字は${msg.value}です。`)
}

btn.onclick = () => {
    message();
}
