const menu = [
  "唐揚げ定食",
  "焼き魚定食",
  "酢豚定食",
  "ステーキ定食",
  "カツカレー定食",
];

const menu_ul = document.getElementById("menu");

menu.forEach((e, i) => {
  // 配列arrの中身が1つづつ最後まで繰り返される
  console.log(e, i);
  menu_ul.innerText += e + ",";
});

