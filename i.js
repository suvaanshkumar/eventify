function validation(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
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
}



function UserEntry(name, email, message) {
    this.name = name;
    this.email = email;
    this.message = message;
}

function go(){
    // create data structure
    var  user = {entries:[]};  // this should be JSON array object

    // create onclick function for button
    document.getElementById("submit").onclick = function() {
        // get values from each form field
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;

        // create new object using consturctor
        var newUser = new UserEntry(name, email, message);
        

        // push new object into array
        user.entries.push(newUser);
        localStorage.setItem("user", JSON.stringify(user));

        // add information to page

        // write data to the page
        console.log(user);
        // store the data

        // read from storage and write to page if data found

        return true;
    }

    } 

$(document).ready(function() {
    $('.data').hide()
    $("h3").click(function(evt) {
        $(this).toggleClass("data");
        if ($(this).attr("class") !== "data") {
            $(this).next().hide();
        }
        else {
            $(this).next().show();
        }
        evt.preventDefault();
    }) // end click
    $("h3").find("a:first")
}); // end ready
