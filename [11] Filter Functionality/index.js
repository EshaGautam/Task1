let form = document.querySelector('form')
let fruitsDescriptionBox = document.createElement('input');
fruitsDescriptionBox.type = "text";
fruitsDescriptionBox.name = "fruitDescription";
fruitsDescriptionBox.placeholder = "Fruit Description";
fruitsDescriptionBox.required = "true";
form.insertBefore(fruitsDescriptionBox, form.lastElementChild);
let fruitItem = document.getElementsByClassName('fruit');
let fruitList = document.querySelector('.fruits');

 for(let i=0;i<fruitItem.length;i++){
     let editButton = document.createElement('button')
     let editButtonText = document.createTextNode('Edit');
     editButton.appendChild(editButtonText);
     editButton.className = "edit-btn";
     fruitItem[i].appendChild(editButton)
     
}

form.addEventListener('submit',function(event){
    event.preventDefault()
    let fruitToAdd = document.getElementById('fruit-to-add');
    let newFruit = document.createElement('li');
    let newFruitName = document.createTextNode(fruitToAdd.value);
    newFruit.appendChild(newFruitName);
    newFruit.className = 'fruit';

     // Adding Paragraph
    fruitsDescriptionBox.id= 'fruitdes'
    let fruitDescription = document.getElementById('fruitdes')
    let Paragraph = document.createElement('p')
    let paragraphText = document.createTextNode(fruitdes.value);
     Paragraph.style.fontStyle = 'italic'
     Paragraph.appendChild(paragraphText);
     newFruit.appendChild(Paragraph);
    
     //Adding edit button
    
       
     let editButton = document.createElement('button')
     let editButtonText = document.createTextNode('Edit');
     editButton.appendChild(editButtonText);
     editButton.className = "edit-btn";
     
   
    //Adding Delete button
    let deletebtn = document.createElement('button')
    let deletebtnText = document.createTextNode('x');
    deletebtn.appendChild(deletebtnText)
    deletebtn.className="delete-btn";
   

    //Adding new fruits with pargraph description
    
     newFruit.appendChild(deletebtn);
      newFruit.appendChild(editButton)
    fruitList.appendChild(newFruit)
   

})

//Adding eventListener to delete list while clicking on the list
fruitList.addEventListener('click',function(event){
    if(event.target.classList.contains('delete-btn')){
        let fruitsToDelete = event.target.parentElement;
        fruitList.removeChild(fruitsToDelete);
    }
})

//Using algo to filter list according to name or discription

let Filter = document.getElementById("filter")

Filter.addEventListener('keyup',function(event){
   
      for(let i=0;i<fruitItem.length;i++){
         let searchText = event.target.value.toLowerCase()
        let fruitSearch = fruitItem[i].firstChild.textContent.toLowerCase();
           let fruitPara = fruitItem[i].firstElementChild.textContent.toLowerCase();

        if(fruitSearch.indexOf(searchText)==-1 && fruitPara.indexOf(searchText) === -1){
        
            fruitItem[i].style.display="none";
        }
        else{
            fruitItem[i].style.display = "flex"
        }
        }
    }
)
