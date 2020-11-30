var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');// 설치한 method-override module 넣기
/*설치한 모듈 넣기 */

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
});
db.on('error', function(err){
  console.log('DB ERROR : ', err);
});
/* 연결 여부 */

// Other settings
app.set('view engine', 'ejs');
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(methodOverride('_method')) 
/*_method의 쿼리로 들어오는 값으로 HTTP method 바꿈
ex.  http://example.com/category/id?_method=delete 받을 경우 _method의 값 delete를 읽어 해당 request의 HTTP method를 delete로 변경
*/

// DB schema
var contactSchema = mongoose.Schema({
  name:{type:String, required:true, unique:true},
  email:{type:String},
  phone:{type:String}
});

var Contact = mongoose.model('contact', contactSchema);

// Routes
// Home
app.get('/', function(req, res){
  res.redirect('/contacts'); // '/'에 Get 요청이 오는 경우 /contacts로 redirect
});

// Contacts - Index
app.get('/contacts', function(req, res){ // '/contacts'에 Get 요청이 오는 경우
  Contact.find({}, function(err, contacts){ 
    if(err) return res.json(err); //에러가 있다면 json 형태로 웹 브라우저에 표시
    res.render('contacts/index', {contacts:contacts}); //에러가 없다면 검색결과를 받아 /views/contacts/index.ejs를 render함
    /* 
       7abfe97 - MEAN Stack_주소록 만들기 프로젝트 커밋_2
       승민스가 ejs에서 데이터 연계에 대해 이해가 되지않는다고하여 확인해본 사항.
       DB에서 얻어온 값을 해당 Line에서 index.ejs로 넘겨주는 중.
       Author : minsu.lee
    */
  });
});

// Contacts - New
app.get('/contacts/new', function(req, res){ // '/contacts/new'에 Get 요청이 오는 경우
  res.render('contacts/new'); //새로운 주소록을 만드는 form이 있는  views/contacts/new.ejs render
});

// Contacts - create
app.post('/contacts', function(req, res){// '/contacts'에 Post 요청이 오는 경우("/contacts/new에서 폼을 전달받는 경우")
  Contact.create(req.body, function(err, contact){
    if(err) return res.json(err);
    res.redirect('/contacts');//에러 없이 contact data를 생성되면 /contacts로 redirect
  });
});
// Contacts - show
app.get('/contacts/:id', function(req, res){//'/contacts/:id'에 Get 요청이 오는 경우 
//:id 처럼 route에 콜론을 사용할 경우 해당 위치의 값을 받아 req.params에 넣음
  Contact.findOne({_id:req.params.id}, function(err, contact){
    //모델.findOne: DB에서 해당 모델의 document를 하나 찾는 함수
    // 첫번째 파라메타로 찾을 조건을 objet로 입력하고 data를 찾은 후 콜백함수 호출
    //Object로 전달 (Model.find는 Array로 전달)
    if(err) return res.json(err);
    res.render('contacts/show', {contact:contact}); //에러가 없으면 검색결과를 받아 'contacts/show.ejs'를 render
  });
});
// Contacts - edit
app.get('/contacts/:id/edit', function(req, res){ // '/contacts/:id/edit'에 Get 요청이 오는 경우 
  Contact.findOne({_id:req.params.id}, function(err, contact){
    if(err) return res.json(err);
    res.render('contacts/edit', {contact:contact}); //에러가 없으면 검색결과를 받아 'contacts/edit.ejs'를 render
  });
});
// Contacts - update
app.put('/contacts/:id', function(req, res){ // '/contacts/:id'에 Put 요청이 오는 경우 
  Contact.findOneAndUpdate({_id:req.params.id}, req.body, function(err, contact){
    //모델.findOneAndUpdage: DB에서 해당 모델의 document를 하나 찾아 그 data를 수정하는 함수
    // 첫번째 파라메터로 찾을 조건을 object로 입력하고 두번째 파라메타로 update할 정보를 object로 입력 data를 찾은 후 callback 함수 호출
    // -> 이 때 callback 함수로 넘겨지는 값은 수정되기 전의 값 (업데이트 된 후의 값을 보고 싶으면 콜백 함수 전에 parameter로 {new:true})
    if(err) return res.json(err);
    res.redirect('/contacts/'+req.params.id); //Data 수정 후 "/contacts/"+req.params.id로 redirect
  });
});
// Contacts - destroy
app.delete('/contacts/:id', function(req, res){ //'/contacts/:id'에 delete 요청이 오는 경우 
  Contact.deleteOne({_id:req.params.id}, function(err){
    //모델.deleteOne: DB에서 해당 model의 document를 하나 찾아 삭제하는 함수
    // 첫번째 파라메타로 찾을 조건을 Object로 입력하고 data를 찾은 후 callback 함수 호출
    if(err) return res.json(err);
    res.redirect('/contacts'); //Data 삭제 후 '/contacts' redirect
  });
});

// Port setting
var port = 3000;
app.listen(port, function(){
  console.log('server on! http://localhost:'+port);
});
