class Calculator {
  constructor(displayElement) {
    this.displayElement = displayElement;
    this.displayContent = "";
  }
  appendNumber(number) {
    this.displayContent += number;
  }
  updateDisplay() {
    this.displayElement.value = this.displayContent;
  }
}

const buttons = document.querySelectorAll("button");
const displayElement = document.querySelector("input");

const calculator = new Calculator(displayElement);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    switch (button.dataset.type) {
      case "operator":
        console.log("operator");
        break;
      case "ac":
        console.log("ac");
        break;
      case "equals":
        console.log("equals");
        break;
      default:
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
        break;
    }
  });
});

/*숫자 버튼을 클릭할 때마다 displayContent 속성에 숫자가 추가되고 input에도 표시되도록 appendNumber, updateDisplay 메서드 추가

switch문의 default에서 추가한 메서드 호출 다음부터 진행 */
