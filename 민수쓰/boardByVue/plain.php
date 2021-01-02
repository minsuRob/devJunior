<?php
        $db_link = mysqli_connect(
            'localhost',
            'robert',
            '123456',
            'vuedb');
        // mysqli_select_db($db_link,$DB_SNAME); //내부 database 선택

        $SQL = " select code, title, contents, name, adddate from board order by adddate desc ";
        $result = mysqli_query($db_link, $SQL);
        $boardResult = dbresultTojson($result);

        $SQL = " select code, title, contents, name, adddate from notice order by adddate desc ";
        $result = mysqli_query($db_link, $SQL);
        $noticeResult = dbresultTojson($result);

        function dbresultTojson($res) {
            $ret_arr = array();
    
            while($row = mysqli_fetch_array($res))
            {
                foreach($row as $key => $value){
                    $row_array[$key] = urlencode($value);
                }
                array_push($ret_arr, $row_array);
            }
    
            return urldecode(json_encode($ret_arr));
        }
?>
<!DOCTYPE html>
<html>
<meta charset="utf-8">
<title>VueJs Board</title>
<!-- Load vue engine  -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/bPopup/0.11.0/jquery.bpopup.min.js"
    integrity="sha512-kmrY+BFhi6ywgfK8hW1ySM/KYU3xPd4elbMhORq3DhacwqmitFrf3GB2HpLj3srV1zFsqxvAcZ4qU+y+ym1Eeg=="
    crossorigin="anonymous"></script>
<style>
.clBoardHeader {
    background-color: cadetblue;
    color: darkblue;
}

.clBoardHeader th {
    padding-top: 7px;
    padding-bottom: 7px;
}

.clViewHeader th {
    width: 10%;
    float: left;
    padding-left: 12px;
    margin-top: 5px;
}

.clViewContent th {
    width: 80%;
    float: left;
    padding-left: 7px;
    margin-top: 5px;
}
</style>

<body>
    <div style="width:80%; margin:0px auto; margin-top:50px; text-align:right">
        <button id="tableButton1" v-bind:style="{'background-color':bgcolor, 'border':'0px' ,'color':fontcolor}"
            v-on:click="checkActivate">자유 게시판 보기</button>
        <button id="tableButton2" v-bind:style="{'background-color':bgcolor, 'border':'0px' ,'color':fontcolor}"
            v-on:click="checkActivate">공지사항 보기</button>
    </div>

    <div id="tableBoard" style="width: 80%;margin: 0px auto">
        <div style="margin-bottom: 5px;">
            <input type=text v-model="searchName" style="width: 90%; height: 25px;">
        </div>
        <table style="width: 100%;" align="center">
            <thead>
                <tr class="clBoardHeader">
                    <th style="width: 70px;">No.</th>
                    <th style="width: 120px;">이름</th>
                    <th>제목</th>
                    <th style="width: 170px;">날짜</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(eachData, index) in boardData" class="clBoardBody"
                    v-if="eachData.title.includes(searchName)">
                    <td align="center">{{index+1}}</td>
                    <td align="center">{{eachData.name}}</td>
                    <td v-on:click="clickTitle(eachData)"> {{eachData.title}}</td>
                    <td align="center">{{eachData.adddate}}</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div id="boardView"
        style="display:none; width:900px; background-color:white; padding-top:10px; padding-bottom:30px">
        <div style="font-size:20px; font-weight:bold; padding-left:10px; margin-bottom:10px">
            글보기
        </div>
        <div style="clear:both">
            <div class="clViewHeader">이름</div>
            <div class="clViewContent">{{boardViewName}}</div>
        </div>
        <div style="clear:both">
            <div class="clViewHeader">제목</div>
            <div class="clViewContent">{{boardViewTitle}}</div>
        </div>
        <div style="clear:both">
            <div class="clViewHeader">내용</div>
            <div class="clViewContent">{{boardViewContents}}</div>
        </div>
        <div style="clear:both">
            <div class="clViewHeader">날짜</div>
            <div class="clViewContent">{{boardViewDate}}</div>
        </div>
    </div>

</body>
<script>
$(document).ready(function() {

    var dbdataBoard = <?=$boardResult?>;
    var dbdataNotice = <?=$noticeResult?>;

    var app4 = new Vue({
        el: '#tableBoard',
        data: {
            boardData: dbdataBoard,
            searchName: ''
        },
        methods: {
            clickTitle: function(boardViewData) {
                // alert(boardViewData.name);
                boardView.boardViewName = boardViewData.name;
                boardView.boardViewTitle = boardViewData.title;
                boardView.boardViewContents = boardViewData.contents;
                boardView.boardViewDate = boardViewData.adddate;
                $("#boardView").bPopup(); 


            },
        }
    });

    var activeBgColor = '#666666';
    var deactiveBgColor = '#dddddd';
    var grayColor = '#ddddd1';

    var tblBtn1 = new Vue({
        el: '#tableButton1',
        data: {
            bgcolor: activeBgColor,
            fontcolor: 'white',
            isActive: true
        },
        methods: {
            checkActivate: function() {
                if (this.isActive === false) {
                    this.bgcolor = activeBgColor;
                    this.isActive = true;
                    tblBtn2.bgcolor = grayColor;
                    tblBtn2.isActive = false;
                    app4.boardData = dbdataBoard;
                }
            }
        }
    });

    var tblBtn2 = new Vue({
        el: '#tableButton2',
        data: {
            bgcolor: deactiveBgColor,
            fontcolor: 'blue',
            isActive: false
        },
        methods: {
            checkActivate: function() {
                if (this.isActive === false) {
                    this.bgcolor = activeBgColor;
                    this.isActive = true;
                    tblBtn1.bgcolor = grayColor;
                    tblBtn1.isActive = false;
                    app4.boardData = dbdataNotice;
                }
            }
        }
    });

    var boardView = new Vue({
        el: '#boardView',
        data: {
            boardViewName: '',
            boardViewTitle: '',
            boardViewContents: '',
            boardViewDate: '',
        },
        methods: {
            checkActivate: function() {
                if (this.isActive === false) {
                    this.bgcolor = activeBgColor;
                    this.isActive = true;
                    tblBtn1.bgcolor = grayColor;
                    tblBtn1.isActive = false;
                    app4.boardData = dbdataNotice;
                }
            }
        }
    });


});
 </script>

</html>