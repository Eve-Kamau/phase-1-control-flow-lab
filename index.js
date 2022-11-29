
function scuberGreetingForFeet(rideMiles){
  // Write your code here!
  
if(rideMiles <= 400){
  return "This one is on me!";
} 
else if(rideMiles > 2500){
  return "No can do.";
}
else {
  return "I will gladly take your thirty bucks.";
} 
}
console.log(scuberGreetingForFeet(1300));

let usCity = 'NYC';
function ternaryCheckCity (usCity){
  // Write your code here!
return usCity === 'NYC'?'Ok, sounds good.' : 'No go.'
}
console.log(usCity(Nairobi));


function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip){
    case 'generous':
    return 'Thank you so much.'
    case 'not as generous':
    return 'Thank you.'
    default:
      return 'Bye.'
  }
}