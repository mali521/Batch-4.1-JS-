// var cityToCheck = prompt("Enter City","Your City is :");
// var cleanCity = ["karachi","lahore","quetta","swat","murree"];
// for(var i=0;i<cleanCity.length;i++){
//     if(cleanCity[i] === cityToCheck){
//         alert("Its cleanest city");
//     }
// }

// var cityToCheck = prompt("Enter City","Your City is :");
// var cleanCity = ["karachi","lahore","quetta","swat","murree"];
// var matchFound = "no"
// for(var i=0;i<cleanCity.length;i++){
//     if(cleanCity[i] === cityToCheck){
//         matchFound = "yes";
//         alert("Its cleanest city");
//     }
// }
// if(matchFound === "no"){
// alert("It is not a cleanest city");
// }

// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "]; 
// var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
// var fullNames = [];
// for (var i = 0; i < firstNames.length; i++) {
//     for (var j = 0; j < lastNames.length; j++) {
//         fullNames.push(firstNames[i] + lastNames[j]);
// } }
// console.log(fullNames);

var cityToCheck = prompt("Enter City","Your City is :");
cityToCheck = cityToCheck.toLowerCase();
// cityToCheck = cityToCheck.toUpperCase();
var cleanCity = ["karachi","lahore","quetta","swat","murree"];
var matchFound = "no"
for(var i=0;i<cleanCity.length;i++){
    if(cleanCity[i] === cityToCheck){
        matchFound = "yes";
        alert("Its cleanest city");
    }
}
if(matchFound === "no"){
alert("It is not a cleanest city");
}