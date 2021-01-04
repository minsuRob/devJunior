<?php
	# Association Array Init 1
	// $grades = array('egoing'=>10, 'k8805'=>6, 'sorialgi'=>80);

	# Association Array Init 2
	$grades = [];
	$grades['egoing'] = 10;
	$grades['k8805'] = 6;
	$grades['sorialgi'] = 80;
	
	foreach($grades as $key => $value) {
		echo "key: {$key} value:{$value} <br />";
	}
?>