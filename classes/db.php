<?php

	class db{

// private can only be accessed within the db class

		public $conn ;

	    public function __construct(){
	    	try{
	    		$this->conn = new PDO("mysql:host=" . HOST . ";dbname=" . DBNAME, USERNAME, PASSWORD);
	    		$this->conn->setAttribute(PDO::ATTR_EMULATE_PREPARES, FALSE);
	    			// echo "<script>alert('connected')</script>";

	    	}catch(PDOException $e){
	    		echo 'Connect Fail, Error Code :'. $e->getMessage();
	    	}

	    }
	}

 ?>