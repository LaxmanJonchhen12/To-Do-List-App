// selecting the form and preventing the default behaviour of reloading
let form = document.querySelector("#addTask");
form.addEventListener("submit", function (e) {
  e.preventDefault();
});

// selecting and getting value from the input box
let input = document.querySelector("#add");

// selecting the add button
let addButton = document.querySelector("#addBtn");

// function for creating elements after adding task
function create(e) {
  // if condition to check wether the input value is empty or not
  if (input.value != "") {
    // creating elements
    let div = document.createElement("div");
    let taskTitle = document.createElement("span");
    let deleteBtn = document.createElement("button");
    let doneBtn = document.createElement("button");

    // defining attribute of the buttons
    deleteBtn.setAttribute("id", "dBtn");
    doneBtn.setAttribute("id", "dnBtn");

    // text content of the child of the div and adding attribute of the buttons
    taskTitle.textContent = input.value;
    deleteBtn.textContent = "✖";
    doneBtn.textContent = "✔";

    // adding styling class to the elements of the div
    div.classList.add("space");
    deleteBtn.classList.add("delBtn");
    doneBtn.classList.add("doneBtn");

    // appending elements
    // appending child elements of the div
    div.appendChild(taskTitle);
    div.appendChild(deleteBtn);
    div.appendChild(doneBtn);

    // appending the div to task list area
    document.querySelector("#taskList").append(div);

    // delete Button Code
    deleteBtn.addEventListener("click", function (e) {
      let parent = e.target.parentElement;
      parent.parentNode.removeChild(parent);
      // console.log(parent);
    });

    // Done Button Code
    doneBtn.addEventListener("click", function (e) {
      taskTitle.classList.add("done");
    });

    // clearing the input value after each input
    input.value = "";
  } else {
    alert("You can't add empty task");
  }
}

addButton.addEventListener("click", create);
document.querySelector("input").addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    create();
  }
});
