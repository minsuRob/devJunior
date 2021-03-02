alert("HI"); // -> 경고창에 HI 뜸

var name = prompt("이름을 입력하세요"); // -> 입력창이 뜨면서 입력된 값이 name 변수에 저장된다.

var age = parseInt(prompt("나이를 입력하세요")); // -> prompt가 반환하는 값은 문자열이다. 숫자 값을 구하려면 parseInt나 parseFloat 메서드를 활용해서 숫자로 바꿔준다.
var height = parseFloat(prompt("키를 입력하세요"));

let ret = confirm("링크를 표시할래?"); // -> confirm 메서드는 논리값을 반환한다. 확인 버튼을 누르면 true가 반환되고 취소를 누르면 flase가 반환된다.
