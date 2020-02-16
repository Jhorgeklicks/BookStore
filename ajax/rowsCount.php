<?php

	include '../init.php';
	$queries = new queries;
	$form = new form;

	$user_id = $_SESSION['Id'];

	if($queries->crud("SELECT * FROM Books WHERE User_ID=? ", [$user_id])){
		$rows = $queries->Count();

		echo json_encode(["status" => "success", "row" => "$rows"]);
	}else{
		echo json_encode(["status" => "failed", "row" => "Empty Row"]);
	}
 ?>