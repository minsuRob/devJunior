# vue.js_example
Vue.js 책과 관련한 예제들



# Chapter 1 
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

# Chapter 2 

	• Vue Instance
		○ new Vue() 행위는 main 함수와 같은 역할.
	• 객체, 프로퍼티 설명
		○ el
			§ HTML에서 Mount될 Element를 나타내고, app ID를 가리킨다.
		○ data
			§ 일종의 데이터 모델 역할을 하며, data 객체 내의 정의되는 프로퍼티들의 값이 변하면 View의 값도 변한다. 
		○ template
			§ html el, 스타일을 설정. 
		○ methods 
			§ Mouse, Btn 클릭 이벤트  처리. 
			§ 동적인 처리
			§ 호출 ex : <btn v-on:click="sayHello">확인</btn>
		○ computed
			§ 이벤트 의존적인 methods와 달리, data 객채 내 프로퍼티에 변화가 발생할때 반응 가능.
		○ props
			§ 컴포넌트들간의 데이터를 (직접적으로) 전달하는 프로퍼티.
				□ 컴포넌트들은 html element들을 특정 formatting느낌으로 사전 가공하는 느낌이다.
		○ watch
			§ watch와 computed의 기능은 비슷해보인다.. 많이써봐야 차이를 알듯.
		○ 한 페이지 내의 뷰인스턴스
			§ 사용자제
		○ 뷰인스턴스 생명주기

# Chapter 3 

# Chapter 4 

	• 컴포넌트
		○ 결론적으로는 div나 html element들을 부분부분 짤라서 가져오는 역할로 보인다.
	• 4-3. 컴포넌트들간의 데이터 전달
		○ props - 부모 -> 자식 
		○ $emit, $on - 자식 -> 부모
		○ 관계없을 경우 event Bus
	• Prop
		○ function에 파라미터 넘기듯이 data mapping을 한다.
        ○ 부모자식 관계는 vue에서 무조건 class extends하는 느낌하고는 좀 다른거같으니 확인이 필요해보인다.
			• 이벤트 버스
		○ 발행자 구독자 서비스같은 패턴
		○ 컴포넌트가 event 발행시 다른 이벤트가 구독한다.
	• Slot
		○ slot을 이용해 컴포넌트를 재사용
		○ 복잡한 코드가 포함된 데이터를 전달은 힘들기에 slot으로 처리
		○ Vuetify는 slot이 dialog, data table, menu같은 ui에서 사용.
		
	• 종류
		○ unNamed
			§ default이며 부모에서 자녀에 inject 처리
			§ 부모의 dom을 자녀의 <slot> 태그 위치에 대체 가능.
			
		○ Named
		○ scoped
		○ (2.6ver) v-slot