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
   localStorage.setItem("usersDetail", JSON.stringify(existingUser));

   AddingUser();

}


function AddingUser() {
 let  existingUser = JSON.parse(localStorage.getItem("usersDetail")) || []
   let userList = document.querySelector('ul')
   existingUser.forEach((element, index) => {
      let user = document.createElement('li');
      user.textContent = `Name: ${element.Name}, Email: ${element.Email}, Phone: ${element.Phone}`
      userList.appendChild(user)
   })
}
AddingUser();