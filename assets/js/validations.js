

//***********************************************************************************************
//*																								*
//*				INPUT VALIDATION STARTS HERE													*
//**																							*
//***********************************************************************************************

// function to check if input is empty
function Empty(input , label , errorClass){

	const fieldName = input.value.trim();

	if (fieldName == '') {
		errorClass.innerHTML = label + " is required";
		input.classList.add("borderRed");
		return false
	}else{
		errorClass.innerHTML = " ";
		input.classList.remove("borderRed");
		return true;
	}

}

// function to check for integer value in name field
function CheckInput(input , label , errorClass){
	const reg = /^[a-zA-Z ]+$/;

	if (reg.test(input.value.trim())) {
		errorClass.innerHTML = " ";
		input.classList.remove("borderRed");
		return true;
	}else{
		errorClass.innerHTML = label + " must not include Numbers";
		input.classList.add("borderRed");
		return false;
	}
}

// function to check the minimum length of the input field
function checkMinLength(input , label , errorClass , minLength){
	const fieldName = input.value.trim();

	if(fieldName.length < minLength){
		errorClass.innerHTML = label + " must be atleast <strong>" + minLength + "</strong> characters long";
		input.classList.add("borderRed");
		return false;
	}else{
		// input is greater than the minlengh
		errorClass.innerHTML = " ";
		input.classList.remove("borderRed");
		return true;
	}
}



//***********************************************************************************************
//*																								*
//*				Email VALIDATION STARTS HERE													*
//**																							*
//***********************************************************************************************
//

function validEmail(input , label , errorClass){
	// jhorge.klicks123@gmail.com
	const validmailpattern = /^[a-zA-Z]+[0-9a-zA-Z_\.]*@[a-z]+\.[a-z]+$/;
	if(validmailpattern.test(input.value.trim())){
		errorClass.innerHTML = '';
		input.classList.remove("borderRed");
		return true;
	}else{
		errorClass.innerHTML = "Invalid " +label + " Format";
		input.classList.remove("borderRed");
		return false;
	}
}

// checks if email already exists in the database
function checkEmailInDb(input ,errorClass , table , column , callback ){
	const fieldName = input.value.trim();

	$.ajax({
		type : "POST",
		url : "ajax/checkEmail.php",
		data : {
			email 	   : fieldName,
			tableName  : table,
			columnName : column
		},
		success: (feedback)=>{
			const convertedfeedback = JSON.parse(feedback);

			if(convertedfeedback.status === "error"){
				errorClass.innerHTML = convertedfeedback.msg;
				input.classList.add("borderRed");
				callback(false , "Email Already Exist");
			}else{
				errorClass.innerHTML = '';
				input.classList.remove("borderRed");
				callback(true , "Email can be used");
			}
		}

	});
}


// password validation function
function passwordformat(input, label , errorClass){
	const fieldname = input.value.trim();

	const pattern = /^[a-zAZ]+[0-9a-zA-Z- ]*$/;

	if(pattern.test(fieldname)){
		errorClass.innerHTML = '';
		input.classList.remove("borderRed");
		return true;
	}else{
		errorClass.innerHTML = label + ' not valid. enter valid Password';
		input.classList.add("borderRed");
		return false;
	}
}

function greaterThanZero(input, label , errorClass){
 const fieldname = input.value.trim();

 if(fieldname < 1){
	errorClass.innerHTML = label + ' must be greater than 0';
	input.classList.add("borderRed");
	return false;

 }else{
 	errorClass.innerHTML = '';
	input.classList.remove("borderRed");
	return true;
 }

}