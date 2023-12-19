function inputVisibility(number) {
  let num = document.querySelector(".inputNumbers");

  let currentValue = num.value;

  num.value = currentValue + number;
  console.log(num.value);
}

function erase() {
  let num = document.querySelector(".inputNumbers");
  let ans = document.querySelector(".JS-answer");

  num.value = "";
  ans.innerHTML = "ans";
}

function del() {
  let num = document.querySelector(".inputNumbers");

  let currentValue = num.value;

  num.value = num.value.slice(0, -1);

  console.log(num.value);
}
function calculateExpression() {
  let expression = document.querySelector(".inputNumbers");
  const tokens = expression.value.match(/\d+|\+|\-|\*|\//g);

  if (!tokens) {
    return "Invalid expression";
  }

  let result = parseFloat(tokens[0]);

  for (let i = 1; i < tokens.length; i += 2) {
    const operator = tokens[i];
    const operand = parseFloat(tokens[i + 1]);

    switch (operator) {
      case "+":
        result += operand;
        break;
      case "-":
        result -= operand;
        break;
      case "*":
        result *= operand;
        break;
      case "/":
        result /= operand;
        break;
      default:
        return "Invalid operator";
    }
  }

  let ans = document.querySelector(".JS-answer");

  ans.innerHTML = result.toString();

  const btn = document.querySelector(".cT");

  btn.classList.add("Clicked");
}
