let users =  {
    userName: "Prateek",
    lastSeen: [new Date()],
    post: ["POST1"],
  }


function createPost(){
    return new Promise((resolve)=>{
    users.post.push("POST2","POST3")
    resolve(["POST2","POST3"])
    })
}

function updateLastUserActivityTime() {
  return new Promise((resolve) => {
    setTimeout(() =>{;
    let updatedTime=new Date()
      users.lastSeen.push(updatedTime)
      resolve(updatedTime);
    }, 1000);

  })
}

function deleteUser(){
return new Promise((resolve)=>{
    setTimeout(()=>{ if (users.post.length > 0) {
      let postDeleted = users.post.pop();
      resolve(postDeleted);
    }
    },2000)
   
})
}

createPost()
  .then((resolve)=>console.log(resolve))
  .then(()=> updateLastUserActivityTime())
  .then((updatedTime)=>console.log(updatedTime))





Promise.all([createPost(), updateLastUserActivityTime()])
  .then(() => deleteUser())
  .then((postDeleted) => console.log(postDeleted))
 
