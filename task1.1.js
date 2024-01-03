var fruits = document.getElementsByClassName('fruit');
if (fruits.length >= 3) {
  fruits[2].style.backgroundColor = 'yellow';
}

var fruits = document.getElementsByClassName('fruit');
for (var i = 0; i < fruits.length; i++) {
  fruits[i].style.fontWeight = 'bold';
}