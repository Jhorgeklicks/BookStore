<?php

include "../init.php";

$queries = new queries;
$User_Id = $_SESSION['Id'];

if($queries->crud("SELECT * FROM Books WHERE User_ID = ? ",[$User_Id ])){

	$rowCount = $queries->Count();
	if ($rowCount > 0) {

		$rows = $queries->getAllRow();
		$sum = 0;

		forEach($rows as $amount):
			$sum += $amount->Book_price;
		endforeach;

		echo json_encode(["status" => "success", "bookNumber" => "$rowCount", "bookPrice" => "$sum"]);

	}else{
		echo json_encode(["status" => "nobooks", "msg" => "No Books"]);
	}


 }

 ?>