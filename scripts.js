window.onload=function(){
	let btn=document.getElementsByTagName("button")[0];
	let message=document.getElementsByClassName("message")[0];
	let email=document.getElementsById("email");
	
	btn.addEventListener("click", function(x){
		x.preventDefault();
		var email=emails.value;
		
		if (email.indexOf('@') <=0)
		{
			message.textContent="Please enter a valid email address";
		}
		else if (email.charAt(email.length-4)!=',')
		{
			message.textContent="Please enter a valid email address";
		}
		else {
			message.textContent='Thank you! Your email address ${email} has been added to our mailing list!';
			email.value = " ";
		}
    }
    
}