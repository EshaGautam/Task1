
let FormData=document.querySelector('form')
function handleFormSubmit(event) {  

 let existingUser = JSON.parse(localStorage.getItem("usersDetail")) || [];
 
event.preventDefault();
let userName = document.getElementById("username").value;
let userEmail = document.getElementById("email").value;
let userPhone = document.getElementById("phone").value;

   let newUser = {
    Name: userName,
    Email: userEmail,
    Phone: userPhone,
  }
existingUser.push(newUser)
 localStorage.setItem("usersDetail",JSON.stringify(existingUser));

AddingUser();

}


function AddingUser(){
let existingUser = JSON.parse(localStorage.getItem("usersDetail")) || []
   let userList = document.querySelector('ul')
    
    existingUser.forEach((element,index) => {
     let user = document.createElement('li');
     // creating  Delete button And Adding Delete functinality
     let DeleteButton = document.createElement('button');
     let DeleteButtonText = document.createTextNode("X");
     DeleteButton.appendChild(DeleteButtonText);
     DeleteButton.className ="del-btn"
     DeleteButton.addEventListener('click',function(event){
        deleteUser(event,index)
     })
     
     user.textContent = `Name: ${element.Name}, Email: ${element.Email}, Phone: ${element.Phone}`
     user.appendChild(DeleteButton);
     userList.appendChild(user)
    })
}
AddingUser();

 let userList = document.querySelector('ul');

function deleteUser(event,index){
    let existingUser = JSON.parse(localStorage.getItem("usersDetail")) || [];
    existingUser.splice(index,1)
    localStorage.setItem("usersDetail",JSON.stringify(existingUser));
    
     if (event.target.classList.contains("del-btn")) {
    let userToDelete = event.target.parentElement;
    userList.removeChild(userToDelete);
  }
   
}
