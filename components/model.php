<div class="model">
		<div class="model-header">
			<h3 class="heading">Add Book </h3>
			</div>
		<form id="bookForm">
			<div class="group">
				<input type="text"  id="bookname" name="bookname" class="control" placeholder="Book Name...">
				<div class="error nameError"></div>
			</div>
			<!-- Close group -->
			<div class="group">
				<input type="text"  id="bookauthor" name="bookauthor" class="control" placeholder="Author Name...">
				<div class="error authorError"></div>
			</div>
			<!-- Close group -->
			<div class="group">
				<input type="number"  id="bookprice" name="bookprice" class="control" placeholder="Book Price...">
				<div class="error priceError"></div>
			</div>
			<input type="hidden" id="bookStatus" value="addBook">
			<input type="hidden" id="bookId" name="hiddenId">
			<!-- Close group -->
			<div class="group">
				<input type="submit"  id="updateBk" class="btn btn-sweet" value="Add book &#8250;">
			</div>
			<!-- Close group -->
		</form>
		<!-- Close form -->
	</div>