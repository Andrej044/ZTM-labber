var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
let liList = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(createDeleteButton());
	ul.appendChild(li);
	input.value = "";
}

function createDeleteButton(){
	let btn = document.createElement("button");
	btn.textContent = "DELETE TASK!!";
	btn.classList.add("btn");
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
	li.classList.toggle("done")
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

liList.forEach(function(item){
	
	item.appendChild(createDeleteButton());
	item.addEventListener("click",clickListener);
});