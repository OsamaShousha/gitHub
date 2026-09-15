console.log("Camp igång");//Camp igång
console.log("Aurora Live");////Aurora Live
console.log("Aurora Live");////Aurora Live
console.log("Aurora Live");////Aurora Live
console.log("Nord Glow");

const eventName = "eget eventnamn ";
let ticketCount = 0;
console.log(eventName);//eget eventnamn 
console.log(eventName);//eget eventnamn 
ticketCount = 10;
console.log(ticketCount);//
const isVip = false;
console.log(isVip);//false
//  eventName = "Nord Glow";

 function totalMinutes(hours, minutes){
      return hours * 60 + minutes;
 }

 console.log(totalMinutes(2, 15));//17

 console.log(totalMinutes(3,6));//9

 const isMember = true;
let shipping = 79;

if (isMember === true) {
  shipping = 0;
} else {
  console.log("Ordinarie frakt");
}
console.log(shipping); 0

const cities = ["Paris", "Stockholm", "Santander"];
console.log(cities[0]);//Paris
console.log(cities.length);//3

const product = { title: "Sängen", stock: 45, inStock: false };
console.log(product.title);//Sängen
console.log(product.inStock);//false

for (const city of cities) {
     console.log(city);//Paris
     //Stockholm
     //  Santander
}

const tempC = 5;

if (tempC > 0) {
  console.log("varmt");//varmt
} else if (tempC >= 10) {
  console.log("ljummet");//
} else {
  console.log("kallt");//
}
 
const routes = ["Linje 2", "Linje 5", "Linje 8"];
for(const line  of routes){
    console.log("Avgår: ", line);//Avgår  Linje 2
                                 //vgår  Linje 5
                                 //vgår  Linje 8
}

function triple(n) {
  return n * 3;
}
console.log(triple(8));//24
// const triple = (n) => n * 3; 
  

////////////////
//Eget skapande & felsökning
 let count = 0;
function increaseButton(){
         count++;
        document.getElementById("countDisplay").textContent = count;

    }


function decreaseButton() {
    if (count > 0) {
        count--;
        document.getElementById("countDisplay").textContent = count;
    }
}

const task = ["First", "secound", "third", 'forth'];
for(let item of task){
    console.log(item);//First" "secound" "third" 'forth']
}

const obj = {
    title: "learning English", urgency: "high", isOpen: "true"
}

console.log(obj.title);
console.log(obj.urgency);

function addNumbers(a, b) {
    return a + b;
}

console.log(addNumbers(5, 3));//8

 if((obj.urgency === "high")){
    console.log("Yes It is important");
    }
    else if(obj.urgency  === "Medel"){
    console.log("That can wait")
 }else{
    console.log("Is Not important");

    
 }
