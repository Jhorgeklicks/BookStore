<?php

include '../init.php';
$queries = new queries;

if(isset($_FILES['image'])){

	$imagename = $_FILES['image']['name'];
	$imageSize = $_FILES['image']['size'];
	$imageTempName = $_FILES['image']['tmp_name'];

	$allowedExt = ["jpeg","jpg","gif","png"];

	$filePath = "../assets/img/";

	// this grabs the extension of the file
	$fileExtension = pathinfo($imagename, PATHINFO_EXTENSION);

	// this grabs the file name of the selected image
	$fileExtension1 = pathinfo($imagename, PATHINFO_FILENAME);

	if (!in_array($fileExtension , $allowedExt)) {

		echo json_encode(["status" => "failed", "msg" => "$imagename is not accepted, invalid file extension type"]);

	}else{

		$imgUniqueName = rand().$imagename;
		move_uploaded_file($imageTempName, $filePath.$imgUniqueName);

		$user_Id = $_SESSION['Id'];

		if($queries->crud("INSERT INTO Gallery(Image_name,user_Id) VALUES(?,?)",[$imgUniqueName,$user_Id])) {

			echo json_encode(["status" => "success", "msg" => "$imagename has been Uploaded Successfully..."]);

		}


	}
}


 ?>