const num1 = Number(prompt("birinci sayiyi girin:"));
let islem = prompt("+,-,*, /:");
const num2 = Number(prompt("ikinci sayiyi girin:"));

let sonuc = 0;
if (islem === "+") {
  sonuc = num1 + num2;
} else if (islem === "-") {
  sonuc = num1 - num2;
} else if (islem === "*") {
  sonuc = num1 * num2;
} else if (islem === "/") {
  sonuc = num1 / num2;
} else {
  consol.log("yanlis secim");
  sonuc = null;
}

if (sonuc) {
  console.log(`${num1} ${islem} ${num2} = ${sonuc}`);
}
