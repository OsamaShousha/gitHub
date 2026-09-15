console.log("Camp igång");
console.log("Aurora Live");
console.log("Aurora Live");
console.log("Aurora Live");
console.log("Nord Glow");

const eventName = "eget eventnamn ";
let ticketCount = 0;
console.log(eventName);
console.log(eventName);
ticketCount = 10;
console.log(ticketCount);
const isVip = false;
console.log(isVip);
//  eventName = "Nord Glow";

 function totalMinutes(hours, minutes){
      return hours * 60 + minutes;
 }

 console.log(totalMinutes(2, 15));

 console.log(totalMinutes(3,6));

 const isMember = true;
let shipping = 79;

if (isMember === true) {
  shipping = 0;
} else {
  console.log("Ordinarie frakt");
}
console.log(shipping);

const cities = ["Paris", "Stockholm", "Santander"];
console.log(cities[0]);
console.log(cities.length);

const product = { title: "Sängen", stock: 45, inStock: false };
console.log(product.title);
console.log(product.inStock);

for (const city of cities) {
     console.log(city);
}

const tempC = 5;

if (tempC > 0) {
  console.log("varmt");
} else if (tempC >= 10) {
  console.log("ljummet");
} else {
  console.log("kallt");
}
 
  