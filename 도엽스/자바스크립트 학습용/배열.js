/* 배열의 값은 목록으로 값마다 번호가 매겨져있다. 배열을 활용하면 다양한 알고리즘을 표현할 수 있다. */

/* 배열 리터럴은 쉼표로 구분한 값을 대괄효 [] 로 묶어서 표현한다 */
var evens = [2, 4, 6, 8];
/* 앞 코드에서 [...] 부분이 배열 리터럴이며 배열 값 하나를 배열 요소라고 부른다. 배열 요소에는 왼쪽부터 순서대로 0, 1, 2... 라는 번호가 매겨져있다. 요소에 매긴 번호는 요소 번호 또는 인덱스 라고 부른다 */
/* 자바스크립트의 배열은 객체 타입이므로 배열을 변수에 대입하면 배열의 참조가 변수에 저장된다. */

/* 배열 리터럴 안에 어떠한 요소도 작성하지 않으면 빈 배열이 생성된다 */
var empty = [];
console.log(empty); // -> []

/*배열 리터럴 요소의 값을 생략하면 그 요소는 생성되지 않는다. */
var a = [2, , 5];
console.log(a); // -> [2, empty, 5]
/* 앞 코드의 결과에서 인덱스가 1인 요소, 즉 두 번째  요소에 empty가 표시되어 있지만 실제로는 없습니다. */

/* 변수의 요소에는 변수와 마찬가지로 모든 타입의 값이 올 수 있습니다. */
var various = [3.14, "pi", true, { x: 1, y: 2 }, [2, 4, 6, 8]];
console.log(various);

/* 배열의 length 프로퍼티에는 배열 요소의 최대 인덱스 값+1이 담겨 있습니다. */
var evens = [2, 4, 6, 8];
evens.length; // -> 4
/* lenght 프로퍼티 값을 가리켜 배열 길이라고 부른다. C나 Java에서는 배열 길이가 배열 요소의 개수를 뜻하지만 자바스크립트에서는 배열 요소의 개수를 뜻하지 않는 경우가 있으므로 주의해야한다. */

/* lenght 프로퍼티에 현재의 배열 요소 개수보다 작고 0보다 큰 정수 값을 대입하면 배열 길이가 줄어든다. 즉, 그 배열 길이를 넘는 인덱스 번호에 할당된 배열 요소는 삭제된다 */
var a = [1, 2, 3];
a.length = 4;
console.log(a); // -> (4) [1, 2, 3, empty]
/* lenght 프로퍼티에 그 배열 길이보다 큰 정수 값을 대입하면 배열에 새로운 요소가 추가되지 않고 lenght 프로퍼티 값만 바뀝니다. */

/* Array 생성자로 생성하기. 배열은 Array 생성자로도 생성할 수 있다. */
var evens = new Array(2, 4, 6, 8); // [2, 4, 6, 8]을 생성
var empty = new Array(); // 빈 배열 [] 을 생성
var a = new Array(2, 4); // 배열 리터럴 [2, 4]와 똑같은 배열을 생성

/* Array 생성자의 인수가 한 개고 그 값이 양의 정수면 의미가 달라진다. 이때 인수는 배열 길이를 뜻하므로 배열이 그 길이만큼 생성된다. */
var x = new Array(3);
console.log(x.length); // -> 3
/* 반면 Array 생성자의 인수가 한 개고 그 값이 양의 정수가 아니면 오류가 발생한다. */
var x = new Array(-3);
console.log(x.length); // -> 오류 발생

/* 특정 인덱스의 요소는 대괄호[] 연산자를 사용해서 읽거나 쓸 수 있다. */
var evens = new Array(2, 4, 6, 8);
evens = [2]; // -> 6 (인덱스가 2인 요소 즉. 세 번재 요소) */
/* 배열 요소 하나는 변수 하나로 사용할 수 있다. 즉, 배열 요소에는 모든 타입의 데이터를 할당 할 수 있으며 프로그램에서 참조할 수 있다. */

/* 자바스크립트의 배열은 Array 객체이며 객체로 배열의 기능을 가상으로 흉내 낸 것이다. Array 객체는 배열의 인덱스를 문자열로 변환해서 그것을 프로퍼티로 이용한다. 즉, 배열에 대괄호 연산자를 사용하는 것은 객체에 대괄호 연산자를 사용하는 것과 마찬가지이며, 배열의 요소 번호로 숫자 값 대신 문자열을 사용할 수 있다. */
var a = ["a", "b", "c", "d"];
console.log(a["2"]); // -> c
/* 이때 없는 배열 요소를 읽으려고 시도하면 undefined가 반환된다 */
var a = ["a", "b", "c", "d"];
a[4]; // -> undefined
/* 이를 배열이 객체라는 사실에 비추어 생각하면 4.1.2절에서 언급한 객체에 없는 프로퍼티를 읽으려고 시도하면 undefined가 반환된다 와 같은 내용임을 알 수 있다. */
/* 또한 다음에 설명하는 배열 요소의 추가와 삭제, 희소 배열 등도 배열을 객체라고 생각하면 자연스럽게 이해할 수 있다. 이러한 특성은 C나 Java 같은 프로그래밍 언어의 배열에는 없는 특성이다. */

/* 배열 요소의 추가와 삭제. 없는 배열 요소에 값을 대입하면 새로운 요소가 추가된다. */
var hi = [1, 2, "3", 4];
hi[4] = 5;
console.log(hi); // -> (5) [1, 2, "3", 4, 5]
/* delete 연산자를 사용하면 특정 배열 요소를 삭제할 수 있다 */
var hi = [1, 2, "3", 4];
delete hi[1];
console.log(hi); // -> (4) [1, empty, "3", 4]
/* delete 연산자를 사용하여 배열의 요소를 삭제해도 그 배열의 length 프로퍼티 값은 바뀌지 않는다. 즉 삭제한 요소만 사라진다. */

/* 배열에 요소를 추가하거나 제거하면 인덱스가 0부터 시작되지 않는 배열이 만들어진다. 이러한 배열을 희소 배열이라고 부른다. */
var a = ["a", "b", "c"];
a[4] = "e";
console.log(a);  // -> (5) ["a", "b", "c", empty, "e"]  책에서는 undefined 이라고 표시된다는데...? 뭐냐 */
/* 위 코드를 실행하여 결과를 보면 a[3]이 undefined라고 표시되지만 실제로 저 요소는 없습니다. 이 코드의 배열을 객체 리터럴로 표시하면 다음과 같다. (이것을 실제로 배열 대신 사용하려면 이 외에 length 프로퍼티를 만들어야 한다.) */
{"0":"a", "1":"b", "2":"c", "4":"e"}
/* 이처럼 배열을 객체로 생각하면 희소 배열도 자연스럽게 이해할 수 있다. 이때 희소 배열의 길이는 배열 요소의 개수보다 크다. 반면 희소 배열이 아닌 배열의 길이는 배열 요소의 개수와 같다. */
var hi = [1, 2, "3", 4];
delete hi[1];
console.log(hi); // -> 인덱스 1에 해당하는 요소를 지웠으니 배열 요소의 개수는 3개가 되지만 길이는 유지되어 배열 요소의 개수보다 길이가 1 크다
var hi = [1, 2, "3", 4];
console.log(hi); // -> 반면 일반적일 배열은 배열 요소의 개수와 배열의 길이가 같다.

