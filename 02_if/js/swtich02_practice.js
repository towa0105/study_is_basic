const num1 = 8;
const num2 = 2;
const calc = "c";
let ans = 0;

// if (calc == "a") {
//   ans = num1 + num2;
// }
// else if (calc == "b") {
//   ans = num1 - num2;
// }
// else if (calc == "c") {
//   ans = num1 * num2;
// }
// else if (calc == "d") {
//   ans = num1 / num2;
// }
// else {
//   ans = "error!";
// }

// console.log(ans);





switch (calc) {
  case "a":
    console.log(num1 + num2);
    break;
  case "b":
    console.log(num1 - num2);
    break;
  case "c":
    console.log(num1 * num2)
    break;
  case "d":
    console.log(num1 / num2)
    break;
  default:
    console.log("error!");
    break;
}