// TODO: Create an array called numbers with values 1 through 5 
let numbers = [1,2,3,4,5]

// TODO: Write a for loop that prints each number in the array 
for(let i = 1; i <=5; i++){
    console.log(i)
}

// TODO: Write a while loop that counts down from 5 to 1 
let countdown = 5; 
while(countdown >= 1){
    console.log(countdown);
    countdown--;
}

// TODO: Create a loop that prints only even numbers from the numbers array 
let numbers = [1,2,3,4,5];
let evenNumbers = [];

for(let i =0; i<numbers.length;i++){
    if(numbers[i]% 2!=1){
        evenNumbers.push(numbers[i]);
    }
}
 console.log("The even numbers are: " + evenNumbers);

// TODO: Create a loop that calculates the sum of all numbers in the array

let sum =0;
let numbers = 5;

for (let i =0; i<=n; i ++){
sum += numbers[i];
}
console.log('The sum of 1 to 5 is:' , sum);