$(function() {
    $(".update-burger").on("click", function(event) {
     var id = $(this).data("id");
     var ate = $(this).data("ate");
      var newDevouredState = {
          devoured: ate
      };
  
      $.ajax("/api/burger/" + id, {
        type: "PUT",
        data:newDevouredState
      }).then(
        function() {
  //     console.log("Change to Eaten", newDevoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      //event.preventDefault();
  
      var newBurger = {
        burger_name: $("#ca").val().trim(),
       devoured: 0
      };
  
      // Send the POST request.
      $.ajax("/api/burger", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new Burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    // $(".delete-burger").on("click", function(event) {
    //   var id = $(this).data("id");
  
  //     // Send the DELETE request.
  //     $.ajax("/api/burger/" + id, {
  //       type: "DELETE"
  //     }).then(
  //       function() {
  //         console.log("deleted burger", id);
  //         // Reload the page to get the updated list
  //         location.reload();
  //       }
  //     );
  //   });
  // });
});