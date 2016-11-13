$(window).load(function() {
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
});

$(document).ready(function(){
addListenerToAddTask();
});
function addListenerToAddTask(){
	$(".add-task").click(function(){
		var valueTask = $(".input-task").val();
		if(!valueTask.trim()){
			alert("Please, enter your text!")
			return false
		}
		var containerTodo = "<div class='todo-container'> <strong>"+ valueTask +"</strong> <button class='edit-task'>Edit</button><button class='delete-task'>Delete</button></div>";
		$(".todos-container").append(containerTodo);
		$(".input-task").val("");
		addListenerToDeleteTask();
		addListenerToEditTask();
	});
}
function addListenerToDeleteTask(){
$(".delete-task").click(function(){
	$(this).parents(".todo-container").remove();
});
}
function addListenerToEditTask(){
$(".edit-task").click(function(){
var valueEditTask = $(this).siblings("strong");
$("#myModal").modal("show");
var inputForEdit = $(".input-task-edit");
inputForEdit.val(valueEditTask.text());
$(".save-changes").unbind("click");
$(".save-changes").click(function(){
	if(!inputForEdit.val().trim()){
		alert("Please, enter your text!")
		return false
	}
	valueEditTask.text(inputForEdit.val());
});

});
}
