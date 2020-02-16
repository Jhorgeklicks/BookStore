
const bookform   	 = document.getElementById("bookForm");

const bookname    	 = document.getElementById("bookname")
const bookauthor     = document.getElementById("bookauthor")
const bookprice      = document.getElementById("bookprice")

const modelcontainer = document.querySelector(".model-container");

const nameError      = document.querySelector(".nameError");
const authorError    = document.querySelector(".authorError");
const priceError     = document.querySelector(".priceError");

const message        = document.querySelector(".message");

const bookStatus     = document.getElementById("bookStatus");

let heading          = document.querySelector(".heading");
let updateBk         = document.getElementById("updateBk");
// get hidden id from the model form
const bookId         = document.getElementById("bookId");
const totalBooks     = document.getElementById("totalBooks");
const BooksPrice     = document.getElementById("BooksPrice");

let	nameStatus       = authorStatus = priceStatus = false;

// pagination offer goes here
const recordsPerPage = 3;
let page = 1;

bookform.addEventListener("submit", (e)=>{
	e.preventDefault();

if(Empty(bookname, "BookName" , nameError)){
	nameStatus = false;
}else{
	nameStatus = true;
}

// Author validation
if(Empty(bookauthor, "Author" , authorError)){
	authorStatus = false;

		if (CheckInput(bookauthor, "Author" , authorError)) {
			authorStatus = false;
		}else{
			authorStatus = true;
		}
}else{
	authorStatus = true;
}

// Price validation
if(Empty(bookprice, "Price" , priceError)){
	priceStatus = false;

	if (greaterThanZero(bookprice, "Price" , priceError)) {
		priceStatus = false;
	}else{
		priceStatus = true;
	}
}else{
	priceStatus = true;
}


if (nameStatus === false && authorStatus=== false && priceStatus=== false) {

	// ajax call to add books
	if(bookStatus.value === "addBook"){

		$.ajax({
			type: "POST",
			url: "ajax/addBook.php",
			data: $(bookform).serialize(),
			success: (feedback) => {
				const res = JSON.parse(feedback);

				if(res.status === "success"){
					modelcontainer.style.display = "none";
					// reset the input fields to empty
					bookform.reset();
					message.innerHTML = `<div class="alert success">
		<div class="alert-icon">
		<div class="alertIcon">&check;</div>
		</div>
		<p><strong>Success!</strong> ${res.msg}</p>
	</div>`;
				hideMsg();
				fetchBooks();
				booksInfo();
				createPagination();
				}
			}
		});
	}else if( bookStatus.value === "updateBook"){
		$.ajax({
			type: "POST",
			url: "ajax/updateBook.php",
			data: $(bookform).serialize(),
			success: (feedback) => {
				const res = JSON.parse(feedback);

				if(res.status === "success"){
					modelcontainer.style.display = "none";
					// reset the input fields to empty
					bookform.reset();
					message.innerHTML = `<div class="alert success">
		<div class="alert-icon">
		<div class="alertIcon">&check;</div>
		</div>
		<p><strong>Success!</strong> ${res.msg}</p>
	</div>`;
				hideMsg();
				fetchBooks();
				booksInfo();
				}
			}
		})
	}
}

});

function fetchBooks(){
	const table = document.getElementById("table");
	let offset = (page - 1) * recordsPerPage;
	$.ajax({
		type: "POST",
		url: "ajax/fetchBooks.php",
		data: {offset : offset, recordsPerPage : recordsPerPage},
		success: (feedback) =>{
			const respond = JSON.parse(feedback);
			// console.log(respond);
			let result = "";


			if(respond.status === "success"){

				respond.data.forEach((book) => {

					result =result + `<tr>
				<td> ${book.Book_name}</td>
				<td>${book.Book_author}</td>
				<td><div class="dollor">$ ${book.Book_price} .00</div></td>
			    <td><a href="" class="btn btn-warning btn-small UpdateBookBtn" onclick="updateBook(${book.Book_Id},'${book.Book_name}','${book.Book_author}',${book.Book_price})" >Edit <span>&#9998;</span></a></td>
			    <td><a href="javascript:void(0);" class="btn btn-danger btn-small" onclick="deleteBook(${book.Book_Id},'${book.Book_name}');" >Delete <span>&#10006;</span></a></td>
			</tr>`;

				})

				table.innerHTML = `<table class="table"><thead>
								<tr>
									<th>Book Name</th>
									<th>Author Name</th>
									<th>Book Price</th>
									<th>Edit</th>
									<th>Delete</th>
								</tr>
							</thead>
							<tbody>${result}</tbody></table>`;
			}else{
				table.innerHTML = `<span style="font-size:2.5rem">there is no data</span>`;
			}

			const UpdateBookBtn = document.querySelectorAll(".UpdateBookBtn");

			UpdateBookBtn.forEach((btn)=>{
				btn.addEventListener("click", (e)=>{
					e.preventDefault();
					ModelBox();
				})
			})
		}
	});
}

fetchBooks();
function updateBook(id , bname , bauthor , bprice){
	// console.log(id, bookname,bookauthor,bookprice);
	// setting values into fields
	bookname.value = bname;
	bookauthor.value = bauthor;
	bookprice.value = bprice;

// updating the model info to suit update
	heading.innerHTML = "Update Book";
	updateBk.value = "Update Book >";

// removing border Red from the form
	bookname.classList.remove("borderRed");
	bookauthor.classList.remove("borderRed");
	bookprice.classList.remove("borderRed");

	// hiding error message from showing in the edit form
	nameError.innerHTML = "";
	authorError.innerHTML = "";
	priceError.innerHTML = "";

	bookStatus.value="updateBook";

	bookId.value = id;
}

function addBookForm(){
	bookname.value = "";
	bookauthor.value = "";
	bookprice.value = "";

	heading.innerHTML = "Add Book";
	updateBk.value = "Add Book >";

	bookStatus.value="addBook";
}

function deleteBook(id , book){
	let feedback = "Deleted book cannot be recovered, Click ok to delete \"" + book + "\"";
	const confirmBook = confirm(feedback);
	if (confirmBook) {
		$.ajax({
			type: "POST",
			url: "ajax/deleteBook.php",
			data: {id},
			success: (feedback)=>{
				const res = JSON.parse(feedback);
				console.log(res);
				if(res.status === "success"){
					message.innerHTML = `<div class="alert danger">
						<div class="alert-icon">
						<div class="alertIcon">&times;</div>
						</div>
						<p><strong>Success!</strong>${res.msg}</p>
					</div>`;
				hideMsg();
				fetchBooks();
				booksInfo();
				createPagination();
				}else{

				}
			}

		})
	}else{
		console.log("book savior")
	}
}

function booksInfo(){

	$.ajax({
		type :  "GET",
		url  :  "ajax/booksInfo.php",
		success : (response) =>{
			const res = JSON.parse(response);
			if(res.status === "success"){
				totalBooks.innerHTML = res.bookNumber;
				BooksPrice.innerHTML = "$"+res.bookPrice  + ".00";
			}else if(res.status === "nobooks"){
				totalBooks.innerHTML = res.msg;
				BooksPrice.innerHTML = "$ 0.00";
			}
		}
	})
}

booksInfo();

function createPagination(){
const paginate = document.querySelector(".paginate");

	let link  = '';
	let leftlink = '';
	let rightlink = '';

	$.ajax({
		type : "GET",
		url  : "ajax/rowsCount.php",
		success : (response) => {
			const res =  JSON.parse(response);
			// console.log(res);

			if (res.status === "success" ) {
				let totalPages = Math.ceil(res.row / recordsPerPage);
				// console.log(totalPages);
				let startLoop = page;

				let difference = totalPages - page;

				if (difference <= 3) {
					startLoop = totalPages - 3;
				}
				let endLoop = startLoop + 3;

				if (startLoop <=0 ) {
					startLoop =1;
				}

				if (page > 1) {
					leftlink = `<li><a href="javascript:void(0)" onclick="first();"> <span style="font-size:13px">First</span> </a></li><li><a href="javascript:void(0)" onclick="prev();"> <span style="font-size:18px">&laquo;</span> </a></li>`;
				}
				for(let i=startLoop; i<= endLoop; i++){
					let active = i === page ? 'active' : '';
					link += `<li><a href="javascript:void(0)" onclick="clickLink(${i});" class="${active}" >${i}</a></li>`;
					// console.log(link);
				}
				if (page < totalPages ) {
					rightlink = `<li><a href="javascript:void(0)" onclick="next();"> <span style="font-size:18px">&raquo;</span> </a></li><li><a href="javascript:void(0)" onclick="last(${totalPages});"> <span style="font-size:13px">Last</span> </a></li>`;
				}
				if (res.row > recordsPerPage) {
					paginate.innerHTML = `<ul class="pagination">${leftlink}${link}${rightlink}<ul>`;
				}

			}
		}
	})
}
createPagination();

function clickLink(pageNumber){
	page = pageNumber;
	createPagination();
	fetchBooks();
}

function prev(){
	page = page - 1;
	createPagination();
	fetchBooks();
}
function next(){
	page = page + 1;
	createPagination();
	fetchBooks();
}

function first(){
	page = 1;
	createPagination();
	fetchBooks();
}
function last(totalPages){
	page = totalPages;
	createPagination();
	fetchBooks();
}