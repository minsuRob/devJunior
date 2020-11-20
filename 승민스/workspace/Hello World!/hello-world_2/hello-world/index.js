var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
//기존 app.get 함수 삭제 -> app.use(콜백함수)사용됨
//app.get('/', function(req, res) { res.send('Hello World!');});

/*app.get과 마찬가지로 req, res, next의 parameter가 콜백함수로 자동 전달
app.get과 상이하게 http method/route에 상관없이 서버에 요청이 올 때마다 무조건 콜백함수가 실행
*/

//express.static(__dirname + '/public') 실제 사용될 콜백함수가 return 
//_dirname은 node.js에서 프로그램이 실행 중인 파일의 위치를 나타내는 global variable(전역변수)

//※app.use(express.static(__dirname + '/public')) 현재 위치/public 경로를 static 폴더로 지정하라는 명령어

var port = 3000;
app.listen(port, function(){
  console.log('server on! http://localhost:'+port);
});
