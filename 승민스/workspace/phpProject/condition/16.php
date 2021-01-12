<?php
if($_POST['id'] === 'egoing' && $_POST['password'] === '111111'){
    echo 'right';
} else {
    echo 'wrong';
}
//id가 egoing && password가 111111여야지 right
?>