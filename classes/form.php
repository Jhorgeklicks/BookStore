<?php

class form{

	public function input($fieldname){

		if($_SERVER['REQUEST_METHOD'] == 'POST' || $_SERVER['REQUEST_METHOD'] == 'post' ){

			$data = strip_tags(trim($_POST[$fieldname]));
			return $data;

		}else if($_SERVER['REQUEST_METHOD'] == 'GET' || $_SERVER['REQUEST_METHOD'] == 'get' ){

			$data = strip_tags(trim($_POST[$fieldname]));
			return $data;
		}


	}
}
 ?>
