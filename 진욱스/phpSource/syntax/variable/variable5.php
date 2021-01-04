<html>
	<body>
		<?php
			$a = 100;
			echo gettype($a);
			echo "<br />";
			settype($a, 'double');
			echo gettype($a);
		?>
	</body>							
</html>