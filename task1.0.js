let Main_heading=document.getElementById('main-heading');
Main_heading.innerHTML="Fruit World";
Main_heading.style.color = 'orange';

let Header=document.getElementById('header');
Header.style.background='green';
Header.style.borderBottom ='2px solid orange'

let Basket_heading=document.getElementById('basket-heading');
Basket_heading.style.color='green';

let paragraph = document.createElement('p');
paragraph.textContent ='Please visit us again'

let Thanks = document.getElementById('thanks');
Thanks.appendChild(paragraph);