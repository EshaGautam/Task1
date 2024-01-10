let form = document.querySelector("form");
let fruitList = document.querySelector(".fruits");
let fruitListItems = document.getElementsByClassName("fruit");
let DelButton = document.getElementsByClassName("delete-btn");

for (let i = 0; i < fruitListItems.length; i++) {
  let EditButton = document.createElement("button");
  let EditButtonText = document.createTextNode("Edit");
  EditButton.appendChild(EditButtonText);
  EditButton.className = "edit-btn";
  fruitListItems[i].appendChild(EditButton);
}

//Adding Event listener on form to add newfruit in the list

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let newFruitToAdd = document.getElementById("fruit-to-add");
  let newFruitItem = document.createElement("li");
  let newFruitItemText = document.createTextNode(newFruitToAdd.value);
  newFruitItem.appendChild(newFruitItemText);

  // Adding delete button to the newFruitItem by adding class of existing delete button

  let deleteButton = document.createElement("button");
  let deleteButtonText = document.createTextNode("x");
  deleteButton.appendChild(deleteButtonText);
  deleteButton.className = "delete-btn";
  
  // Adding edit button to the newfruitsitems which are created
  let EditButton = document.createElement("button");
  let EditButtonText = document.createTextNode("Edit");
  EditButton.appendChild(EditButtonText);
  EditButton.className = "edit-btn";

  newFruitItem.appendChild(deleteButton);
  newFruitItem.appendChild(EditButton);
  fruitList.appendChild(newFruitItem);
});

//Adding event listener to target li delete button to remove that from list

fruitList.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-btn")) {
    let fruitItemsToDelete = event.target.parentElement;
    fruitList.removeChild(fruitItemsToDelete);
  }
});
