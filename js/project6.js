


function add_task() {
	var taskItem = document.getElementById('toDoItem').value;
	var ul = document.querySelector("ul");

	var li = document.createElement("li"); 
	li.appendChild(document.createTextNode(taskItem)); 
	ul.appendChild(li); 
	document.getElementById('toDoItem').value='';

	//Add Button
	var button = document.createElement("button");
	button.innerHTML = "X";
	li.appendChild(button);
	button.addEventListener("click", deleteTaskItem);

	function deleteTaskItem(){
		li.classList.add("remove")
	}

}

var input = document.getElementById("toDoItem");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    document.getElementById("toDoSubmit").click();
  }
});
