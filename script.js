console.log(" hyyyy this is javascript")

let a = 10;

let b = 5;
 
// let c = "yess";

console.log( a+b+8 )

console.log(typeof a, typeof b, typeof c) 

console.log(a)
{

    let a=22;
    console.log(a)
    
}

 console.log(a)
//  const a1=6;
//   a1+=10 : this is arror because constsnt value cant be change if it is assigned onee time 

let o= {

    name:'harry',
    roll_no : 19,
    class : 9,

}
 console.log(o)
 o.salary="100thousand";
 console.log(o)
 let age= 45;
 if(age>18)
 {
    console.log("you can drive")
 }
 else 
 {
    console.log("you cannot drive")
 }

  let d=12;
  let e=20;
  let f = d > e ? (d-e) : (e-d);
  console.log(f);

  let g=1;

//   console.log(g)
//   console.log(g+1)
//   console.log(g+2) we can use loop instead of it

// for loop
for( let i =0;i<2;i++) {

    console.log(g+i);
}

// functions
function greet(name)
 {
    console.log("hello world"+name);
}
  greet("maham");
  greet("hamad")
// ---------------

  function sum(a,b) {
    
    return a+b
  }
   result1=sum(12,5)
   result2=sum(2,4)
   console.log(" the sum of these num is :",result1)
   console.log(" the sum of these num is :",result2)

//   --------- arrow functions 

const add = (c,d) =>{

    return c+d 
}
console.log( "sum is" ,add(12,7))

// --------strings-------

  let last_name = "jawad"; 
  console.log(last_name.toUpperCase())
   console.log(last_name.lenght)
   console.log(last_name.concat("habib"))
   console.log( last_name.charAt(0))

  //  ----------