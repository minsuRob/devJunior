var express = require('express');
var app = express();

app.set('view engine','ejs'); //express의 view engine에 ejs를 set
app.use(express.static(__dirname + '/public'));//현재 경로/public 경로 static 폴더로 지정 (/public/index.html)

app.get('/hello', function(req,res){ // '/hello 위치에 get 요청을 받는 경우 -> hello.ejs
  res.render('hello', {name:req.query.nameQuery});
}); //query를 통해 이름을 받음 req.query -> query 저장 

app.get('/hello/:nameParam', function(req,res){ // :(콜론)으로 시작되는 route은 해당 부분에 입력되는 route의 텍스트가 req.params에 저장
  res.render('hello', {name:req.params.nameParam});
});
//if) /hello/seungmin 일 경우 /hello/:nameParam -> seungmin이 req.params.nameParam

/*ejs 파일을 사용하기 위해서는 res.render 함수 사용해야함
name:req.query.nameQuery : ejs의 이름
name.req.params.nameParam: ejs에서 사용될 object 전달
res.render 함수는 ejs를 /views 폴더에서 찾으므로 views 폴더의 이름은 변경하면 안됨
*/

var port = 3000;
app.listen(port, function(){
  console.log('server on! http://localhost:'+port);
});
