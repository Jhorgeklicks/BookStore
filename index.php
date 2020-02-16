<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	 <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>Create user account</title>
	<!-- Link CSS file -->
	<?php
		include 'components/csslinks.php';
	 ?>
</head>
<body>

	<div class="account-split">

		<div class="messageSection">

		</div>
		<!-- Close messageSection -->
		<div class="formSection">
			<div class="formSectionParent">
           <div class="formSectionContainer">
				<?php include_once 'components/registerform.php'; ?>
		   <!-- Close formSectionContainer -->
		   </div>
		   <!-- Close formSectionParent  -->
		</div>
		<!-- Close formSection -->

	</div>
	<!-- Close account-split -->

<script src="assets/js/jquery.min.js"></script>
<script src="assets/js/validations.js"></script>
<script src="assets/js/register.js"></script>
</body>
</html>