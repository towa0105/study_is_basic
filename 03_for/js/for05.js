let num = prompt("回数を入力")
let over_num = ("1から50の数値を入れてください")
num = Number(num);

if (num >= 50) {
    console.log(over_num)
}

for (let i = 0; i < num; i++) {
    const num = i + 1;
    console.log(num + "回目の表示")
}



// console.log(`11. 都道府県番号を入力し、その値に該当する都道府県名をコンソールに表示する`);

// let num = prompt(`Q11. 都道府県番号を入力`);
// let town = ("該当なし")
// if (25 == num) {
//     town = ("滋賀県")
// }
// if (26 == num) {
//     town = ("京都府")
// } if (27 == num) {
//     town = ("大阪府")
// } if (28 == num) {
//     town = ("兵庫県")
// } if (29 == num) {
//     town = ("奈良県")
// }
// if (30 == num) {
//     town = ("和歌山県")
// }
// console.log(`都道府県番号：${num}
// ${town}`)

