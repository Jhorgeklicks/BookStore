<?php include 'startSession.php'; ?>

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
	<link rel="stylesheet" href="assets/lightbox/dist/css/lightbox.min.css">
</head>
<body>
<?php include 'components/galleryNav.php' ?>

	<!-- Close nav -->

	<div class="container">
	<div class="gallery-section">
		<div class="message"> </div>
			<?php include 'components/galleryForm.php' ?>

	<div class="gallery">


	</div>
	<!-- Close gallery -->

</div>
<!-- Close gallery-section -->
</div>
<!-- Close container  -->
	<script src="assets/js/jquery.min.js"></script>
	<script src="assets/js/app.js"></script>
	<script src="assets/lightbox/dist/js/lightbox-plus-jquery.min.js"></script>
	<script src="assets/js/hideMsg.js"></script>
	<script src="assets/js/gallery.js"></script>
</body>
</html>