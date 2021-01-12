<?php
function get_members(){
    return ['egoing', 'k8805', 'sorialgi'];
}
 
$members = get_members();
 
for($i = 0; $i < count($members); $i++){
    echo ucfirst($members[$i]).'<br />';
    //ucfirst() 첫글자를 대문자로 만듦
}
 
?>