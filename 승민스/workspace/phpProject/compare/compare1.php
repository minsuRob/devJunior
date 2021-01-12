<html>
<body>
<?php
# '==' 비교연산자 true/false
echo "1==2 : ";
var_dump(1==2); #false -> var_dump => bool(false)
echo '<br />';

echo "1==1 : ";
var_dump(1==1); #true
echo '<br />';

echo '"one"=="two" : ';
var_dump("one"=="two"); #false
echo '<br />';

echo '"one"=="one" : ';
var_dump("one"=="one"); #true
echo '<br />';
?>
</body>
</html>