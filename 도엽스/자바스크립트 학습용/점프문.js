/* 점프문은 프로그램의 다른 위치로 이동하는 제어 구문이다.
자바스크립트에서 사용할 수 있는 점프문에는 break문, conticue문, return문, throw문이 있다.
문장에 라벨을 붙이면 break문이나 continue문을 실행한 후에 점프할 수 있는 위치가 된다.*/

/*자바스크립트에서는 모든 문장에 라벨을 붙일 수 있으며 사용법은 다음과 같다*/
/* 라벨 이름 : 문장 */
/* 라벨 이름에는 모든 식별자를 사용할 수 있다. 자바스크립트에서 라벨로 점프할 수 있는 문장은 break문과 continue문뿐이다.
break문은 switch문과 반복문 안에서만 사용할 수 있고 continue문은 반복문 안에서만 사용할 수 있다.
따라서 실제로 라벨을 붙여서 사용할 수 있는 문장은 switch문과 반복문 뿐이다.*/

var a = [2, 4, 6, 8, 10],
  b = [1, 3, 5, 6, 9, 11];
loop: for (var i = 0; i < a.length; i++) {
  for (var j = 0; j < b.length; j++) {
    if (a[i] == b[j]) break loop;
  }
}
console.log("a[" + i + "]=b[" + j + "]");

/*continue 문에도 점프할 라벨을 지정할 수 있는데 사용법은 다음과 같다*/
/*continue 라벨 이름; */
/*continue문은 라벨 지정 여부와 관계없이 반복문 안에서만 사용할 수 있다는 점이 break문과 다른 점이다.*/
/*continue문을 실행하면 반복문 실행을 멈추고 반복을 새로 시작한다. 바로 이때의 동작이 반복문에 따라 달라진다*/

let text = "";

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  text = text + i;
}

console.log(text);
