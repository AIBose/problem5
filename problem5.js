/*2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?*/

function check(range){
    x=0
    q=0

    for(let i = 1; i < (range);i++ ){
     let q = x/i
     while (!Number.isInteger(q)){
         x++
     
     
    }
    return x
    console.log(x)

}


const ans = check(11)

console.log(x)
console.log(ans)


