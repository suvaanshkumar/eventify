document.addEventListener('mouseover', function() {
  document.body.style.color = 'brown';
});

window.onload = function() {
  document.getElementById('submit').onclick = validdateform;
};

let $ = function(id) {
  return document.getElementById(id);
};

function validdateform() {
  let tel= $('tel');
  let email= $('field2');
  let name = $('field1');
  let namepattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  let emailpattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  let telpattern = /^[0-9]{10}$/;
  if (name.value == '') {
    name.nextElementSibling.innerHTML = 'please enter name';
    //firstname.nextElementSibling.firstChild.nodeValue = 'please enter firstname';
  } else if (!namepattern.test(name.value)) {
    name.nextElementSibling.innerHTML =
      'please enter letter only ';
  } else {
    name.nextElementSibling.innerHTML = '<div style="color:green">valid name</div>';
    localStorage.setItem(name.value+"name",name.value);
  }
  if (email.value == '') {
    email.nextElementSibling.innerHTML = 'please enter email';
    //firstname.nextElementSibling.firstChild.nodeValue = 'please enter firstname';
  } else if (!emailpattern.test(email.value)) {
    email.nextElementSibling.innerHTML =
      'please enter valid email';
  } else {
    localStorage.setItem(name.value+"email",email.value);
    email.nextElementSibling.innerHTML = '<div style="color:green">valid email </div>';
  }

  if (tel.value == '') {
    tel.nextElementSibling.innerHTML = 'please enter telephone';
    //firstname.nextElementSibling.firstChild.nodeValue = 'please enter firstname';
  } else if (!telpattern.test(tel.value)) {
    tel.nextElementSibling.innerHTML =
      'Not a valid telephone';
  } else {
    localStorage.setItem(name.value+"tel",tel.value);
    tel.nextElementSibling.innerHTML = '<div style="color:green">valid number</div>';
  }
}

window.onload=function() {
  //window.alert("hi");
  var x = document.createElement("IMG");
  x.setAttribute("src", "images/join.jpg");
  x.setAttribute("width", "auto");
  x.setAttribute("height", "100px");
  x.setAttribute("alt", "The Pulpit Rock");
  document.getElementById("joinimg").appendChild(x);
}


var loadFile = function(event) {
	var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
};
//function to make the nav vertical
function myFunction(x) {
  if (x.matches) { // If media query matches
    document.getElementById('navul').style.flexDirection="column";
  } else {
    document.getElementById('navul').style.flexDirection="row";
    //document.getElementById("navul").style.backgroundColor  = "pink";
  }
}

//adding Jquery to load items
var x = window.matchMedia("(max-width: 600px) ")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
