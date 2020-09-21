$(function(){
  $(".change-devour").on("click", function(e){
    console.log("change clicked");
    // console.log('e: ', e);
    // console.log('$(this): ', $(this));
    // console.log('$(this).data("id"): ', $(this).data("id"));
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

  $(".add").on("click", function(e){
    e.preventDefault();
    
    
    console.log("submit pressed");
    console.log('e: ', e);
    
    const newBurger = {
      burger_name: $("#name").val().trim(),
    };
    
    console.log('newBurger: ', newBurger);
    
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function(){
      console.log("Added " + newBurger + " to be devoured.")

      location.reload();
    });
  });
})