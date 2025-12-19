let num = prompt("回数を入力")
let over_num = ("1から50の数値を入れてください")
num = Number(num);

if (num >= 51) {
    console.log(over_num)
}
else for (let i = 0; i < num; i++) {
    const num = i + 1;
    console.log(num + "回目の表示")
}
