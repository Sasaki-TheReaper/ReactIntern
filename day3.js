let cords = {
    "lat" : "87.92",
    "lng" : "72.92",
    "hef" : "82.22"    
}

const{lat} = cords;
const{lng} = cords;
console.log(lat);
console.log(lng);

const array1 = [1,2,3,4,6,7,];
 const [a,b,c] = array1;
 console.log(a,b,c);



const sum = (...x) => {
    let total = 0;
    for (let i = 0; i < x.length; i++) {
        total += x[i];
    }
    return total;
};

console.log(sum(1, 2, 3, 4)); 

const mul = (...y) => {
    let total = 1;
    for (let i = 0; i < y.length; i++) {
        total *= y[i];
    }
    return total;
};

console.log(mul(12, 12)); 

const diff =  (find) =>{ (n%2 === 0? 'even':'odd' )}
console.log(diff(6));




