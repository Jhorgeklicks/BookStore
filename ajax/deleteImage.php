<?php
include '../init.php';
$form = new form;
$queries = new queries;


if(isset($_POST['imageId'])  && isset($_POST['imageName'])){
	$imageId    = $_POST['imageId'];
	$imageName  = $_POST['imageName'];
	$user_Id = $_SESSION["Id"];


	// delete imahe from the image folder
	unlink("../assets/img/". $imageName);

	if ($queries->crud("DELETE FROM Gallery WHERE img_Id = ? AND User_ID = ? LIMIT 1;",[$imageId,$user_Id])) {

		echo json_encode(["status" => "success","msg"=>"$imageName deleted successfully"]);
	}else {
		echo json_encode(["status" => "failed","msg"=>"$imageName cannot be deleted, Please try Again later"]);
	}


}
// deleteImage.php
 ?>