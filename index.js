// bt1
function salaryCaculator() {
  let salary = document.getElementById("salary").value;
  let day = document.getElementById("day").value;

  let salaryTotal = 0;
  salaryTotal = salary * day;
  document.getElementById("salaryTotal").innerHTML = salaryTotal;
}

// bt2
function average() {
  let so1 = +document.getElementById("so_1").value;
  let so2 = +document.getElementById("so_2").value;
  let so3 = +document.getElementById("so_3").value;
  let so4 = +document.getElementById("so_4").value;
  let so5 = +document.getElementById("so_5").value;

  let averageTotal = 0;
  averageTotal = (so1 + so2 + so3 + so4 + so5) / 5;
  document.getElementById("averageTotal").innerHTML = averageTotal;
}

// bt3
function changeMoney() {
  let usd = document.getElementById("usd").value;

  let changeMoneyVnd = 0;
  changeMoneyVnd = 23500 * usd;

  document.getElementById("changeMoneyVnd").innerHTML = changeMoneyVnd;
}

// bt4
function squareAndPrimeter() {
  let cd = +document.getElementById("length").value;
  let cr = +document.getElementById("width").value;

  let dientich = 0;
  dientich = cd * cr;
  let chuvi = 0;
  chuvi = (cd + cr) * 2;

  document.getElementById("hcn").innerHTML =
    "dien tich bang:" + dientich + " chu vi bang:" + chuvi;
}

// bt5
function sum() {
  let number = document.getElementById("number").value;

  let sum = 0;
  sum = Math.floor(number / 10) + (number % 10);
  document.getElementById("sum2so").innerHTML = sum;
}
