let code = prompt("拡張子名を入力しよう");

switch (code) {
    case "CSS":
        console.log("拡張子は.cssです");
        break;
    case "HTML":
        console.log("拡張子は.htmlです");
        break;
    case "JS":
        console.log("拡張子は.jsです")
        break;
    default: //defaultは、上記の条件に無い場合に実行されます
        console.log("分からないファイルです");
        break;
}