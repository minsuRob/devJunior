<html>
<body>
<?php
$a=100;
echo gettype($a); #a 변수값의 데이터형이 어떤 건지 노출
settype($a, 'double'); #a 변수값의 데이터형을 double로 변경
echo '<br/>';
echo gettype($a);
?>
</body>
</html>