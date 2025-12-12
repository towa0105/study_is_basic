let wallet = prompt()

wallet = Number(wallet);

if (wallet > 3000) {
    console.log("購入することができます");
}
else if (wallet == 3000) {
    console.log("ピッタリです");
}
else {
    console.log("購入することができません");
}
