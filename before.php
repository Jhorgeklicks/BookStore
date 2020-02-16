<?php
		include 'init.php';

		$form = new form;
		$queries = new queries;

		if(isset($_POST['submit'])){
			$username = $form->input('username');
			$email 	  = $form->input('email');
			$pass 	  = $form->input('pass');

			if($queries->crud("INSERT INTO Users(Fullname, Email , Password) VALUES(?,?,?)", [$username, $email, $pass])){

			}
	}
	// returns the number total number of enteries in the database
	if($queries->crud("SELECT * FROM Users")){
		echo $queries->Count()."<br>";
	}

	// returns a sngle row information from the database
	if($queries->crud("SELECT * FROM Users WHERE Id=?", [1])){
		$row = $queries->getSingleRow();
		// echo "<pre>";
		// print_r($row);
		// echo "</pre>";

		echo $row->Fullname ."</br></br>";

	}


 ?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>The BookStore</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
	<div id="wrapper">
		<form class="form" method="POST" action="">
			<p>
				<label for="user">Username</label>
				<input type="text" name="username" id="user" placeholder="Enter User Name">
			</p>
			<p>
				<label for="email">Email </label>
				<input type="email" name="email" id="email" placeholder="Enter Email">
			</p>
			<p>
				<label for="password">Password </label>
				<input type="password" name="pass" id="password" placeholder="Enter Password">
			</p>
			<button type="submit" name="submit">Submit</button>
		</form>
	</div>

	<?php

		if($queries->crud("SELECT * FROM Users")){
			$rows = $queries->getAllRow();

			foreach($rows as $row){
				echo "<br>";
				echo $row->Fullname ." ". $row->Email ."<br><br>";
			}
		}

	 ?>
</body>
</html>