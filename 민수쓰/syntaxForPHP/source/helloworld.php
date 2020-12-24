<html>
<body>

<?php
    $a = 100;
    echo gettype($a);
    settype($a, 'double');
    echo '<br />';
    echo gettype($a);
    ?>

<?php
$title = 'subject';
$$title = 'PHP tutorial';
echo '<br />';
echo $subject;
?>

<?php
echo $_GET['id'];
?>
<?php
echo '<br />';
echo $_GET['id'].','.$_GET['password'];
?>

</body>
</html>