# vue.js_example
Vue.js 책과 관련한 예제들

	• package.json
		○ 프로젝트 정보와 의존성(dependencies)를 포함하는 파일로 해당 프로젝트에서 사용하는 패키지를 쉽게 추적 할 수 있게 도와줌. 
		○ 잘 관리시에 이 파일만 있으면 패키지를 그대로 설치하여 프로젝트 구성이 편함.
		○ npm init 시 생성됨.
	• npm install 패키지명 -옵션
		○ -g : global 처리, 
			§ Linux 계열 : Root 권한 설치
			§ Window : 다른 프로젝트에서도 사용할 수 있게 의미.
		○ -s : save 처리
			§ package.json의 depend에 추가
	• package-lock.json
		○ 패키지의 종속성을 관리하는 잠금파일
	• vue/cli package
		○ vue.js project를 생성하고 관리하는데 사용되는 일밙넉인 방법.
	• babel
		○ 구형 브라우저가 지원하지 않는 js 최신버전을 적용하게 함
	• eslint
		○ syntax error, vue.js directives의 적절하지않은 사용을 찾아줌.
	• npm run serve
		○ package.json의 scripts 부분에 정의된 serve를 실행하라는 의미
	• liveserver
		○ html을 실제 웹서버에서 구동하는 것처럼 실행.
		○ 파일 변경시 자동으로 갱신
	• vue.js devtools (chrome extension)
	• ES6 화살표 함수
		○ C#의 Lamda 함수와 비슷하게 => 사용
		○ function의 예시
			§ function func_nm(){}
			§ function func_nm(a, b){}
			§ function func_nm(){return val;}
			§ function func_nm(a,b){return val;}
		○ 화살표 예시
			§ () => {}
			§ (a, b) => {}
			§ () => {return val;}
(a,b) => {return val;}