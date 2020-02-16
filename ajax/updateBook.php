<?php

	include_once '../init.php';
	$queries = new queries;
	$form = new form;

	if(isset($_POST['bookname']) && isset($_POST['bookauthor']) && isset($_POST['bookprice']) && isset($_POST['hiddenId']) ){


		$bookId = $form->input("hiddenId");
		$bookname = $form->input("bookname");
		$bookauthor = $form->input("bookauthor");
		$bookprice = $form->input("bookprice");
		$User_Id = $_SESSION['Id'];

		if($queries->crud("UPDATE Books SET Book_name = ?, Book_author =?, Book_price = ? WHERE User_ID = ? AND Book_Id = ?", [$bookname , $bookauthor ,$bookprice, $User_Id , $bookId] ) ){

			echo json_encode([
				"status" => "success",
				"msg"    => "Hello $bookauthor, Your book has been Updated Successfully"
				]);

		}else{
			echo json_encode([
			"msg" => "Error Updating Data"
		]);

		}

	}else{
		echo json_encode([
			"msg" => "Error Updating Data"
		]);
	}

 ?>