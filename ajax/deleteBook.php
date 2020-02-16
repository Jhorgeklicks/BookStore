<?php

	include_once '../init.php';
	$queries = new queries;
	$form = new form;

	if(isset($_POST['id']) ){

		$bookId = $form->input("id");

		if($queries->crud("DELETE FROM books WHERE Book_Id = ? LIMIT 1",[$bookId])){

			echo json_encode(["status"=>"success","msg"=>"Book deleted Successfully"]);
		}

	}else{

		echo json_encode(["status"=>"Failed"]);
	}
 ?>