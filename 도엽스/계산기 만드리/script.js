class Calculator {
  constructor(displayElement) {
    this.displayElement = displayElement;
    this.displayContent = "";
    this.operatorCheck = true; // 연산자 선택 여부 저장
    this.equalsCheck = false; // = 버튼 클릭 여부 관리
    this.clear();
  }
  appendNumber(number) {
    if (this.equalsCheck) {
      this.displayContent = number;
      this.equalsCheck = false;
    } else {
      this.displayContent += number;
    }
    this.operatorCheck = false; // 숫자 입력 시 false
  }
  appenOperator(operator) {
    if (this.operatorCheck) return false; // operatorCheck값이 true면 함수 빠져나가기
    this.displayContent += operator;
    this.operatorCheck = true; // 연산자 입력 시 true
  }
  updateDisplay() {
    this.displayElement.value = this.displayContent;
  }
  clear() {
    this.displayContent = "";
    this.displayElement.value = 0;
    this.operatorCheck = true;
  }
  compute() {
    if (this.operatorCheck) return;
    this.displayContent = eval(
      this.displayContent.replace("\u00D7", "*").replace("\u00F7", "/") // 자바스크립트에서 해석할 수 있는 * / 로 변경
    );
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
        calculator.appenOperator(button.innerText);
        calculator.updateDisplay();
        break;
      case "ac":
        console.log("ac");
        calculator.clear();
        break;
      case "equals":
        console.log("equals");
        calculator.compute();
        calculator.updateDisplay();
        break;
      default:
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
        break;
    }
  });
});

//= 버튼을 클릭 후 숫자를 클릭한다면 AC기능과 비슷하게 새로운 식 입력을 시작하는거니
