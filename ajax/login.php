<?php

	include '../init.php';

	$queries = new queries;
	$form = new form;

	if(isset($_POST['email']) && isset($_POST['password'])){
		$email = $form->input('email');
		$password = $form->input('password');
// SELECT * from users where Email = 'klicks@gmail.com' && Password = 'klicksGH'
		if($queries->crud("SELECT * FROM Users WHERE Email = ? ;",[$email])){

			if($queries->Count() === 1){


					$row = $queries->getSingleRow();

					$dbpassword = $row->Password;
					$Id = $row->Id;

					if($password === $dbpassword ){
						echo json_encode(["status" => "success", "msg" => "Login Completed with success"]);
						$_SESSION['Id'] = $Id;
						$_SESSION['loader'] = true;
			}else{
				echo json_encode(["status" => "passwordError", "msg" => "password does not match Email"]);
			}

			}else{
				echo json_encode(["status" => "emailError", "msg" => "Email does not exist"]);
			}
		}
	}

 ?>