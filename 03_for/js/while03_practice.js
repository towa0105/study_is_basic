let wallet = 12800;
let price = 980;

while (true) {
    let price;

    if ( >= 5) {
        price = 750;
    } else {
        price = 980;
    }

    if (wallet >= price) {
        wallet -= price;
        count++;
        console.log(`${i}回目の買い物成功。残金は${wallet}円`);
    } else {
        console.log(`買い物終了${count}個買えた`);
        break;
    }
}
