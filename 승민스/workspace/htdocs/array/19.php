<?php

$grades = array('egoing'=>10, 'k8805'=>6, 'sorialgi'=>80);
echo $grades['sorialgi'].'<br/>';

$grades = array('egoing'=>10, 'k8805'=>6, 'sorialgi'=>80);
foreach($grades as $key => $value){
    
    echo "key: {$key} value:{$value}<br />";
}
//foreach grades 배열에 담긴 요소의 숫자만큼 반복문을 실행

?>