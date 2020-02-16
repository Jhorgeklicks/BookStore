

const form 	=  document.getElementById("myForm");
const name =  document.getElementById("name");
const email =  document.getElementById("email");
const password =  document.getElementById("password");

const nameError =  document.querySelector(".nameError");
const emailError =  document.querySelector(".emailError");
const passwordError =  document.querySelector(".passwordError");

let nameStatus = true;
let emailStatus = true;
let passwordStatus = true;

form.addEventListener("submit", (e) => {
	e.preventDefault();

	// calling the empty function from the validation.js file
	if (Empty(name , "Name", nameError )) {
		nameStatus = false;

		  if (CheckInput(name , "Name", nameError )) {
				nameStatus = false;

				if (checkMinLength(name , "Name", nameError, 5)) {
					nameStatus = false;

				}

		  }else{
		  	// this means the nameStatus has error
		  		nameStatus = true;
		  }

	}else{
		// this means the nameStatus has error
		nameStatus = true;
	}

	//  EMAIL VALIDATION STARTS FROM HERE
	if(Empty(email , "Email" , emailError)){
		emailStatus = false;

		if(validEmail(email , "Email" , emailError)){
			emailStatus = false;

			// checking for email in db note: dbname -> users and coulumn name -> email
		 checkEmailInDb(email ,emailError , "Users" , "Email", (param1, param2) => {
		 		if (param1 === false) {
		 			emailStatus = true;
		 			console.log(param2);
		 		}else if (param1 === true) {
		 			emailStatus = false;
		 			console.log(param2);
		 		}

		 		Register();
		 });


		}else{
			emailStatus =  true;
		}
	}else{
		emailStatus =  true;
	}


	// password validation
	if(Empty(password , "Password" , passwordError)){
		passwordStatus = false;

		if(checkMinLength(password , "Password", passwordError , 5)){
			passwordStatus = false;

			if(passwordformat(password , "Password" , passwordError)){
				passwordStatus = false;
			}else{
				passwordStatus = true;
			}
		}else{
			passwordStatus = true;
		}
	}else{
		passwordStatus = true;
	}

	function Register(){
		if (nameStatus === false && emailStatus === false && passwordStatus === false) {

			// submit form here
			$.ajax({
				type: "POST",
				url: "ajax/registration.php",
				data: $(form).serialize(),
				success : (response) =>{
					const res = JSON.parse(response);
					if(res.status === "Success"){
						window.location = 'login.php';
					}
				}
			});


		}
		// else{
		// 	console.log("false returned");
		// }
	}

});
