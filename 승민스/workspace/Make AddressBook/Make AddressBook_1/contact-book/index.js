//index.js
var express = require('express');//설치한 express 모듈 넣기
var mongoose = require('mongoose');//설치한 mongoose 모듈 넣기
var app = express();

// DB setting
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
/*mongoose 글로벌 설정 하는 부분*/

mongoose.connect(process.env.MONGO_DB);
/*process.env: 환경변수들을 가지고 있는 객체
DB connection String:mongodb://localhost:27017/testdb -> MONGO_DB라는 환경변수에 저장
mongoose.connect('connection String') 함수 이용하여 DB 연결*/

var db = mongoose.connection; 
/*mongoose의 db objct를 가져와 db 변수에 넣음
해당 db 변수에는 DB와 관련된 이벤트 리스너 함수들 들어있음
*/

db.once('open', function(){ 
  /*DB 연결은 앱이 실행되면 단 한번 발생되므로 db.once('이벤트 이름', 콜백함수) 사용*/
  console.log('DB connected');
}); //DB 연결성공


db.on('error', function(err){
  /*error은 DB 접속 뿐만 아니라 여러 경우에 발생할 수 있으므로 db.one('이벤트 이름', 콜백함수) 사용 */
  console.log('DB ERROR : ', err);
}); //DB 연결 중 에러 발생

// Other settings
app.set('view engine', 'ejs');
app.use(express.static(__dirname+'/public'));

// Port setting
var port = 3000;
app.listen(port, function(){
  console.log('server on! http://localhost:'+port);
});
