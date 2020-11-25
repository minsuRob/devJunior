var express = require('express'); //설치한 express 모듈 넣기
var mongoose = require('mongoose');// 설치한 mongoose 모듈 넣기
var bodyParser = require('body-parser'); //설치한 body-parser 모듈 넣기
var app = express();

// DB setting
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
/*mongoose 글로벌 설정 하는 부분*/

mongoose.connect(process.env.MONGO_DB);
var db = mongoose.connection;
db.once('open', function(){
  console.log('DB connected');
}); //DB 정상 연결
db.on('error', function(err){
  console.log('DB ERROR : ', err);
}); //DB 연결 에러

// Other settings
app.set('view engine', 'ejs');
app.use(express.static(__dirname+'/public'));

app.use(bodyParser.json()); //json 형식의 데이터를 받음
//해당 설정 시 route의 callback 함수(function(req,res,next)..)의 req.body에서 form으로 입력받은 데이터 사용 가능
//-> 웹 브라우저의 form에 입력한 데이터가 bodyParser를 통해 req.body으로 생성이 됨
app.use(bodyParser.urlencoded({extended:true})); //urlencoded date를 extended 알고리즘을 사용해서 분석
/*bodyParser 사용하기 위해 필요한 코드*/


// DB schema
var contactSchema = mongoose.Schema({
  name:{type:String, required:true, unique:true}, //required: 반드시 입력되어야 함, unique: 값이 중복되면 안됨
  email:{type:String},
  phone:{type:String}
});
/*mongoose.Schema DB에서 사용할 Schema 설정 */

var Contact = mongoose.model('contact', contactSchema);
/*mongoose.model 함수 사용하여 contactSchema의 model 생성
mongoose.model(1,2) -> 1) mongoDB에서 사용되는 콜렉션 이름 / 2) mongoose.Schema로 생성된 오브젝트
=> DB에 있는 contact라는 데이터 콜렉션을 현재 코드의 Contact라는 변수에 연결해주는 역할*/


// Routes
app.get('/', function(req, res){
  res.redirect('/contacts');
}); // '/'에 Get 요청이 오는 경우 /contacts로 redirect

// Contacts - Index
app.get('/contacts', function(req, res){ // '/contacts'에 Get 요청이 오는 경우
  Contact.find({}, function(err, contacts){ 
    if(err) return res.json(err); //에러가 있다면 json 형태로 웹 브라우저에 표시
    res.render('contacts/index', {contacts:contacts}); //에러가 없다면 검색결과를 받아 /views/contacts/index.ejs를 render함
  });
});
/*Contact.find({}, function(err, contacts){})
모델. find(검색조건, callback 함수)
 - 모델.find DB에서 검색조건에 맞는 모델(Contact) data를 찾고 콜백함수르 ㄹ호출
   모델.find의 검색 조건은 Object 형태로 전달, 빈 Object({})를 전달하는 경우(=검색 조건이 X) DB에서 해당 모델의 모든 data를 return
   모델.find의 콜백함수: function(에러1, 검색결과2)-
   1) 에러 에러가 있는 경우에만 내용 전달
   2) 검색 결과는 한 개 이상일 수 있기 때문에 검색결과는 항상 Array, 검색결과가 없어도 빈 array[] 전달
*/

// Contacts - New
app.get('/contacts/new', function(req, res){ // '/contacts/new'에 Get 요청이 오는 경우
  res.render('contacts/new'); //새로운 주소록을 만드는 form이 있는  views/contacts/new.ejs render
});

// Contacts - create
app.post('/contacts', function(req, res){// '/contacts'에 Post 요청이 오는 경우("/contacts/new에서 폼을 전달받는 경우")
  Contact.create(req.body, function(err, contact){
    if(err) return res.json(err);
    res.redirect('/contacts'); //에러 없이 contact data를 생성되면 /contacts로 redirect
  });
});
/*모델(Contact).create: DB에 data를 생성하는 함수
모델.Create(1,2)-> 1) parameter로 생성할 data의 Object(req.body)를 받음 / 2) parameter로 콜백함수 받음*/


// Port setting
var port = 3000;
app.listen(port, function(){
  console.log('server on! http://localhost:'+port);
});
