var express = require('express'); // 설치한 express module을 불러와 변수 express에 담음
var app = express(); // express를 실행하여 app object를 초기화

app.set('view engine', 'ejs'); // 1. view engine으로 ejs(Embedded JavaScript) 사용
app.use(express.static(__dirname + "/public")); // get, post 와는 달리 HTTP method나 route에 상관없이 서버에 요청이 올 때마다 무조건 콜백함수 실행. 기본적으로 /index.thml 실행

// ejs 파일을 사용하기 위해서 res.sender 함수사용
app.get('/hello', function(req, res) { // 2.query를 통해서 이름을 받는 코드이다. 모든 query는 req.query에 저장됨
  res.render('hello', {name:req.query.nameQuery});
});

app.get('/hello/:nameParam', function(req, res) { // 3. route parameter를 통해 이름을 받는 코드. 콜론으로 시작되는 route은 해당 부분에 입력되는 route의 텍스트가 req.params에 저장됨
  res.render('hello', {name:req.params.nameParam});
});

var port = 3000;
app.listen(port, function(){ // 3000번 포트에 node.js 서버를 연결한다.
  console.log('server on! http://localhost:'+port); // 서버가 실행되면 콘솔창에 표시
});
