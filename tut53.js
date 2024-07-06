console.log("This is tutorial 53");

function greet(name, greetText = "Greetings from Javascript"){
    let name1 = "Name1";
    console.log(greetText + " " + name);
    console.log(name + " is a good girl");
}

function sum(a,b,c){
    let d = a+b+c;
        return d;
        // This line will never execute (unreachable code)
        // console.log("Function is returned");
}


let name = "Lakshu";
let name1 = "Hima";
let name2 = "Nehuu";
let name3 = "Komal";
let greetText = "Good Morning";
greet(name, greetText);
greet(name1, greetText);
greet(name2, greetText);
// let returnval = greet(name3);
// console.log(returnval)

let returnval = sum(1,2,3);
console.log(returnval);

// console.log(name + " is a good girl");
// console.log(name1 + " is a good girl");
// console.log(name2 + " is a good girl");
// console.log(name3 + " is a good girl");