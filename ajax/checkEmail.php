<?php

include '../init.php';

$form = new form;
$queries = new queries;

if (isset($_POST['email']) && isset($_POST['tableName']) && isset($_POST['columnName'])) {

	$email = $form->input('email');
	$tableName = $form->input('tableName');
	$columnName = $form->input('columnName');
// SELECT Email FROM users WHERE Email = 'klicks@gmail.com'
	if($queries->crud("SELECT ". $columnName . " FROM " .$tableName . " WHERE " . $columnName ." = ?", [$email]) ){

		if($queries->Count() >0){
			echo json_encode(
					["status" => "error", "msg" =>" Sorry $email already Exist" ]
			);
		}else{
			echo json_encode(["status" => "okay" ]);
		}

	}else{
		echo json_encode(["status" => "$email query null" ]);
	}

}
else{
	echo json_encode(["status" => "nothin ah get" ]);
 }

 ?>
