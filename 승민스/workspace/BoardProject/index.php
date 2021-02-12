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
                    <td style="width: 70px;">{{index+1}}</th>
                    <td style="width: 120px;">{{eachData.name}}</th>
                    <td>{{eachData.title}}</td>
                    <td style="width:170px">{{eachData.adddate}}</td>
                </tr>

            </table>
        </body>

<script>
    $(document).ready(function () {
        var app = new Vue({
            el: '#tableBoard',
            data: {boardData:<?= $boardResult;?>} 
            }); });
</script>

</html>