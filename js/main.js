var Form = document.querySelector(".form")
var Select = document.querySelector(".select")
var title = document.querySelector(".title")
var input = document.querySelector(".input")
var dolar = 11223;
var euro = 11631;
var rubl = 184;

Form.addEventListener('submit', function (evt) {
  console.log(Select.value);
    evt.preventDefault();
    if (Select.value == "usd") {
        title.textContent = (input.value / euro).toFixed(4) + "$"
    } else if (Select.value == "euro") {
        title.textContent = (input.value / dolar).toFixed(4) + "€"
      } else if (Select.value == "rubl") {
        title.textContent = (input.value / rubl).toFixed(4) + " ₽"
      } else if (input < 0) {
        title.textContent = "Minus son kiritish munkun emas"
      } else if (isNaN(input)) {
          title.textContent = "Son kiriting"
      }
    });