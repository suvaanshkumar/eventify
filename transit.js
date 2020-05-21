$(document).ready(function(){
    $(".tx").mouseover(function(){
        $(this).css("border", "2px solid red");
    });
    $(".tx").mouseout(function(){
        $(this).css("border", "0px solid red");
    });
});
