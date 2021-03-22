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
/* 첫 번쨔ㅐ else 절 안에 있는 if/else 문은 한 문장이므로 그 문장을 둘러싼 중괄호를 삭제할 수 있다. 그리고 줄 바꿈 문자와 탭 문자도 함께 제거한 후 들여쓰기를 하면 다음과 같은 모습니 된다.*/
num = 3;
if (num == 1) {
  console.log("One");
} else if (num == 2) {
  console.log("Two");
} else {
  console.log("Other");
}
