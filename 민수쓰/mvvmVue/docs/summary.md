# [Vanilla(Pure) Js와 VueJs로 배우는 Sample](https://www.inflearn.com/course/%EC%88%9C%EC%88%98js-vuejs-%EA%B0%9C%EB%B0%9C-%EA%B0%95%EC%A2%8C/dashboard)
 
 ***
 ## MVC
 ***
- Model의 역할
  - **Data를 관리하는 역할**
  - DB에 있는 Values를 가져와 다른 객체에게 전달하는 역할 
  - 외부 객체로부터 입력 데이터를 받아서, 그 값을 DB에 넣어주는 역할
- Front에서 Model의 역할
  - DB에 직접 접근하지 않고 API 형태로 접근
  - 그 이후 다른 객체의 전달
  - 외부 객체로부터 데이터를 입력 받으면, 그 데이털르 BackEnd Data로 호출

- View의 역할
  - Model의 Data를 화면의 표출하는 역할
  - 대게 html,css,js로 구성
  - 사용자가 입력한 값을 처리하는 역할도 함, (입력값 다른객체에게 전달)
- Controller
  - M과 V는 직접적인 연결이 되있지않아, 그것을 중간에서 연결해주는 역할
  - Model로부터 데이터를 가져오고, View에게 전달
  - View로 부터 User 입력 데이터를 가져오고 Model에게 전달
```
MVC 정리
```


<!--
 - [ ] todo1
 - [ ] todo2
-->