// 1. Template Literals

let firstName ="nimco"
let lastName = "Ali"
let age = 21;
 
let message = `my name  $(firstName) $(lastName) and $(age) years old.`
  console.log(message)

// 2. Array Destructuring 

let colors = ["red", "green", "blue"];
let [first, second, third] = colors;

 console.log(first,second)

// 3. Object Destructuring
let car ={make:"tayota",model:"corola",year:2025}
 let {make,model} =car
 console.log(make,model)

//  4. Default Parameters
 function greet(name = "Guest") {
    console.log(`Hello, ${name}`);
}
greet("nimco")

// 5. Spread and Rest
let arr1 = [1, 2, 3];

let arr2 = [...arr1, 4, 5, 6];

console.log(arr2);


function sum(...numbers){
    return numbers.reduce((total,Number) => total+Number,0)
}

console.log(sum(1,2,3,4,))


