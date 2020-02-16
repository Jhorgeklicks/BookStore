<?php

	include '../init.php';

	$queries = new queries;
	$form = new form;
	// SELECT * FROM Books WHERE User_ID = "5"
	$user_id = $_SESSION['Id'];

	if(isset($_POST['offset']) && isset($_POST['recordsPerPage'])){

		$offset = $form->input('offset');
		$recordsPerPage = $form->input('recordsPerPage');

		if($queries->crud("SELECT * FROM Books WHERE User_ID =? ORDER BY Book_Id DESC LIMIT ? , ? ", [$user_id , $offset , $recordsPerPage])){

		if($queries->Count() > 0){

			$row = $queries->getAllRow();
			echo json_encode(["status" => "success", "data"=> $row]);

		}else{
			echo json_encode(["status" => "empty", "msg"=>"there are no records in this table"]);
		}
	}

	}

 ?>