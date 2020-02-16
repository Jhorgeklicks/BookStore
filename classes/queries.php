<?php

	class queries extends db{

		public $results;

		 public function crud($query , $param = [] ){

		 		if (empty($param)) {
		 			$this->result = $this->conn->prepare($query);
		 			return $this->result->execute();
		 		}else{
		 			$this->result = $this->conn->prepare($query);
		 			return $this->result->execute($param);
		 		}
			}

			// creating a function to count all data
			public function Count(){

				return $this->result->rowCount();
			}
			// creating function to fetch a single row from the database
		 public function getSingleRow(){
		 		return $this->result->fetch(PDO::FETCH_OBJ);
		 }

		 // creating a function to fetch all data from the database
		public function getAllRow(){
			return $this->result->fetchAll(PDO::FETCH_OBJ);
		}
	}
?>