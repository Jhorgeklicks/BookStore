<?php

include '../init.php';
$form = new form;
$queries = new queries;

if(isset($_POST['bookname']) && isset($_POST['bookauthor']) && isset($_POST['bookprice']) ){
	$bookname = $form->input('bookname');
	$bookauthor = $form->input('bookauthor');
	$bookprice = $form->input('bookprice');

	$User_Id =  $_SESSION['Id'];
	if($queries->crud("INSERT INTO Books(Book_name,Book_author,Book_price,User_ID) VALUES(?,?,?,?)",[$bookname, $bookauthor , $bookprice ,$User_Id])){

		echo json_encode(["status" => "success", "msg" => "Hello $bookauthor, Your book has been added"]);
	}else{
		echo json_encode(["status" => "failed", "msg" => "failed to add book, Try again later"]);
	}
}


  ?>