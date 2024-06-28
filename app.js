//Write a JavaScript program to get the current date. 
//Expected Output :
//mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

var currentDate = new Date();
var day = currentDate.getDate();
var month = currentDate.getMonth() + 1;
var year = currentDate.getFullYear();


var formatDate1 = month + "-" + day + "-" + year;
var formatDate2 = month + "/" + day + "/" + year;
var formatDate3 = day + "-" + month + "-" + year;
var formatDate4 = day + "/" + month + "/" + year;

console.log("mm-dd-yyyy format: " + formatDate1);
console.log("mm/dd/yyyy format: " + formatDate2);
console.log("dd-mm-yyyy format: " + formatDate3);
console.log("dd/mm/yyyy format: " + formatDate4);