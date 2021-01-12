<?php
$li = ['a', 'b', 'c', 'd', 'e', 'z'];
array_splice($li, 2, 1, 'B');
//arrary_splice(변수, 인덱스 몇 번째, 해당 인덱스의 몇 번째 뒤, 넣고 싶은 값)
var_dump($li);
?>