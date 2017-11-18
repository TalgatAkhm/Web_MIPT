const INIT_STR = "Сделать задание #3 по web-программированию";
var isUlExists = false;

addInputToDocument();
addButtonToDocument();
addListElementToDocument(INIT_STR);

function addListElementToDocument(input_string)
{
	if(!isUlExists)
	{
		window.mAllListUl = document.createElement('ul');
		document.getElementById("root").appendChild(mAllListUl);
		isUlExists = true;
	}
    window.mCurrentListElemen = document.createElement('li');
    
    addSpanToLi(input_string);
    addDeleteButtonToLi();
	
    mAllListUl.appendChild(mCurrentListElemen);
}

function addTaskFromInput() 
{
    addListElementToDocument(mInputTextAdd.value);
}

function deleteTaskFromList() 
{
    this.parentNode.parentNode.removeChild(this.parentNode);
}


function addInputToDocument()
{
	window.mInputTextAdd = document.createElement('input');
	mInputTextAdd.id = "add_task_input";
	mInputTextAdd.type = "text";
	
	document.getElementById("root").appendChild(mInputTextAdd);
}

function addButtonToDocument()
{
	window.mAddTaskButton = document.createElement('button');
	mAddTaskButton.id = "add_task";
	mAddTaskButton.innerHTML = "Добавить задачу";	
	mAddTaskButton.addEventListener('click', addTaskFromInput);
	
	document.getElementById("root").appendChild(mAddTaskButton);
}

function addDeleteButtonToLi()
{
	window.mDeleteButton = document.createElement('button');
	mDeleteButton.innerHTML = "Удалить";
	mDeleteButton.name = "Удалить";
	
    mDeleteButton.addEventListener('click', deleteTaskFromList);
	mCurrentListElemen.appendChild(mDeleteButton);
}

function addSpanToLi(input_string)
{
	window.mInputTextSpan = document.createElement('span');
	mInputTextSpan.innerHTML = input_string;
	mCurrentListElemen.appendChild(mInputTextSpan);
}

