$(document).ready(function () {

    //show items saved in local storage
    $("#list-items").html(localStorage.getItem("listItems"));

    //Create new todo items
    $(".add-items").submit(function(event){
    	event.preventDefault();

    	var item = $("#todo-list-item").val();

    	if (item) {
    		$("#list-items").append("<li><input class='checkbox' type='checkbox'/>" + item + "<a class='remove'>x</a><hr></li>")
            localStorage.setItem("listItems", $("#list-items").html());
    		$("#todo-list-item").val("");
    	};
    	
    });

    //check to see if item is checked, if true remove checked
	$(document).on("change", ".checkbox", function(){
        if($(this).attr("checked")){
            $(this).removeAttr("checked");
        }
        else{
            $(this).attr("checked", "checked");    
        }
        
        //toggle the checkbox with "completed" class
		$(this).parent().toggleClass("completed");
        localStorage.setItem("listItems", $("#list-items").html());
	});

    //remove item when clicked
    $(document).on("click", ".remove", function(){
        $(this).parent().remove();
        localStorage.setItem("listItems", $("#list-items").html());
    });

});
