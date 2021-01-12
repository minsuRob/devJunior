<?php
    $db_link = mysqli_connect(
        'localhost:3307',
        'root',
        'root123',
        'sys');

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
    <div style="width:80%; margin:0px auto; margin-top:50px; text-align:right;">
        <button id="tableButton1" v-bind:style="{'background-color':bgcolor, 'border':'0px', 'color':fontColor}" v-on:click="checkActivate">자유게시판</button>
        <button id="tableButton2" v-bind:style="{'background-color':bgcolor, 'border':'0px', 'color':fontColor}" v-on:click="checkActivate">공지사항</button>
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
    var actvieBgColor = '#666666';
    var deactiveBgColor = '#dddddd';
    var btn1 = new Vue({
        el: '#tableButton1',
        data: {bgcolor:actvieBgColor, fontColor: 'white', isActive: true},
        methods: {
            checkActivate: function() {
                if(this.isActive === false) {
                    this.bgcolor = actvieBgColor;
                    this.isActive = true;
                    btn2.bgcolor = deactiveBgColor;
                    btn2.isActive = false;
                }
            }
        }
    });
    var btn2 = new Vue({
        el: '#tableButton2',
        data: {bgcolor:deactiveBgColor, fontColor: 'white', isActive: false},
        methods: {
            checkActivate: function() {
                if(this.isActive === false) {
                    this.bgcolor = actvieBgColor;
                    this.isActive = true;
                    btn1.bgcolor = deactiveBgColor;
                    btn1.isActive = false;
                }
            }
        }
    });
    var app = new Vue({
        el: '#tableBoard',
        data: {
            boardData: <?=$boardResult?>
        }
    });
});
</script>

</html>