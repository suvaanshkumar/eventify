
   function bigImage(x)
   {   //when mouse hovers over image , size becomes larger
	   x.style.height= "140px";
	   x.style.width =" 400px";
     }
   function smallImage(x)
   {       //when mouse hovers over image , size becomes larger
	x.style.height= "100px";
	x.style.width =" 200px";
   }

//validating input from user
window.onload = function(){
	document.getElementById('register1').onclick = textFormat;
};
 let $ = function(id){
	 return document.getElementById(id);
 }; 

function textFormat()
{
   let firstname = $( 'fname1');    /* capital as well as small letters are accepted as input in firstname, lastname, password */
   let namePattern = /^[a-zA-Z]+$/;

	let lastname = $( 'lname1'); 
	let namePattern1 = /^[a-zA-Z]+$/;

	if(!namePattern.test(firstname.value)) 
	{  
		firstname.nextElementSibling.innerHTML = 'Please enter valid first name';

	}
	  if(namePattern.test(firstname.value))
	   {
		firstname.nextElementSibling.innerHTML = ' ';

		   if(namePattern1.test(lastname.value))
		   {
			lastname.nextElementSibling.innerHTML = ' ';

			   //When all the information is correct the following messege will display asking user to book an appointment
			let msg="As you have shown your interest. Your name has been registered.Email us at gurvirkaurmundi@gmail.com to book an appointment with us";
			let result= msg.bold();
			let result2= result1.fontcolor("black");
			document.getElementById("detail").innerHTML=result2;	
		
		   }
	
			if(!namePattern1.test(lastname.value))
			{
				lastname.nextElementSibling.innerHTML = 'Please enter valid last name' ;
			}

		}
	
	
}