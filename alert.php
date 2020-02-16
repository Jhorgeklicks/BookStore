<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	 <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>Dashboard</title>
	<!-- Link CSS file -->
	<link rel="stylesheet" href="assets/css/style.css">
	<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap" rel="stylesheet">
</head>
<body>

<div class="model-container">
	<div class="model">
		<div class="model-header">
			<h3 class="heading">Add Data</h3>
			</div>
		<form action="" method="POST">
			<div class="group">
				<input type="text"  id="" class="control" placeholder="Fruit Name...">
			</div>
			<!-- Close group -->
			<div class="group">
				<input type="number"  id="" class="control" placeholder="Fruit Price...">
			</div>
			<!-- Close group -->
			<div class="group">
				<input type="text"  id="" class="control" placeholder="Fruit Name...">
			</div>
			<!-- Close group -->
			<div class="group">
				<input type="submit"  id="" class="btn btn-sweet" value="Add fruit &rarr;">
			</div>
			<!-- Close group -->
		</form>
		<!-- Close form -->
	</div>
	<!-- Close model -->
</div>
<!-- Close model-container -->



	 <nav id="nav">
  	<ul class="left">
  		<li><a href="">Home</a></li>
  		<li><a href="#" id="showModel"><span class="plus">&#x271A</span></a></li>
  		<li><a href="">Gallery</a></li>
  		<li class="right"><a href="" class="btn btn-default">Logout</a></li>
  	</ul>
  </nav>

	<!-- Close nav -->

	<div class="container">
	<div class="content-section">

	<div class="alert success">
		<div class="alert-icon"><div class="alertIcon">&check;</div></div>
		<p> <strong>Success!</strong> Your account created successfully.</p>
	</div>
	<!-- Close alert -->
    <br><br>
	<div class="alert danger">
		<div class="alert-icon"><div class="alertIcon">&times;</div></div>
		<p> <strong>Error!</strong> Sorry this email is already exist.</p>
	</div>
	<!-- Close alert -->

</div>
<!-- Close content-section -->

</div>
<!-- Close container  -->
	<script src="assets/js/app.js"></script>
</body>
</html>