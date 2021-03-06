alert("HI"); // -> 경고창에 HI 뜸

var name = prompt("이름을 입력하세요"); // -> 입력창이 뜨면서 입력된 값이 name 변수에 저장된다.

var age = parseInt(prompt("나이를 입력하세요")); // -> prompt가 반환하는 값은 문자열이다. 숫자 값을 구하려면 parseInt나 parseFloat 메서드를 활용해서 숫자로 바꿔준다.
var height = parseFloat(prompt("키를 입력하세요"));

let ret = confirm("링크를 표시할래?"); // -> confirm 메서드는 논리값을 반환한다. 확인 버튼을 누르면 true가 반환되고 취소를 누르면 flase가 반환된다.

let a = [2, 4, 6];
console.log(
  "배열",
  a,
  "의 길이는",
  a,
  length,
  "입니다."
); /* -> console 객체의 메서드에는 인수 여러 개를 쉼표로 구분해서 넘길 수 있다.
그러면 각 값을 문자열로 표현한 후 공백 문자로 구분해서 순서대로 출력한다.*/

let a = [2, 4, 6];
console.log("배열" + a + "의 길이는" + a.length + "입니다."); // -> 값을 한 문자열로 연결해서 인수로 넘기면 공백 문자를 빼고 출력할 수 있다.

/* 서식 문자열을 사용하여 값을 지정된 서식으로 변환해서 출력할 수 있다.
console 객체의 메서드에는 첫 번째 인수로 받은 문자열 안에 포함되어 있는 %s와  %f등의 서식 문자열을 두 번째 이후 인수의 값으로 바꾸는 기능이 있다.
아래 코드에서는 %s 부분이 age로 바뀌고 %f 부분이 name의 값으로 바뀐다.
이때 각 값의 타입은 서식 문자열이 가리키는 타입으로 변환된다.*/
let name = "이도엽";
let age = 24;
console.log("안녕 그의 나이는 %f 이고 이름은 %s 이야", age, name);

/* console.dir 메서드는 객체의 프로퍼티를 나열한다.
인수로는 객체 하나를 받는다.
웹 브라우저에는 객체의 펼침 상태를 뜻하는 옆으로 삼각형 마크가 표시된다.
마크를 클릭하면 객체 내부의 프로퍼티를 펼쳐서 볼 수 있다 */
let a = { x: 1, y: 2 };
console.dir(a);
ㄴ;
/* console.time. 과 console.timeEnd 메서드를 사용해서 특정 코드의 실행 시간을 측정할 수 있다.
console.time 메서드에 타이머 이름을 뜻하는 문자열을 인자로 넘겨 호출한다.
그리고 실행 시간을 측정하는 작업이 끝난 후에 console.timeEnd 메서드에 타이머 이름을 인수로 넘겨서 호출한다.
그러면 처리에 소요된 시간이 밀리초 단위초 표시된다. */
console.time("똑딱똑딱");
alert("확인 버튼을 누르세요");
console.timeEnd("똑딱똑딱");
