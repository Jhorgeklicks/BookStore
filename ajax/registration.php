<?php

	include '../init.php';
	$form = new form;
	$queries = new queries;

	if(isset($_POST['username']) && isset($_POST['email']) && isset($_POST['password'])){

		$username = $form->input('username');
		$email = $form->input('email');
		$password = $form->input('password');


		if($queries->crud("INSERT INTO Users(Fullname, Email , Password) VALUES(?,?,?)",[$username, $email, $password])){

			echo json_encode(["status" => "Success", "msg"=>" welcome $username, you have been registered"]);
			$_SESSION['accountCreated'] = " Hello $username, Your acount has been created Successfully";

		}else{
			echo json_encode(["status" => "failed", "msg"=>" Mr $username, Registration Failed"]);

		}

	}


 ?>