
const loginform = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");

const emailError = document.querySelector(".emailError");
const passwordError = document.querySelector(".passwordError");

let emailStatus = passwordStatus = true;

loginform.addEventListener("submit", (e)=> {
	e.preventDefault();

	if(Empty(email, "Email", emailError)){
		emailStatus = false;
	}else{
		emailStatus = true;
	}


	if(Empty(password, "Password", passwordError)){

		passwordStatus = false;

	}else{
		passwordStatus = true;
	}


	if(emailStatus === false && passwordStatus === false ){
			$.ajax({
			type : "POST",
			url  : "ajax/login.php",
			data : $(loginform).serialize(),
			success : (response) => {
				const res = JSON.parse(response);

				if(res.status === "success"){
					window.location="dashboard.php";

				}else if (res.status == "emailError") {
					emailError.innerHTML = res.msg;
					email.classList.add("borderRed");
					password.classList.remove("borderRed");

				}else if (res.status === "passwordError") {
					passwordError.innerHTML = res.msg;
					password.classList.add("borderRed");
					email.classList.remove("borderRed");

				}
				console.log(res);
			}
		});
	}
});