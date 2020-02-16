<?php

include '../init.php';
// $form = new form;
$queries = new queries;
$user_Id = $_SESSION["Id"];
	if ($queries->crud("SELECT * FROM Gallery WHERE User_ID = ?",[$user_Id]) ){

		if($queries->Count() > 0){

			$row = $queries->getAllRow();

			echo json_encode(["status" => "success", "data" => $row]);

		}else{
			echo json_encode(["status" => "failed", "msg" => "There are no Images Yet"]);
		}
	}

 ?>