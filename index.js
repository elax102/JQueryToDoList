$(document).ready(function () {
    $(".add-items").submit(function(event){
    	event.preventDefault();

    	var item = $("#todo-list-item").val();

    	if (item) {
    		$("#list-items").append("<li><input class='checkbox' type='checkbox'/>" + item + "<a class='remove'>x</a><hr></li>")
    		$("#todo-list-item").val("");
    	};
    	
    });

    // $(".checkbox").change(function(){
    // 	console.log("Checkbox changed");
    // })

	$(document).on("change", ".checkbox", function(){
		
	});

});
