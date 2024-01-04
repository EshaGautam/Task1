let SubHeading = document.CreateElement('h3')
SubHeading.textContent = "Buy high quality organic fruits online";

let MainHeading = document.getElementById('header');
MainHeading.appendChild(SubHeading);

SubHeading.style.fontStyle='italic';

let Paragraph = document.createElement('p');
Paragraph.textContent='Totalfruits: 4';
let BasketHeading = document.getElementById('basket-heading');

BasketHeading.appendChild(Paragraph)

Paragraph.id ="fruits-total";