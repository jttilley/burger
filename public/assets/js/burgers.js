// $(function() {
//   $(".change-sleep").on("click", function(event) {
//     var id = $(this).data("id");
//     console.log('$(this).data("id"): ', $(this).data("id"));
//     console.log('$(this): ', $(this));
//     console.log('id: ', id);
//     var newSleep = $(this).data("newsleep");

//     var newSleepState = {
//       sleepy: newSleep
//     };

//     // Send the PUT request.
//     $.ajax("/api/cats/" + id, {
//       type: "PUT",
//       data: newSleepState
//     }).then(
//       function() {
//         console.log("changed sleep to", newSleep);
//         // Reload the page to get the updated list
//         // location.reload();
//       }
//     );
//   });
// })

$(function(){
  $(".change-devour").on("click", function(e){
    console.log("change clicked");
    // console.log('e: ', e);
    // console.log('$(this): ', $(this));
    console.log('$(this).data("id"): ', $(this).data("id"));
    var id = $(this).data("id");    
    

    // id = $(this).attr("data-id");
    console.log('id: ', id);
    const change = {
      devoured: true
    };
    console.log('change: ', change);
    
    $.ajax("/api/" + id, {
      type: "PUT",
      data: change
    }).then(function(){
      console.log("Burger was moved.")
      
      location.reload();
    });
  });

  $(".add").on("submit", function(e){
    e.preventDefault();
    
    console.log("submit pressed");
    console.log('e: ', e);
    
    const newBurger = {
      burger_name: $("#name").val().trim(),
    };
    
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function(){
      console.log("Added " + newBurger + " to be devoured.")

      // location.reload();
    });
  });
})