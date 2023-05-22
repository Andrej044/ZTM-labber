var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
let liList = document.querySelectorAll("li");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	let p = document.createElement("p");
	
	p.appendChild(document.createTextNode(input.value));
	p.addEventListener("click",clickListener);
	
	li.appendChild(p)
	li.appendChild(createDeleteButton());
	ul.appendChild(li);
	input.value = "";
}

function createDeleteButton(){
	let btn = document.createElement("button");
	btn.textContent = "DELETE TASK!!";
	btn.classList.add("btn");
	btn.addEventListener("click", removeTask);
	return btn;
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


function clickListener(e){
	let li = e.target;
	li.classList.toggle("done");
}



liList.forEach(function(item){
	item.appendChild(createDeleteButton());
	item.firstChild.addEventListener("click",clickListener);
	item.lastChild.addEventListener("click", removeTask)
});



function removeTask(){
	this.parentElement.remove();
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
