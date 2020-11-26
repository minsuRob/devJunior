var Links = {
    setColor : function(color) {
    // $ = jQuery
    // 이 웹페이지에 있는 a태그를 jQuery가 관리한다.
    $('a').css('color', color);
}
}

var Body = {
    setColor:function(color) {
        $('body').css('color', color);
    },  
    setBackGroundColor:function(color) {
        $('body').css('backgroundColor', color);
    }
}

function nightDayHandler(self){
var target = document.querySelector('body');
if(self.value === 'night') { 
    Body.setBackGroundColor ('black');
    Body.setColor('white');
    self.value = 'day';
    
    Links.setColor('powderblue');

} else {
    Body.setBackGroundColor ('white');
    Body.setColor('black');
    self.value = 'night';

    Links.setColor('blue');

    }
}