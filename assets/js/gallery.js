
const galleryForm = document.getElementById("galleryForm");
const imageInput  = document.getElementById("imageInput");
const message 	  = document.querySelector(".message");
const col         = document.querySelector(".col");
const gallery     = document.querySelector(".gallery");


imageInput.addEventListener("change" , () => {

	$.ajax({
		type: "POST",
		url : "ajax/upload.php",
		data: new FormData($(galleryForm)[0]),
		contentType: false,
		cache : false,
		processData : false,
		success : (responds) => {
			const res = JSON.parse(responds);
			if(res.status == "failed" ){
				// console.log(res.msg);
				message.innerHTML = `<div class="alert danger">
		<div class="alert-icon"><div class="alertIcon">&times;</div></div>
		<p> <strong>Error!</strong> ${res.msg}</p>
	</div>`;
	hideMsg();
			}else if(res.status == "success"){
				// console.log(res);
				message.innerHTML = `<div class="alert success">
		<div class="alert-icon"><div class="alertIcon">&check;</div></div>
		<p> <strong>Success!</strong> ${res.msg}</p>
	</div>`;
	hideMsg();
	fetchImages();
			}
		}

	})

});

//  fetch galleries
function fetchImages(){
	$.ajax({
		type: "GET",
		url: "ajax/fetchImage.php",
		success : (response) =>{
			const res= JSON.parse(response);
			// console.log(res);

			let result = "";
			if (res.status === "failed") {

				gallery.innerHTML = `<h3 style="font-size: 1.5rem; padding: .5rem; margin-left : 10px;" = ''>There is no Image<span style="color: red; margin-left : 7px;">Upload Images here</span></h3>`

			}else if(res.status === "success"){
				// console.log(res.data);
				res.data.forEach((img)=>{

					result +=`<div class="col">
			<a href="assets/img/${img.Image_name}" data-lightbox="roadtrip"><img src="assets/img/${img.Image_name}" alt="" class="gallery-img"></a>
			<span class="delete" onclick="deleteImage(${img.img_Id }, '${img.Image_name}');">&times;</span>
		</div>`;
		//
				})
			gallery.innerHTML = result;
			}
		}
	})
}

function deleteImage(imgId,imgname){
	// console.log(imgId +" "+imgname);
	$.ajax({
		type: "POST",
		url : "ajax/deleteImage.php",
		data: {imageId: imgId, imageName : imgname },
		success : (response) =>{
			const res = JSON.parse(response);
			// console.log(res);

			if(res.status === "failed"){
				message.innerHTML = `<div class="alert danger">
		<div class="alert-icon"><div class="alertIcon">&times;</div></div>
		<p> <strong>Error!</strong> ${res.msg}</p>
	</div>`;
	hideMsg();
			}else if(res.status == "success"){
				// console.log(res);
				message.innerHTML = `<div class="alert success">
		<div class="alert-icon"><div class="alertIcon">&check;</div></div>
		<p> <strong>Success!</strong> ${res.msg}</p>
	</div>`;
	hideMsg();
	fetchImages();
			}
		}
	})
}

// call the function
fetchImages();