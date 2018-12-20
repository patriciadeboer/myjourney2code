 var ul = document.querySelector("ul");


function add_task() {
	var taskItem = document.getElementById('toDoItem').value;
	var ul = document.querySelector("ul");

	var li = document.createElement("li"); 
	li.appendChild(document.createTextNode(taskItem)); 
	ul.appendChild(li); 
	document.getElementById('toDoItem').value='';

	// li.addEventListener("click",done);

	// //add function to complete task
	// function done() {
	// 	li.classList.toggle("completed");
	// }
	//Add done button
	var check=document.createElement("button");
	check.className = "checkBtn"
	check.innerHTML="&#10004;";
	li.appendChild(check);
	check.addEventListener("click",clickItem)

	// function clickItem(){
	// 	li.classList.add("completed")
	// }
	function clickItem(){
		li.classList.toggle("completed")
	}
	// function clickItem(){
	// 	if(li.className==="completed"){
	// 		li.className("uncompleted")
	// 	}else{
	// 		li.classList.add("completed")
	// 	}
	// 	console.log(li.className)
	// }


	//Add Button to Delete
	var done = document.createElement("button");
	done.className="doneBtn"
	done.innerHTML = "X";
	li.appendChild(done);
	done.addEventListener("click", deleteTaskItem);

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
