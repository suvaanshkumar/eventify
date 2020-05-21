$(document).ready(function(){
    $('#butContact').click(function(){
        let count=0;
        let arr = document.getElementsByClassName('field');
        for (let item of arr) {
            if (item.value=='') {
                alert("Missing information");
                count++;
                break;
            }
        }
        if (count==0){
            alert("Thank you!");
        }
    });
});
