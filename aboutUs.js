let aboutUsArticle1="We have a tremendous history of collection of data from allover the canada.<br>We believ in Reliability .<br> Our scrupulous hardwork will get you an edge over you companions "
let contact="Phone number: +4678909999 <br> email id : abc@eventify.com   <br>  address : 106,torontoexpress<br>Greter Toronto Area<br> Canada 11009999"
let sponsors="Nike.com:just do it <br> raymonds:the completde man <br> columbia sport:wear our outfit"
//adding text to the ARTICLE
function function1(){
    document.getElementById("event").innerHTML+="Events create excitements in you life"
}
//dropdown for aboutus history
function aboutushyperlinks(){
    document.getElementById("openaboutuslink").innerHTML=aboutUsArticle1;
}
//dropdown for join us
function aboutusjoinourpresence(){
    document.getElementById("openaboutuslink").innerHTML=contact;
}
//Dropdown to sponsors
function aboutussponsorshyperlinks(){
    document.getElementById("openaboutuslink").innerHTML= sponsors;
}
//JSQUERY
$(document).ready(function(){
    $(".event").hover(function(){
      $(this).css("background-color", "white");
      }, function(){
      $(this).css("background-color", "khaki");
    });
  });
$(document).ready(function(){
    $("#ourpresence").mouseover(function(){
      $("#ourpresencedata").show();});  
  });

 