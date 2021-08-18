// ****************************CHAPTER 17-20***********************



// Declare a multidimensional array

// You can declare a multi dimensional array in following ways
// let arr = [[]];

let arr = [];

// Declare and initialize array

// arr = [[0,1,2,3],[1,0,1,2],[2,1,0,2]];
// arr.forEach(element => {
//       document.write(element);  
// });

// Write counting from 1 to 10
// for (let i = 1; i < 11; i++) {
//     console.log(i);  
    
// }


// Create table range is given by user as well as number for table
// const num = +prompt("Enter Any Number");
// const range = +prompt("Enter Range");
// for (let index = 1; index <= range; index++) {
//     document.write("<br>"+num + " x "+index+" = "+num*index);
    
// }

// SHow fruits array elements by loop 
// const fruits = ["apple","banana","mango","orange","strawberry"];
// for (let i = 0; i < fruits.length; i++) {
//      document.write(fruits[i]+"<br>");
//      document.write(`Fruit at index ${[i]} is ${fruits[i]}<br>`);

// }



// Generate the following series
// Counting
// document.write("a.<b> Counting</b> <br>");
// for(i=1;i<16;i++){
//     document.write(i+" ");
// }
// // Reverse Counting
// document.write("<br>b. <b>Reverse Counting</b><br> ");
// for(i=10;i>=1;i--){
//     document.write(i+" ");
// }


// // Even Number
// document.write("<br>c. <b>Even Number</b> <br>");
// for(i=0;i<21;i=i+2){
//     document.write(i+" ");
// }


// // ODD Number
// document.write("<br>d. <b>ODD Number</b> <br>");
// for(i=1;i<21;i=i+2){
//     document.write(i+" ");
// }

// // Series
// document.write("<br>e. <b>Series</b> <br>");
// for(i=2;i<21;i=i+2){
//     document.write(i+"k ");
// }


// Conditions checked in array by boolean value solved an issue of repitation

// let A = ['cake','apple pie','cookie','chips','patties'];
// let search = prompt('Search Here!');
// var check = true;
// for (let i = 0; i < A.length; i++) {
//     if(search==A[i]){
//         check=false;
//         document.write(`${search} is <b>available</b> at index ${i} in our bakery.`)
//     }
// }
// if(check==true){
//     document.write(`${search} is not <b>available</b> in our bakery.`)
// }


// checking max number in array

// let Array_Items = [24,53,78,91,12];
// var largest_val = 0;
// document.write(`Array Items: ${Array_Items}`)
// // let Sorted_arr = Array_Items.sort();
// // document.write(`<br>Array Items: ${Sorted_arr}<br>`)
// for (let i = 0; i < Array_Items.length; i++) {
//     if(largest_val<Array_Items[i]){
//         largest_val=Array_Items[i];
//     }
// }
// document.write(`<br>The Largest number is ${largest_val}<br>`)



// // checking min number in array
// var smallest_val = Array_Items[0];
// document.write(`Array Items: ${Array_Items}`)
// // let Sorted_arr = Array_Items.sort();
// // document.write(`<br>Array Items: ${Sorted_arr}<br>`)
// for (i = 0; i < Array_Items.length; i++) {
//     if(smallest_val>Array_Items[i]){
//         smallest_val=Array_Items[i];
//     }
// }
// document.write(`<br>The Largest number is ${smallest_val}<br>`)



// // multiples of 5 uptill range 
// const range = +prompt("Enter the range");
// for (let i = 5; i <= range; i=i+5) {
//     document.write(i+",");
    
// }



// ****************************CHAPTER 21-25***********************
// Take first Name and last name and make full name and welcome user by full name

// let first_name = prompt("Enter First Name");
// let last_name = prompt("Enter Last Name");
// let fullName = first_name +" "+ last_name;
// document.write(`HEllo! Welcome to our website Mr. ${fullName}`)


// // user input about his favorite mobile phone model. Find and display the length of input

// const favMobile = prompt("Enter your Favourite Phone Model");
// document.write(`My favoruite phone is:${favMobile}<br>.Length of string is: ${favMobile.length}`)

// Find index of n in Pakistan

// const word = 'Pakistani';
// document.write(`String: ${word}.<br>Index of 'n':${word.indexOf('n')} `)

// Find last indexof l in hello world

// const str = `Hello World`;
// document.write(`String: ${str}.<br>Last Index of 'l':${str.lastIndexOf('l')}`)

// Find character at 3rd index

// const word = 'Pakistani';
// document.write(`String: ${word}.<br>Character at index 3 :${word.charAt(3)} `);

// Using Concat method concatenate firstname and lastname

// let first_name = prompt("Enter First Name");
// let last_name = prompt("Enter Last Name");
// let fullName = first_name.concat(last_name);
// document.write(`HEllo! Welcome to our website Mr. ${fullName}`)


// Replace hyder to islam

// let city = 'Hyderabad';
// document.write(`City: ${city}<br>After replacement: ${city.replace("Hyder","Islam")} `)


// replace all occurrences

// var message = `Ali and Sami are best friends. They play cricket and football together.`;
// document.write(message+"<br>");
// document.write(message.replace(/and/g,'&'));

// Convert string to Number
// let str = '474';
// document.write(`Value: ${str}<br> Type: ${typeof str}`)
// str = Number(str);
// document.write(`<br>Value: ${str}<br> Type: ${typeof str}`)

// any input to upper case

// let inp = prompt("Enter any word");
// document.write(`User Input: ${inp}<br>Upper case: ${inp.toUpperCase()}`)

// any word to titlecase

// let inp = prompt("Enter any word");
// document.write(`User Input: ${inp}<br>Upper case: ${inp.substr(0,1).toUpperCase()+inp.substr(1)}`)



// Remove dot and convert num to string
// var num=String(35.36);
// document.write(num.replace(".",""))


// prompt if user enters @ ! , .

// let username = prompt("Enter Name");
// if(username.includes('@')){
//     alert("Please Enter a Valid UserName");
// }
// else if(username.includes(',')){
//     alert("Please Enter a Valid UserName");
    
// }
// else if(username.includes('.')){
//     alert("Please Enter a Valid UserName");
  
// }
// else if(username.includes('!')){
//     alert("Please Enter a Valid UserName");
  
// }


// Either user give in uppercase  or lowercase you should be case insensitive like sql and
// find its item and response

// let bakery_Items = ['cake','apple pie','cookie','chips','patties'];
// let inp = prompt("Enter any item");
// inp = inp.toLowerCase();
// let availibility = false;
// for (let i = 0; i < bakery_Items.length; i++) {
//     if(inp==bakery_Items[i]){
//         availibility = true;
//         document.write(`${inp} is <b>available</b> at index ${i} in our bakery`);
//     }
// }

// if(availibility = false){
//      document.write(`We are sorry ${inp} is <b>not available</b> in our bakery`);

//  }

// Palindrome checking
// let word = prompt("Enter your word");
// var check='';
// for (let i = word.length-1; i >= 0 ; i--) {
//     check = check+(word[i]);
// }
// (check==word)? document.write(`${word} is Palindrome`) : document.write(`${word} is not Palindrome`);

// Double soaces checking
// var str = prompt("Enter any senetence");
// for(let i = 0;i<str.length;i++){
//     if(str.slice(i,i+2)=='  '){
//         document.write('Double spaces');
//     }
// }

// Task for head and tails toss

// let Head_User = prompt(`Enter Head User Name`);
// let Tails_User = prompt(`Enter Head User Name`);
// const toss = Math.floor(Math.random() * 2);

// if (toss==1) {
//     document.write(`<b>Heads</b><br>${Head_User} Won the Toss`)
// }
// else {
//     document.write(`<b>Tails</b><br>${Tails_User} Won the Toss`)

// }


// Show every alphabet of string in new line

// var university = "University of Karachi";
// for(let i = 0;i<university.length;i++){
// document.write(university[i].split()+"<br>")
// }

// Display last character of string

// const string = prompt("Enter any word");
// document.write(`${string.charAt(string.length-1)}`);


// find occurrences of any letter in a string
// let string = `the quick brown fox jumps over the lazy dog`;
// let str = string.match(/the/g).length;
// document.write(`The Ocurrence of word 'the' is: ${str}`);