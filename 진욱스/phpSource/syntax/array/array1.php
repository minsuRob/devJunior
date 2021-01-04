<?php
	function getMembers() {
		return array('m1', 'm2', 'm3');
	}

	function DoPrintMembers($members) {
		for($i = 0; $i < count($members); $i++) {
			echo "[".$i."] : ".ucfirst($members[$i])."<br />";
		}
	}

	echo "[Step 1]. Array <br />";
	$members = getMembers();
	DoPrintMembers($members);
	echo "<br />";

	echo "[Step 2]. Array Push <br />";
	array_push($members, 'm4');
	DoPrintMembers($members);
	echo "<br />";

	echo "[Step 3]. Array Merge <br />";
	$members = array_merge($members, array('m5', 'm6'));
	DoPrintMembers($members);
	echo "<br />";

	echo "[Step 4]. Array Unshift <br />";
	array_unshift($members, 'm0');
	DoPrintMembers($members);
	echo "<br />";

	echo "[Step 5]. Array Splice <br />";
	array_splice($members, 2, 0, 'm1-1');
	DoPrintMembers($members);
	echo "<br />";

	echo "[Step 6]. Array Shift <br />";
	array_shift($members);
	DoPrintMembers($members);
	echo "<br />";

	echo "[Step 7]. Array Pop <br />";
	array_pop($members);
	DoPrintMembers($members);
	echo "<br />";

	echo "[Step 8]. Array Sort <br />";
	sort($members);
	DoPrintMembers($members);
	echo "<br />";

	echo "[Step 9]. Array RSort <br />";
	rsort($members);
	DoPrintMembers($members);
	echo "<br />";

?>