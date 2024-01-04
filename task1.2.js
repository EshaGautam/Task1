let fruits = document.getElementsByTagName('li');

if (fruits.length >= 5) {
  fruits[4].style.color = 'blue';
}

for (let i = 0; i < fruits.length; i++) {
  fruits[i].style.fontStyle = 'italic';
}