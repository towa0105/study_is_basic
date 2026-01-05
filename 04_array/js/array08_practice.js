// 画面を更新する度に0-5までのランダムな値が入る
const no = Math.floor(Math.random() * 5);
console.log(no)

let omikuji = ["大吉ですおめでとう！", "中吉ですラッキー！", "コメントに困る吉です", "小吉です", "凶ですアンラッキー", "大凶です残念・・・"];
console.log(`${omikuji[no]}です`)