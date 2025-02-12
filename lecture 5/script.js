/*for(var i=1;i<=6;i++){
   function x(i){ 
    setTimeout(()=>{

        console.log(i);
    },1000);
}
x(i); 
}
function x(){
var a=7;
function y(){
    console.log(a);
    return y;
}
y();


}
var z=x();
console.log(z);
z();
var count =0;

function increment(){
    function f(){
       count++;
    }
    f ();
}
increment();
increment();
increment();



console.log(count);
function counter(){
    var count=0;
    return function increment(){
        count--;
        console.log(count);
    }
}

var counter1=counter();
counter1();
counter1();
counter1();
counter1();
console.log(1);
console.log(sumoftwo(10,5));
function sumoftwo(a,b){
    return a+b;

}
    

setTimeout(()=>{
    console.log(4)
},2000)
var start=1;
var end=1000000000000;
while(start<end){
    start++;
}
   console.log("End");
   setInterval(()=>{
    console.log(9)
},4000);*/
function xyz(){
    console.log(1);
};


var abc = function cdf(){
    console.log(2);
}

xyz();
abc();