
window.onload = function()
  {
      document.getElementById('register').onclick = validateSign;
  };
   let $ = function(id)
   {
       return document.getElementById(id);
   }; 

  function validateSign()
  {
     let firstname = $( 'fname');    /* capital as well as small letters are accepted as input in firstname, lastname, password */
     let namePattern = /^[a-zA-Z]+$/;

      let lastname = $( 'lname'); 
      let namePattern1 = /^[a-zA-Z]+$/;

      let pass = $('setp');
      let passPattern = /^[a-zA-Z]+$/

      let emaill= $('email1');       /*eg: someone56@gmail.com ..This kind of input is accepted */
      let emailPattern= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

     


     if(!namePattern.test(firstname.value)) 
        {  
            firstname.nextElementSibling.innerHTML = 'Please enter valid first name';

        }
          if(namePattern.test(firstname.value))
           {
               
               if(namePattern1.test(lastname.value))
               {
                   if((emaill.value=='') || (!emailPattern.test(emaill.value)))
                   {
                       emaill.nextElementSibling.innerHTML='Please enter valid email';
                   }
                   if(emailPattern.test(emaill.value))
                   {
                      if(( pass.value=='') || (!passPattern.test(pass.value)))
                       {
                       password.nextElementSibling.innerHTML=' Please enter valid input as password';
                       }
                       if(passPattern.test(password.value))
                        {
                     
                        }
                    }
                 
                }
           
                   if(!namePattern1.test(lastname.value))
                     {
                       lastname.nextElementSibling.innerHTML = 'Please enter valid last name' ;
                     }
            }
 }
 "use strict";
 /*function which get values form login form*/
 function getValues() {
     var pass = document.getElementById('pass').value;
     var user = document.getElementById('user').value;
     let checkuser = localStorage.getItem('username');
     let checkpass = localStorage.getItem('setp');
 
     let i, j;
     /*to compare data store with input values*/
     if (checkuser != null || checkpass != null) {
         for (i = 0; i < checkuser.length; i++) {
             if (user == (JSON.parse(checkuser)[i])) {
                 for (j = 0; j < checkpass.length; j++)
                     if (pass == (JSON.parse(checkpass)[j]))
                         window.location.href = "http://127.0.0.1:5500/modules/home/index.html"
                         /*return true;*/
             }
         }
         for (i = 0; i < checkuser.length; i++) {
             if (user != (JSON.parse(checkuser)[i])) {
                 //alert("Login Unsuccessful");
                 document.getElementById('span').innerHTML = "   Invalid username or password !!";
                 return false;
             }
         }
 
     } else {
         document.getElementById('span').innerHTML = " Invalid login !!";
         return false;
     }
 }
 
 


    
    


  
