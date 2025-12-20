//残金
let wallet = 12800;
// //価格
let price = 980;

// for(i<)

// let afterprice = wallet - price;
// console.log(afterprice)


for (let i = 0; i < num; i++) {
    const num_1 = i + 1;
    console.log(num_1 + "回目の表示")
}




let money = 12800;
for (let i = 0; )

    while (true) {
        let price;

        // 5回目以降は割引
        if (i + 1 >= 5) {
            price = 750;
        } else {
            price = 980;
        }

        // 所持金が足りるか判定
        if (wallet >= price) {
            wallet -= price;
            i++;
            console.log(`${i}回目の買い物成功。残金は${wallet}円`);
        } else {
            console.log(`買い物終了${i}個買えた`);
            break;
        }
    }
