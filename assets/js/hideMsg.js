

function hideMsg(){
	const success =  document.querySelector(".success");
	const danger =  document.querySelector(".danger");
	const loader =  document.querySelector(".loader-section");

setTimeout(()=>{
	if (success !== null) {
		success.style.display = "none";
	}
}, 5000);

setTimeout(()=>{
	if (danger !== null) {
		danger.style.display = "none";
	}
}, 5000);

setTimeout(()=>{
	if (loader !== null) {
		loader.style.display = "none";
	}
}, 2000);


}

hideMsg();