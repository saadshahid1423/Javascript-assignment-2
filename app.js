// chapter#21-25

// task#1

// var a =prompt("Enter Your First Name")
// var b =prompt("Enter Your Last Name")
// document.write(a + " " + b)

// task#2

// var a =prompt("Enter Your Favorite mobile")
// var b ="My Favorite mobile is:"
// var c ="Length of strings:"
// document.write(b + " " + a + "<br>" + c + " " + a.length)

// task#3

// var a ="Pakistan"
// console.log(a.indexOf("n"))

// task#4

// var a ="Hello World"
// console.log(a.lastIndexOf("l"))

// task#5

// var arr ="Pakistani"
// console.log(arr[3])

// task#7

// var text ="Hyderabad";
// var indexNum = text.indexOf("Hyderabad");
// var firstText = text.slice(0,indexNum);
// var replacingText = "Islamabad";
// var thirdText = text.slice(indexNum+12)
// console.log(firstText + replacingText + thirdText)

// task#8

// var text ="Ali and Sami are best friends. They play cricket and football together.";
// var newText = text.replace(/and/g, "&");
// console.log(newText)

// task #9

// var integerString = "472" 
// var num = Number(integerString);
// document.write(num)

// task#10

// var a =prompt("Enter text")
// var b =a.toUpperCase(a);
// document.write(b)

// task#11

// var a =prompt("Enter Your Text")
// var b =a.slice(0,1)
// var c =a.slice(1)
// b = b.toUpperCase()
// c = c.toLowerCase()
// var a = b + c;
// document.write(a)

// task#12

// var numberAsNumber = 35.36; 
// var numberAsString = numberAsNumber.toString();
// var convert = numberAsNumber*100
// document.write(convert)

// task#13

// var text =prompt("Enter Username!")
// for (var i = 0; i < text.length; i++) { 
//     if (text.charAt(i) === "!") { 
//         alert("Enter a valid username!"); 
//         break; 
//     } 
//     if (text.charAt(i) === ",") { 
//         alert("Enter a valid username!"); 
//         break; 
//     } 
//     if (text.charAt(i) === "@") { 
//         alert("Enter a valid username!"); 
//         break; 
//     } 
//     if (text.charAt(i) === ".") { 
//         alert("Enter a valid username!"); 
//         break; 
//     } 
// }

// task#14

// var orderToCheck = prompt("Enter your order"); 
// orderToCheck = orderToCheck.toLowerCase(); 
// var available = ["cake", "apple pie", "cookie", "chips", "patties"]; 
// var notAvailable = ["pastry" , "cake rusk" , "icecreams" , "bread" , "cold drinks"]
// for (var i = 0; i <= 4; i++) { 
//         if (orderToCheck === available[i]) { 
//         alert(orderToCheck + " " + "Is available in our bakery"); 
//     } 
//         if (orderToCheck === notAvailable[i]) {
//         alert(orderToCheck + " " + "Is not available in our bakery")
//     }
// }    

// task#15

// this task is incomplete can't understand

// task#16

// var sentence ="University of Karachi";
// var chars =sentence.split("");
// console.log(chars)

// task#17

// var name =prompt("enter text")
// var lastChar = name.charAt(name.length - 1);
// document.write(lastChar)

// task#18

// var text ="the quick brown fox jumps over the lazy dog"
// var firstChar = text.indexOf("the");
// console.log(firstChar)

// chapter#26-30

// task#1

// var d =prompt("Enter Number.")
// var roundOff = Math.round(d);
// var a ="round off value:";
// var ceil = Math.ceil(d);
// var b ="ceil  value";
// var floor = Math.floor(d);
// var c ="floor value";
// document.write(a + " " + roundOff  + "<br>" + b + " " + ceil + "<br>" + c + " " + floor )

// task#2

// var d =prompt("Enter Number.")
// var roundOff = Math.round(d);
// var a ="round off value:";
// var ceil = Math.ceil(d);
// var b ="ceil  value";
// var floor = Math.floor(d);
// var c ="floor value";
// document.write(a + " " + roundOff  + "<br>" + b + " " + ceil + "<br>" + c + " " + floor )

// task#3

// var a = prompt("Enter Value")
// var b = Math.abs(a)
// var c ="The absolute value is:"
// document.write(c + " " + b)

// task#4

// var dice =Math.floor(Math.random() * 6) + 1;
// var text ="random dice value is:"
// document.write(text + " " + dice)

// task#5

// var headsuser =prompt("Enter heads username");
// var tailsuser =prompt("Enter tails username");
// var toss =Math.random() * 2;
// var floor =Math.floor(toss)
// if(floor === 0){
//     alert("Heads" + " " + headsuser + " " + "win the toss")
// }else{
//     alert("Tails" + " " + tailsuser + " " + "win the toss")
// }

// task#6

// var random =Math.floor(Math.random() * 100) + 1;
// var text ="random value from 1-100 is:"
// document.write(text + " " + random)

// task#7


// task#8

// var name =prompt("Enter username")
// var a =prompt("Enter a number 1-10")
// var b =Math.floor(Math.random() * 10) + 1;
// if(a === b){
//     alert("Congratulation" + " " + name)
// }else{
//     alert("Try again" + " " + name)
// }

// chapter#31-34

// task#1

// var a =new Date();
// document.write(a)

// task#2

// var a = new Date();
// var b = a.toString("");
// var c = b.slice(4,7);
// var d = "Current Month:"
// document.write(d + " " + c)

// task#3

// var a = new Date();
// var b = a.toString("");
// var c = b.slice(0,3);
// var d = "Current Month:"
// document.write(d + " " + c)

// task#4

// var a = new Date();
// var b = a.toString("");
// var c = b.slice(0,3);
// var d = ["Sat" , "Sun"]
// if(c === d){
//     alert("Its a funday!")
// }else{
//     alert("Its a normal day!")
// }

// task#5


// var a = new Date();
// var b = a.toString("");
// var c = b.slice(9,10);
// var d = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15]
// if(c === d){
//     alert("Last days of the month")
// }else{
//     alert("Fifteen days of the month")
// }

// task#6

// var d =new Date();
// var millsSince = d.getTime();
// var text = "Elasped millisecond since january 1,1970:"
// var d =new Date();
// var currMins = d.getTime();
// var cal = currMins / 1000 * 60 *60
// var textTwo = "Elasped minutes since january 1,1970:"
// document.write(text + " " + millsSince + "<br>" + textTwo + " " + cal)

// task#7

// var a = new Date();
// var b = a.toString("");
// var c = b.slice(17,18);
// var d = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12]
// if(c === d){
//     alert("It's AM")
// }else{
//     alert("It's PM")
// }

// task#8

// var a =new Date();
// var b =a.setMonth(11)
// var c =a.setDate(31)
// document.write(a)

// task#9

// var start = new Date("May 23, 2020");
// var end = new Date();
// var diff = end - start
// var days = 1000 * 60 * 60 * 24
// var last = Math.floor(diff / days)
// document.write(last + " " + "have since 1st Ramadan 2020")

// task#10

// var start = new Date("Jan 1, 2020 00:00:00");
// var end = new Date();
// var diff = end - start
// var days = 1000 
// var last = Math.floor(diff / days)
// document.write(last + " " + "seconds are passed since 1st January 2020")

// task#11

// var d = new Date(); 
// var a = d.setHours(23);
// document.write(d)

// task#12

// var d = new Date(); 
// var a = d.setFullYear(1920);
// document.write(d)

// task#13

// var number =prompt("Enter your age");
// var date = new Date();
// var year = date.getFullYear();
// var birthyear = year - number;
// document.write("your birth year is:" + " " + birthyear)

// task#14

// var a ="Username: "
// var b =prompt("Enter user name")
// var c ="Month: June" 
// var d ="Number of units: "
// var e =prompt("Enter number of units")
// var f ="Charges per unit: "
// var g =16;
// var h ="Net amount payable(within due date): "
// var i =e * g;
// var j ="Late payment surcharge: "
// var k =350;
// var l ="Gross amount payable(after due date): "
// var m =i + k;
// document.write(a + b + "<br>" + c + "<br>" + d + e + "<br>" + f + g + "<br>" + "<br>" + h + i + "<br>" + j + k + "<br>" + l + m )  

// chapter#35-38

// task#1

// var a =new Date();
// document.write(a)

// task#2

// var a = prompt("Enter first name")
// var b = prompt("Enter second name")
// document.write("Welcome " + a + " " + b + " !")

// task#3

// var a = prompt("Enter first number")
// var b = prompt("Enter second number")
// var c = +a + +b;
// document.write(c)

// task#4

// var a = prompt("Enter first number")
// var b = prompt("Enter operator")
// var c = prompt("Enter second number")
// if(b === '+'){
//     alert((+a) + (+c))
// }
// if(b === '-'){
//     alert(a - c)
// }
// if(b === '*'){
//     alert(a * c)
// }
// if(b === '/'){
//     alert(a / c)
// }
// if(b === '%'){
//     alert(a / c * 100 + "%")
// }

// task#5

// var a = prompt("Enter number")
// var b = a*a
// alert(b) 

// tas#6

// var num=prompt("Enter number");
// var fact=1;

// for(var i=num; i>=1; i--){
//  fact = fact * i;
// }
// document.write(fact); 

// task#7

// var a = prompt("Enter first number")
// var b = prompt("Enter Last number")
// var c = a
// var d = b
// for(c=c ; c<d ; c++){
//     console.log(c);
// }

// task#8

// var a = prompt("Enter base value")
// var b = prompt("Enter perpendicular value")
// var c = a*a
// var d = b*b
// var e = c+d
// var value = Math.sqrt( e );
// document.write("Hypotenuse is: " + value );

// task#9

// var a = prompt("Enter width")
// var b = prompt("Enter height")
// var c = a * b;
// alert("Area is: " + c)

// task#10

// var a = prompt("Enter your word")
// var b = "";
// for (var i = a.length - 1 ; i>=0; i--){
//     b += a[i]
// } 

// if (a === b){
//     alert(a + " is a pelindrome word.")
// }else{
//     alert(a + " is not a pelindrome word.")
// }

// task#11

// var sentence = prompt("Enter a sentence")
// var capitalizeString = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();
// var capitalizeWords = (str) => str.split(" ").map(capitalizeString).join(" ");
// console.log(capitalizeWords(sentence));

// task#12

// var str =prompt("Enter sentence")
// var longestWord = (str) => {
//     var strArray = str.split(' ');
//     var sortedStrArray = strArray.sort(
//         (strA, strB) => {
//             return strB.length -
//             strA.length;
//         }
//     );
//     return sortedStrArray[0];
// }
// console.log(longestWord(str));

// task#13

// function countLetters(str) {
//     var tempArr = str.split('');
//     var letters = [];
//     var count = 1;
//     for(let i = 0; i<tempArr.length; i++){
//         if(tempArr[i] === tempArr[i + 1]){
//             count++;
//         }else{
//             var value = `${count}${tempArr[i]}`;
//             letters = [...letters, value];
//             count = 1;
//         }
//     }
//     return letters.join("");
// }
// console.log(countLetters(prompt("Enter sentence") + prompt("Enter word")))

// task#14

// function circumference(a,b,c){
//     alert("circumference of circle is: " + a*b*c)
// }
// circumference(prompt("Enter radius"),3.142,2)

// function circumference(a,b,c){
//     alert("circumference of circle is: " + a*b*a)
// }
// circumference(prompt("Enter radius"),3.142)