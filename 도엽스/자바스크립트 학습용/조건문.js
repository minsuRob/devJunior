/* 순차적 실행 흐름을 변화시키는 문장을 제어 구문이라고 한다.
조건문 : if/else,  switch,  try/catch/finally문  (조건에 따라 처리)
반복문 : while,  do/while,  for,  for/in,  for/of  (조건을 만족하면 처리를 반복 실행)
점프문 : break,  continue,  return,  throw  (프로그램의 다른 위치로 이동 */

if (a > 0) a++;

if (!name) {
  name = "";
  message = "이름을 입력하세요";
}

let x = 1;
if (x >= 0) console.log("Positive or Zero");
else console.log("Negative");

/*if 문도 일종의 문장이므로 if 문 안에 if문을 작성할 수 있다. 이러한 if 문을 가리켜 중첩된 if 문이라고 한다.
특히 else 절을 포함하는 if 문을 중첩해서 사용할 때는 if 와 else가 잘 호응하는지 주의 깊게 확인해야 한다.
else는 가장 가까운 if에 호응한다. 이처럼 잘못 해석되는 상황을 피하려면 if/else 문을 사용할 때 주의해야 한다. 실행할 문장이 단 하나더라도 문장으로 {}로 묶어서 블록 문장을 만들기를 권함. 머래*/

a = 3;
b = 2;
c = 1;
if (a > b) {
  if (a > c) {
    console.log("a가 가장 크다");
  } else {
    console.log("a는 b 이하");
  }
}

/* 이번에는 if/else 문을 작성할 때 자주 사용하는 패턴이다.*/
num = 1;
if (num == 1) {
  console.log("One");
} else {
  if (numm == 2) {
    console.log("Two");
  } else {
    console.log("Other");
  }
}
/* 첫 번째 else 절 안에 있는 if/else 문은 한 문장이므로 그 문장을 둘러싼 중괄호를 삭제할 수 있다. 그리고 줄 바꿈 문자와 탭 문자도 함께 제거한 후 들여쓰기를 하면 다음과 같은 모습니 된다.*/
num = 3;
if (num == 1) {
  console.log("One");
} else if (num == 2) {
  console.log("Two");
} else {
  console.log("Other");
}

/* switch 문에서는 블록 문장에 해당하는 중괄호 안에 case 표현식 :  의 형식을 갖출 case 라벨을 여러 개 작성한다. 여기에서 case 바로 뒤에 작성하는 표현식의 값을 case 라벨의 값이라고 한다.
그리고 옵션으로 defualt 라벨 한 개를 추가로 작성할 수 있다. switch 문이 실행되면 먼저 괄호 안에 들어 있는 표현식을 평가하고 평가한 값과 일치하는 case 라벨의 값을  위에서 아래 방향으로 찾는다.
라벨 값과 일치하는 case 라벨을 발견하지 못하면 default 라벨을 찾고 default 라벨 안의 문장을 실행한다. */

/* C나 JAVA 에서는 case 위에 반드시 상수 값을 써야 하지만 자바스크립트에서는 표현식을 그대로 쓸 수 있다.
단, 표현식을 쓰면 알고리즘을 파악하기 어려워질 수 있으므로 숫자 리터럴 또는 문자열 리터럴을 사용하는 편이 좋다. */
switch (n) {
  case 1:
    console.log("One");
    break;
  case 2:
    console.log("Two");
    break;
  case 3:
    console.log("Three");
    break;
  default:
    console.log("Other");
}
/*n이 1일 때는 "One", 2일 때는 "Two" 그 외에는 "Other"

/*함수 끝에 switch 문을 사용하면 break문 대신 return 문을 사용해도 똑같은 다중 분기를 표현할 수 있다.*/

function binaryOperation(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "%":
      return a % b;
    case "*":
      return a * b;
    case "^":
      return Math.pow(a, b);
    default:
      return NaN;
  }
}
console.log(binaryOperation(2, 3, "+"));
console.log(binaryOperation(2, 3, "%"));
console.log(binaryOperation(2, 3, "*"));
console.log(binaryOperation(2, 3, "^"));
console.log(binaryOperation(2, 3, "A"));
