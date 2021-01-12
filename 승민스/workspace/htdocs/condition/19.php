<?php
if($_POST['id'] === 'egoing' or $_POST['id'] === 'k8805' or $_POST['id'] === 'sorialgi'){
    echo 'right';
} else {
    echo 'wrong';
}
//id가 세 개의 값 중 하나면 right
?>