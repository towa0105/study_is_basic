let wallet = 12800;
let price = 980;
let count = 0;

while (true) {
    let price;
    count++;

    if (count > 4) {
        price = 750;
    }

    else {
        price = 980;
    }

    if (wallet >= price) {
        wallet -= price;
        console.log(`${count}回目の買い物成功。残金は${wallet}円`);
    } else {
        console.log(`買い物終了${count - 1}個買えた`);
        break;
    }
}
