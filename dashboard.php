
<?php include 'startSession.php' ?>
<?php
	if(!isset($_SESSION['Id'])){
		header("Location: login.php");
	}
 ?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	 <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>Dashboard</title>
	<!-- Link CSS file -->
<?php include 'components/csslinks.php'; ?>
</head>
<body>

<?php
	if (isset($_SESSION['loader'])) {
		include 'components/loader.php';
	}
	unset($_SESSION['loader']);
 ?>


<div class="model-container">

	<?php include 'components/model.php'; ?>
	<!-- Close model -->
</div>
<!-- Close model-container -->



	<?php include 'components/nav.php'; ?>

	<!-- Close nav -->

	<div class="container">
	<div class="row mt-40">
		<div class="col-9">

	<?php include 'components/table.php'; ?>
<!-- Close table-section -->
</div>
<!-- Close col-9 -->
<div class="col-3">

	<?php include 'components/countSection.php'; ?>
	<!-- Close countSection -->
</div>
<!-- Close col-3 -->
</div>
<!-- Close row -->
</div>
<!-- Close container  -->
	<script src="assets/js/app.js"></script>
	<script src="assets/js/jquery.min.js"></script>
	<script src="assets/js/validations.js"></script>
	<script src="assets/js/hideMsg.js"></script>
	<script src="assets/js/book.js"></script>
</body>
</html>