// Error handling in async awaits


console.log("Person1 show tickets");
console.log("Person2 show tickets");

let Movie = async () => {
  let wifeBringingTics = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Tickets");
    }, 3000);
  });

 let Tickets
try{
 Tickets=await wifeBringingTics;
}
catch(e){
    Tickets="Sad Face"
    
}

  return Tickets;
};

console.log("Person4 show tickets");
console.log("Person5 show tickets");

Movie().then((m) => console.log(`Person3:${m}`));
