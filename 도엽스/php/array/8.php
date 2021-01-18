<?php
function get_members(){
    return ['hi', 'hello', 'nice'];
}
 
$members = get_members();
 
for($i = 0; $i < count($members); $i++){
    echo ucfirst($members[$i]).'<br />';
}
 
?>