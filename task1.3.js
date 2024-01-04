let mainHeading = document.querySelector("#main-heading");
mainHeading.style.textAlign = "center";

let fruits = document.querySelector(".fruits");
fruits.style.backgroundColor = "gray";
fruits.style.margin = "30px";
fruits.style.padding = "30px";
fruits.style.listStyle = "none";
fruits.style.width = "50%";
fruits.style.borderRadius = "5px";

let basketHeading = document.querySelector("#basket-heading");
basketHeading.style.color = "brown";
basketHeading.style.marginLeft = "30px";

let fruitList = document.querySelectorAll(".fruit");
for (let i = 0; i < fruitList.length; i++) {
  fruitList[i].style.marginBottom = "5px";
}

let fruitListEven = document.querySelectorAll(".fruit:nth-child(even)");

for (let i = 0; i < fruitListEven.length; i++) {
  fruitListEven[i].style.backgroundColor = "brown";
  fruitListEven[i].style.color = "white";
}

let fruitListOdd = document.querySelectorAll(".fruit:nth-child(odd");
for (let i = 0; i < fruitListOdd.length; i++) {
  fruitListOdd[i].style.backgroundColor = "white";
  fruitListOdd[i].style.color = "black";
}
