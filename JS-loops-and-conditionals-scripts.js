"use strict";
/*
1. Write a JavaScript program that accept two integers and display the larger.Go to the editor 
*/

function displayLarger(){
    let a = prompt("#1?");
    let b = prompt("#2?");
    if (a==="" || b==="") {console.log("Invalid Input")}
    else if (a===b && (a!=="" || b!=="")) {console.log(`${a} === ${b}`)}
    else if (a>b) {console.log(a)}
    else if (b>a) {console.log(b)}
    else console.log("Invalid Input");
}
/* I'd like to use something like this: <input type="number" min="0" step="1"/> as input rather than prompts, not quite sure 
how to tie the HTML input to the JS yet. */

/*
2. Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - 
*/

function tripleProductSign(){
    let a = prompt("This function multiplies 3 numbers and gives the sign of the product (+ or -) \n What is your first number?");
    let b = prompt("Second Number?");
    let c = prompt("Third Number?");
    if ((a*b*c)===0) {console.log(`the product of ${a}, ${b}, & ${c} is 0. \n the sign is neither + or -`)}
    else if ((a*b*c)<0) {console.log("The sign is -")}
    else if ((a*b*c)>0) {console.log("The sign is +")}
    else console.log("ERROR ERROR");
}

/*
3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 
notes:
    https://www.geeksforgeeks.org/javascript-array-sort/
    https://www.w3schools.com/jsref/met_win_alert.asp
*/

function sort3Numbers(){
    let a = prompt("This function orders 3 numbers from smallest to largest.\nThen alerts the browser!\nWhat is your first number?");
    let b = prompt("Second Number?");
    let c = prompt("Third Number?");
    if ((a || b || c)===("" || undefined)) {alert("I think you missed something there")};
    let sortingArray = [a,b,c];
    sortingArray.sort();
    alert(sortingArray);
}

/*
4. Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 
*/

function largestNumber(){
    let a = prompt("This function orders 3 numbers from smallest to largest.\nThen alerts the browser!\nWhat is your first number?");
    let b = prompt("Second Number?");
    let c = prompt("Third Number?");
    let d = prompt("Fourth Number?");
    let e = prompt("Fifth Number?");
    if ((a || b || c || d || e)==="") {alert("I think you missed something there")}; // doesn't work, does JS just assume empty strings = 0?
    let sortingArray = [a,b,c,d,e];
    sortingArray.sort();
    let largestNumber = sortingArray.pop();
    alert(largestNumber);
} // when I input all negatives, it gives the greatest negative, which is the smallest number?  think it is how the sort function works

/*
5. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen. Go to the editor 
Sample Output : 
"0 is even" 
"1 is odd" 
"2 is even" 
---------- 
---------- 
*/

function evenOddIteration(){
    let n=1;
    while(n<16){
        if (n%2===1) {console.log(`${n} is odd`)};
        if (n%2===0) {console.log(`${n} is even`)};
        n++;
    }
}

/*
6. Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade. Go to the editor

Student Name	Marks
David	80
Vinoth	77
Divya	88
Ishitha	95
Thomas	68
The grades are computed as follows :

Range	Grade
<60	F
<70	D
<80	C
<90	B
<100	A
*/

/*
7. Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz". Go to the editor 
*/

/*
8. According to Wikipedia a happy number is defined by the following process : 
"Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers)". 
Write a JavaScript program to find and print the first 5 happy numbers. Go to the editor 
*/

/*
9. Write a JavaScript program to find the armstrong numbers of 3 digits. Go to the editor 
Note : An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371. 
*/

/*
10. Write a JavaScript program to construct the following pattern, using a nested for loop. Go to the editor

*  
* *  
* * *  
* * * *  
* * * * *  

*/

/*
11. Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers. Go to the editor 
*/

/*
12. Write a JavaScript program to sum the multiples of 3 and 5 under 1000. Go to the editor
*/

