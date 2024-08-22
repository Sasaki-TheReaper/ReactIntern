// let firstname = "Anjan";
// let lastname = "khadka";

// let intro = `My name is `+ `${firstname} ${lastname}`;
// console.log(intro);

// const showName = (n) =>{
//     let name = n;
//     let address = "urlabari";
//     let asd = `My name is ${name}` + ` and address is ${address}`;
//     return asd;

// }
// console.log(showName("Anjan"));

//default parameters
function mul(a,b){
    c = a*b;
    return c;
}
console.log(mul(4,5));

//rest parameters
function mul(...c){
    let prod = 1;
    for (let i = 0; i < c.length; i++) {
        prod *= c[i];
    }
    return prod;
}
console.log(mul(2,3,2,4));

//spread parameters
const sumN= (...numbers) => {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}
const array = [1, 2, 3, 4, 5];
console.log(sumN(...array));

const[one,two,,four] = array;
console.log(one,two,four);

let intro = {
    "fname" : "anjan",
    "lastname" : "khadka",
    "address" : "urlabari"
}
const {fname,lastname} = intro;
const{address} = intro;
console.log (fname,lastname,address);
const intr = `Hello. I am  ${fname} ${lastname}`+ ` and i live in ${address}`; //interpolition
console.log(intr);
