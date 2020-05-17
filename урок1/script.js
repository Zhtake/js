"use strict";

let money, time, answer, guest;
function start() {
  money = +prompt("Ваш бюджет на месяц?", "");
  time = prompt("Введите дату в формате YYYY-MM-DD", "");

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", "");
  }
}
start();
let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
};
function chooseExpenses() {
  for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
      b = prompt("Во сколько обойдеться?", "");

    if (
      typeof a === "string" &&
      typeof a != null &&
      typeof b != null &&
      a != "" &&
      b != "" &&
      a.length < 50
    ) {
      console.log("done");
      appData.expenses[a] = b;
    } else {
      i = i - 1;
    }
  }
}
chooseExpenses();

function detecDayBudget() {
  appData.moneyPerDay = (appData.budget / 30).toFixed();
  alert("Ежедневный бюджет" + " " + appData.moneyPerDay);
}
detecDayBudget();

function detectLevel() {
  if (appData.moneyPerDay < 500) {
    console.log("Низкий уровень дохода");
  } else if (appData.moneyPerDay > 500 && appData.moneyPerDay < 1000) {
    console.log("Средний уровень дохода");
  } else if (appData.moneyPerDay > 1000) {
    console.log("Высокий уровень дохода");
  } else {
    console.log("Что-то пошло не так");
  }
}
detectLevel();
function checkSavings() {
  if (appData.savings == true) {
    let save = +prompt("Какова сумма накоплении"),
      percent = +prompt("Под какой процент");
    appData.monthIncome = (save / 100 / 12) * percent;
    alert("Доход в месяц с вашего депозита:" + appData.monthIncome);
  }
}
checkSavings();

function chooseOptExpenses() {
  for (let i = 1; i < 4; i++) {
    let question = i,
      answer = prompt("Статья необязательных расходов?", "");

    if (
      typeof answer === "string" &&
      typeof answer != null &&
      answer != "" &&
      answer.length < 20
    ) {
      console.log("done");
      appData.optionalExpenses[question] = answer;
    } else {
      i = i - 1;
    }
  }
}
chooseOptExpenses();
