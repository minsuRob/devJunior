<?php 
$db_link = mysqli_connect( 'localhost', 'root', '111111', 'sys'); //데이터베이스와 연결하는 사용자 정의 함수
// mysqli_select_db($db_link,$DB_SNAME); 
//내부 database 선택 
$SQL = " select code, title, contents, name, adddate from board order by adddate desc "; 
$result = mysqli_query($db_link, $SQL); //결과를 json 형태로 바꿈
$boardResult = dbresultTojson($result); //최종

function dbresultTojson($res) { 
    $ret_arr = array();
    while($row = mysqli_fetch_array($res)) 
    { 
        foreach($row as $key => $value){ 
            $row_array[$key] = urlencode($value); 
        } 
        array_push($ret_arr, $row_array); 
    } 
    return urldecode(json_encode($ret_arr)); //json 형태로 불러옴
    } 
?>

<!DOCTYPE html>
<html lang='en'>
    <head>
        <meta charset="utf-8">
        <title>Vue.js 게시판
        </title>
        <script src="jquery.min.js"></script>
        <script src="jquery-ui.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
        <!--vue.js엔진에 해당-->

        <style>
            .clBoardHeader {
                background-color: #aeaeae;
                color: white;
            }
            .clBoardHeader th {
                padding-top: 7px;
                padding-bottom: 7px;
            }
        </style>
    </head>

    <body>
    <div style="width:80%; margin:0px auto; margin-top:50px; text-align:right">
        <button
            id="tableButton1"
            v-bind:style="{'background-color':bgcolor, 'border':'0px', 'color':'fontcolor}"
            v-on:click="checkActivate">자유게시판 보기</button>
        <!-- v-bing:style로 할 경우 vuejs로 컨트롤됨-->
        <!-- v-on:click = onclick-->
        <button
            id="tableButton2"
            v-bind:style="{'background-color':bgcolor, 'border':'0px', 'color':'fontcolor}"
            v-on:click="checkActivate">공지사항 보기</button>
    </div>

    <table style="width:80%;margin-top: 50px" align="center" id="tableBoard">
        <thead>
            <tr class="clBoardHeader">
                <th style="width: 70px;">No.</th>
                <th style="width: 120px;">이름</th>
                <th>제목</th>
                <th style="width: 170px;">날짜</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(eachData, index) in boardData" class="clBoardBody">
                <td style="width: 70px;">{{index+1}}</th>
                <td style="width: 120px;">{{eachData.name}}</th>
                <td>{{eachData.title}}</td>
                <td style="width:170px">{{eachData.adddate}}</td>
            </tr>

        </table>
    </body>

        <script>
            $(document).ready(function () {
                var app = new Vue({ //vue.js 생성
                    el: '#tableBoard', //지금 정의하고 있는 vue.js가 tableBoard에 적용한다는 뜻
                    data: {boardData: <?=$boardResult;?>} 
                 }); 
                var activeBgColor = '#666666'; //활성화
                var deactiveBgColor = '#dddddd'; //비활성화

                var board1Button = new Vue({ //vue.js 생성
                    el: '#tableButton1', //지금 정의하고 있는 vue.js가 tableBoard에 적용한다는 뜻
                    data: {
                        bgcolor: activeBgColor,
                        fontcolor: 'white',
                        isActive: true
                    },
                    /*methods:{
                        checkActivate: function(){
                            if(this.isActive===false){
                                this.bgcolor = activeBgColor;
                                this.isActive = true;
                                board2Button.bgcolor=deactiveBgColor;
                                board2Button.isActive=false;
                            }
                        }
                    }*/
             });
             var board2Button = new Vue({ //vue.js 생성
                    el: '#tableButton2', //지금 정의하고 있는 vue.js가 tableBoard에 적용한다는 뜻
                    data: {
                        bgcolor: deactiveBgColor,
                        fontcolor: 'white',
                        isActive: false
                    },
                  methods:{
                        checkActivate: function(){
                            if(this.isActive===false){
                                this.bgcolor = activeBgColor;
                                this.isActive = true;

                                board1Button.bgcolor=deactiveBgColor;
                                board1Button.isActive=false;
                            }
                        }
                    }
             });
    });

        </script>

    </html>