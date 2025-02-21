

const users=[
    {firstName:"Pratiyush",lastName:"Ray",age:25},
    {firstName:"Galav",lastName:"Mongia",age:22},
    {firstName:"Gaurav",lastName:"Verma",age:20},
    {firstName:"Gurkaran",lastName:"Singh",age:29},
    {firstName:"Himanshu",lastName:"Mehta",age:40},
    {firstName:"Utkarsh",lastName:"Kohli",age:36},
]
const ans= users.reduce(function(acc,curr){
    if(!acc[curr.age]){
        acc[curr,age]=1;
    }else{
        acc[curr.age]++;
    }
})






reachedRestaurant(function(){

    console.log("I Reached Eagle Motel")
})
.then(TableFinding)
.then(MenuDiscovery)
.then(PriceCheck)
.then(StarterOrder)
.then()
