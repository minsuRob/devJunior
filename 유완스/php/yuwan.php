<?php
        $db_link = mysqli_connect(
            'localhost',
            'root',
            '111111',
            'sys');
        // mysqli_select_db($db_link,$DB_SNAME); //내부 database 선택

        $SQL = " select code, title, contents, name, adddate from board order by adddate desc ";
        $result = mysqli_query($db_link, $SQL);
        $boardResult = dbresultTojson($result);

        function dbresultTojson($res)
        {
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
</style>

<body>

<div style="width:80%; margin:0px auto; margin-top:50px; text-align:right">
    <button id="tablebutton1" v-bind:style="{'background-color':bgcolor, 'border':'0px' ,'color':fontcolor}"
    v-on:click="checkActivate">자유게시판 보기</button>
    <button id="tablebutton2" v-bind:style="{'background-color':bgcolor, 'border':'0px' ,'color':fontcolor}"
    v-on:click="checkActivate">공지사항 보기</button>
    </div>

    <table style="width: 80%;margin-top: 50px" align="center" id="tableBoard">
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
                <td align="center">{{index+1}}</td>
                <td align="center">{{eachData.name}}</td>
                <td>{{eachData.title}}</td>
                <td align="center">{{eachData.adddate}}</td>
            </tr>
        </tbody>
    </table>
</body>
<script>
$(document).ready(function() {
    var app4 = new Vue({
        el: '#tableBoard',
        data: {
            boardData: <?=$boardResult?>
        }
    });
});

var activeBgColor = '#666666';
var deactiveBgColor = '#dddddd';

var board1button = new Vue({
    el: '#tableButton1',
    data: {bgcolor:activeBgColor, fontcolor: 'white', isActive: true},
    methods: {
        checkActivate: function() {
            if(this.isActive === false)
            {
                this.bgcolor = activeBgColor;
                this.isActive = true;
                board2button.bgcolor = deactiveBgColor;
                board2button.isActive = false;
            }
        }
    }
});


var board2button = new Vue({
    el: '#tableButton2',
    data: {bgcolor:deactiveBgColor, fontcolor: 'white', isActive: false},
    methods: {
        checkActivate: function() {
            if(this.isActive === false)
            {
                this.bgcolor = activeBgColor;
                this.isActive = true;
                board1button.bgcolor = deactiveBgColor;
                board1button.isActive = false;
            }
        }
    }
});
</script>
</html>
