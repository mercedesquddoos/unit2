var taskList = [];

function addTask(){
	var newTask = document.getElementById("newTask");
	taskList.push(newTask.value);
	newTask.value = "";
	newTask.select();
	displayTasks();
	saveTasks();
}

function displayTasks(){
	var listLocation = document.getElementById("listTask"); 
	listLocation.innerHTML = "";
	for(var i=0;i<taskList.length;i++){
		listLocation.innerHTML += '<li class="list-group-item"">' + taskList[i] +
		'<div class="btn-group-xs pull-right">' + 
		'<button onclick="removeTask(' + i + ')" class="btn btn-warning delete" type = button">' +
		'Done' + 
		'</button>' + 
		'</div></li>';
	}
}
function removeTask(itemToRemove){
	var tempArray = [];
	for(var i=0;i<taskList.length;i++){
		if(itemToRemove !== i){ tempArray.push(taskList[i]);}
	}
	taskList = tempArray;
	displayTasks();
	saveTasks();
    }
function saveTasks(){
	localStorage.ourTaskList = JSON.stringify(taskList);
}
function getTasks(){
	if(localStorage.ourTaskList){
		taskList = JSON.parse(localStorage.ourTaskList);
		displayTasks();
	}
	
}