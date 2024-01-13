///Promise

console.log("Person1 show tickets")
console.log("Person2 show tickets")

let wifeBringingTics = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('Tickets')
    },3000)
})

let getPopcorn = wifeBringingTics.then((t)=>{
    console.log("Husband:We should go in");
   console.log("Wife:No i'm hungry")
   return new Promise((resolve,reject)=>{
    resolve(`${t} popcorn`)
   })

})

let getButter = getPopcorn.then((y)=>{
    console.log('Husband:I have got you popcorn')
    console.log('Husband:Now we should go in');
    console.log('Wife:No i want butter on my popcorn');
   return new Promise((resolve,reject)=>{
    resolve(`${y} butter`)
   })
})

let getColdrink = getButter.then((x)=>{
    console.log('Husband:I have got you butter')
    console.log('Husband:Go in now');
    console.log('Wife:I want colddrinks');
    
    return new Promise((resolve,reject)=>{
    console.log("Husband:Here is your colddrinks");
    console.log("Husband:Anything else??");
    console.log("Wife:No Thankyou we are getting late");

        resolve(`${x} Coldrinks`)
    })
})
getColdrink.then((x)=>console.log(x))

console.log("Person4 show tickets")
console.log("Person5 show tickets");

