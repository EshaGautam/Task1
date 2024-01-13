//Handling promise using async and await

console.log("Person1 show tickets");
console.log("Person2 show tickets");

let Movie = async () => {
  let wifeBringingTics = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Tickets");
    }, 3000);
  });

  let getPopcorn = new Promise((resolve, reject) => {
    resolve("popcorn");
  });

  let getButter = new Promise((resolve, reject) => {
    resolve("butter");
  });

  let getcolddrinks = new Promise((resolve, reject) => {
    resolve("Colddrinks");
  });

  let Tickets = await wifeBringingTics;
  console.log(`here is ${Tickets}`);
  console.log("Husband:We should go in");
  console.log("Wife:No i'm hungry");

  let popcorn = await getPopcorn;
  console.log(`Husband:I have got you ${popcorn}`);
  console.log("Husband:Now we should go in");
  console.log(`Wife:No i want butter on my ${popcorn}`);

  let butter = await getButter;
  console.log(`"Husband:I have got you ${butter}`);
  console.log("Husband:Go in now");
  console.log("Wife:I want colddrinks");

  let colddrinks = await getcolddrinks;
  console.log(`Husband:Here is your ${colddrinks}`);
  console.log("Husband:Anything else??");
  console.log("Wife:No Thankyou we are getting late");

  return Tickets;
};

console.log("Person4 show tickets");
console.log("Person5 show tickets");

Movie().then((m) => console.log(`Person3:${m}`));
