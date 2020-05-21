

var images = [ "images/2.jpg", 
              "images/3.jpg",
             "images/4.jpg",
             "images/5.jpg"

];

var i=0;
function slides(){
document.getElementById("slideimage").src = images[i];
if(i<(images.length-1))
 i++;
 else
 i=0;

}
setInterval(slides, 2000);








function searchFun() {
    let filter = document.getElementById('myInput').value.toUpperCase();
    let myTable = document.getElementById('myTable');
    let tr = myTable.getElementsByTagName('tr');

    for (var i=0; i<tr.length; i++){
        let td= tr[i].getElementsByTagName('td')[0];
       if(td){
            let textvalue = td.textContent || td.innerHTML;
            if(textvalue.toUpperCase().indexOf(filter) > -1){
                tr[i].style.display = "";
                }
            else {
                tr[i].style.display = "none";
            }
        }
    
    }          
}

function validation(){
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var position = document.getElementById('position').value;

if (name == ""){
        document.getElementById('username').innerHTML= "** please fill the username field"
        return false;
}

if((name.length <=2 || name.length >20)){
    document.getElementById('username').innerHTML= "** user length must be between 2 and 22"
    return false; }
   
if(!isNaN(name)){
    document.getElementById('username').innerHTML= "** only characters are allowed"
    return false; }

    
if (phone == ""){
    document.getElementById('mnumber').innerHTML= "** please fill the mobile number field"
    return false;}

if(isNaN(phone)){
    document.getElementById('mnumber').innerHTML= "** only numbers are allowed"
    return false; }
if(phone.length!=10){
    document.getElementById('mnumber').innerHTML= "**phone number must be 10 digits"
    return false;   }
if (email == ""){
    document.getElementById('emails').innerHTML= "** please fill the email field"
    return false;
}
if(email.indexOf('@') <= 0){
document.getElementById('emails').innerHTML= "**@ invalid position"
return false;}

if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.')){ 
    document.getElementById('emails').innerHTML= "**. invalid position"
return false;
}

if (position == ""){
    document.getElementById('positions').innerHTML= "** please fill position field"
    return false;}

if(!isNaN(position)){
    document.getElementById('positions').innerHTML= "** only characters are allowed"
    return false; 
}

}

$(document).ready(function() {
    $('.info').hide()
    $("h6").click(function(evt) {
        $(this).toggleClass("info");
        if ($(this).attr("class") !== "info") {
            $(this).next().hide();
        }
        else {
            $(this).next().show();
        }
        evt.preventDefault();
    }) // end click
    $("h6").find("a:first")
}); 




  



