/* data =[2,4,6,8,10];
const calculatedoubledata=function (data){
    var output=[];
    for(let i=0;i<data.length;i++){
        output.push(data[i]*2);
    }
    return output;
}
const calculatehalf=function (data){
    var output=[];
    for(let i=0;i<data.length;i++){
        output.push(data[i]/2);
    }
    return output;
}
const calculateaddten=function (data){
    var output=[];
    for(let i=0;i<data.length;i++){
        output.push(data[i]+10);
    }
    return output;
}
console.log(calculatedoubledata(data));
console.log(calculatehalf(data));
console.log(calculateaddten(data)); 

data = [2,4,6,8,10];

function doubleData(data){
    var ans = data*2;
    return ans;
}

function halfData(data){
    var ans = data/2;
    return ans;
}

function addTen(data){
    var ans = data+10;
    return ans;
}


const calData = function(data, callback){
    const output=[];
    for(let i=0;i<data.length;i++){
        output.push(callback(data[i]));
    }
    return output;

}

console.log(calData(data,doubleData));
console.log(calData(data,halfData));
console.log(calData(data,addTen)); */
// circle = [2,9,16,42,71];
// const pi = 3.14;

// function radiusCalc(circle){
//   radius = circle/2;
//   return radius;
// }
// function circumferenceCalc(circle){
//   circumference = 2*pi*circle;
//   return circumference;
// }
// function areaCalc(circle){
//   area = pi*circle*circle;
//   return area;
// }



/*console.log(circle.map(radiusCalc));
console.log(circle.map(circumferenceCalc));
console.log(circle.map(areaCalc));*/

/*Array.prototype.mapp=function(logic){
    var output=[];
    for(let i=0;i<this.length;i++){
        output.push(this[i]);
    }
    return output;
}
console.log(data.mapp(doubledData));
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function filterOdd(numbers) {
  const output = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) { 
      output.push(numbers[i]); 
    }
  }
  return output;
}

console.log(filterOdd(numbers));
 }*/



 const users=[
    {firstName:"Pratiyush",lastName:"Ray",age:25},
    {firstName:"Galav",lastName:"Mongia",age:22},
    {firstName:"Gaurav",lastName:"Verma",age:20},
    {firstName:"Gurkaran",lastName:"Singh",age:29},
    {firstName:"Himanshu",lastName:"Mehta",age:40},
 ]

const FullName=users.map((user)=>{ user.firstName+" "+user.lastName});
//Task FIlter Out People ABove age 23 using fullName
const filteredFullNames = users
  .filter((user) => user.age <= 23)
  .map((user) => `${user.firstName} ${user.lastName}`);

console.log(filteredFullNames);


 

