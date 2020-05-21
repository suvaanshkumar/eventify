
      $(document).ready(function() {
        $.getJSON("collection.json", function(data) {
          $.each(data.Events, function(key, value) {
            
           /*adding jquery to fetch json data */
            $('#allitems').append("<div class='grid-item'>"+
            "<a href='event.html'>"+
        "<img src="+value.image+"/>"+
        "<div class='dateofevent'>"+value.Date+"</div>"+
        "<figcaption class='titleofevent'>"+value.name+"</figcaption></a></div>");

          });
        });
      });

      


    