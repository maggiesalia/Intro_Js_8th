// _______________ 1st Exercise 

// var name = prompt("Enter your name: ");
// console.log(name);

// var surname = prompt("Enter your surname: ");
// console.log(surname);

// var birthYear = Number(prompt("Enter your birth year: "));
// var age = 2023 - birthYear;
// console.log("You are " + age + " years old");


// _______________ 2nd Exercise

// var name = "Megi";
// var surname = "Salia";
// var email = "megisalia@gmail.com";
// var age = 20;
// var gender = "F";

// var text = `${name} ${surname} ${email} ${age} ${gender}`;
// console.log(text);


//_______________ 3rd Exercise
// 
// var age = +prompt("Enter your age :");
// if(age >= 18){
//     var name = prompt("Enter your name: ");
//     var surname = prompt("Enter your surname: ");
//     var fullName = `${name} ${surname}`;
//     console.log(fullName);
// }else{
//     console.log("You are underage");
// }

//_______________ 4th Exercise

const num1 = +prompt("Enter the first number: ");
const num2 = +prompt("Enter the second number: ");
const operator = prompt("Choose the operator:  („+“ , “ –„ , “ * “ , “ / “ )");

let result; 

switch (operator) {
    case '+':
        result = num1 + num2;
        break;

    case '-':
        result = num1 - num2;
        break;

    case '*':
        result = num1 * num2;
        break;

    case '/':
    result = num1 / num2;   
    break 
}

console.log("Result = " + result)





