<?php
    $db_link = mysqli_connect(
        'localhost:3307',
        'root',
        'root123',
        'sys');

    $SQL = " select code, title, contents, name, adddate, 'N' as changed from board order by adddate desc ";
    $result = mysqli_query($db_link, $SQL);
    $boardResult = dbresultTojson($result);

    $SQL = " select code, title, contents, name, adddate, 'N' as changed from notice order by adddate desc ";
    $result = mysqli_query($db_link, $SQL);
    $noticeResult = dbresultTojson($result);

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

    if( $_POST["mode"] == "allSave" ) {
        $boardData = json_decode($_POST["boardData"]);
        $tableName = "";
        
        if($_POST["boardName"] == "free") {
            $tableName = "board";
        } else if($_POST["boardName"] == "notice") {
            $tableName = "notice"; 
        }

        for($i=0; $i < count($boardData); $i++) {
            $code = $boardData[$i] -> code;
            $title = $boardData[$i] -> title;
            $contents = $boardData[$i] -> contents;
            $name = $boardData[$i] -> name;
            $changed = $boardData[$i] -> changed;

            if(!$code) {
                $SQL = " insert into ".addSlashes($tableName)."(title, name, adddate) values('".addSlashes($title)."', '".addSlashes($name)."', now()) ";
                mysqli_query($db_link, $SQL);
            }

            if($changed == "Y") {
                $SQL = " update ".addSlashes($tableName)." set title = '".addSlashes($title)."', name = '".addSlashes($name)."' where code = '".addSlashes($code)."'";
                mysqli_query($db_link, $SQL);
            }
        }

        echo "OK";
        exit;
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
.clViewHeader {
    width: 10%;
    float: left;
    padding-left: 12px;
    margin-top: 5px;
}
.clViewContent {
    width: 80%;
    float: left;
    padding-left: 7px;
    margin-top: 5px;
}
</style>

<body>

    <div style="width:80%; margin:0px auto; margin-top:50px; text-align:right">
        <button id="tableButton1" v-bind:style="{'background-color':bgcolor, 'border':'0px', 'color':fontColor}" v-on:click="checkActivate">자유게시판</button>
        <button id="tableButton2" v-bind:style="{'background-color':bgcolor, 'border':'0px', 'color':fontColor}" v-on:click="checkActivate">공지사항</button>
    </div>
    <div id="tableBoard" style="width: 80%; margin:0px auto; padding:20px">
        <div style="margin-bottom: 5px">
            <input type="text" v-model="searchName" style="width: 90%; height: 25px">
            <button v-on:click="insertNewPosting()">새글추가</button>
        </div>

        <table style="width: 100%" align="center">
            <thead>
                <tr class="clBoardHeader">
                    <th style="width: 70px;">No.</th>
                    <th style="width: 120px;">이름</th>
                    <th>제목</th>
                    <th style="width: 170px;">날짜</th>
                    <th style="width: 80px;">액션</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(eachData, index) in boardData" class="clBoardBody" v-if="eachData.title.includes(searchName)">
                    <td style="width: 70px;" align="center">{{index+1}}</td>
                    <td style="width: 120px;" align="center"><input type="text" v-model="eachData.name" v-on:change="changedData(eachData)" style="width:90%"></td>
                    <td><input type="text" v-model="eachData.title" v-on:change="changedData(eachData)" style="width:90%"></td>
                    <td style="width: 170px;" align="center">{{eachData.adddate}}</td>
                    <td style="width: 80px;" align="center"><button v-on:click="clickTitle(eachData)">내용보기</button></td>
                </tr>
            </tbody>
        </table>
    </div>

    <div style="width:80%; padding-top:24px; margin:0px auto; text-align:right">
        <button onclick="javascript:allSave();">일괄 저장하기</button>
    </div>

    <div id="boardView" style="display:none; width:900px; background-color:white; padding-top:10px; padding-bottom:30px">
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

var btnBoard = null;
var btnNotice = null;
var boardView = null;
var app = null;

$(document).ready(function() {
    var dbDataBoard = <?php echo $boardResult; ?>;
    var dbDataNotice = <?php echo $noticeResult; ?>;

    app = new Vue({
        el: '#tableBoard',
        data: {
            boardData: dbDataBoard,
            searchName: ''
        },
        methods: {
            clickTitle: function(boardViewData) {
                boardView.boardViewName = boardViewData.name;
                boardView.boardViewTitle = boardViewData.title;
                boardView.boardViewContents = boardViewData.contents;
                boardView.boardViewDate = boardViewData.adddate;
                $("#boardView").bPopup();
            },
            changedData: function(boardViewData) {
                boardViewData.changed = "Y";
            },
            insertNewPosting: function() {
                this.boardData.push({"code":"", "title":"", "contents":"", "name":"", "adddate":"", "changed":"N"});
            }
        }
    });

    var actvieBgColor = '#666666';
    var deactiveBgColor = '#dddddd';
    btnBoard = new Vue({
        el: '#tableButton1',
        data: {
            bgcolor:actvieBgColor,
            fontColor: 'white',
            isActive: true
        },
        methods: {
            checkActivate: function() {
                if(this.isActive === false) {
                    this.bgcolor = actvieBgColor;
                    this.isActive = true;
                    btnNotice.bgcolor = deactiveBgColor;
                    btnNotice.isActive = false;
                    app.boardData = dbDataBoard;
                }
            }
        }
    });
    btnNotice = new Vue({
        el: '#tableButton2',
        data: {
            bgcolor:deactiveBgColor,
            fontColor: 'white',
            isActive: false
        },
        methods: {
            checkActivate: function() {
                if(this.isActive === false) {
                    this.bgcolor = actvieBgColor;
                    this.isActive = true;
                    btnBoard.bgcolor = deactiveBgColor;
                    btnBoard.isActive = false;
                    app.boardData = dbDataNotice;
                }
            }
        }
    });

    boardView = new Vue({
        el: '#boardView',
        data: {
            boardViewName: '',
            boardViewTitle: '',
            boardViewContents: '',
            boardViewDate: ''
        }
    });
});

function allSave() {
    var sendingData = app.boardData;
    var boardName = "";

    if(btnBoard.isActive) {
        boardName = "free";
    } else {
        boardName = "notice";
    }

    $.ajax({
        type: 'POST',
        url: "lect.php",
        data: {
            'mode': 'allSave',
            'boardName': boardName,
            'boardData': JSON.stringify(sendingData)
        },
        dataType: 'text',
        cache: false,
        async: false
    })
    .done(function(result) {
        if( result == "OK" ) {
            alert("정상 저장되었습니다.");
            location.href = "lect.php";
        }

        alert("성공: " + result);
    })
    .fail(function(request, status, error) {
        alert("에러 발생: " + error);
    });
}
</script>

</html>