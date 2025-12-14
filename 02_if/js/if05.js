let Photoshop = prompt("Photoshopの点数は?");
let Illustrator = prompt("Illustratorの点数は?");
Photoshop = Number(Photoshop);
Illustrator = Number(Illustrator)

let heikin = (Photoshop + Illustrator) / 2

console.log(`Photoshopは${Photoshop}点ね、Illustratorは${Illustrator}点ね、平均${heikin}点`)

if (heikin >= 0 && heikin <= 30) {
    console.log("がんばりなさい")

} if (heikin >= 31 && heikin <= 60) {
    console.log("まずまずね")

} if (heikin >= 61 && heikin <= 100) {
    console.log("頑張ったね")
}
if (heikin <= 0) {
    console.log("嘘つくんじゃない")
}
if (heikin >= 100) {
    console.log("嘘つくんじゃない")
}










