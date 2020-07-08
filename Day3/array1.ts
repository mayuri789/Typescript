var arr1:number[]=[10,20]
console.log(`display original array `+arr1)

//splice function
arr1.splice(1,0,30)
console.log("30 data is inserted "+arr1)
arr1.splice(2,0,90)
console.log("90 data is inserted "+arr1)
arr1.splice(1,1)
console.log("Deleted Data "+arr1)
arr1.splice(2,1,80)
console.log("80 is inserted "+arr1)
arr1.splice(1,0,60,90,40,59)
console.log("multiple numbers are inserted "+arr1)
arr1.splice(3,3)
console.log("data is deleted from index 3  : "+arr1)
arr1.splice(0,1)
console.log("data is deleted from index 0  : "+arr1)
arr1.splice(0,3)
console.log("data is deleted from index 0  : "+arr1)


//slice
 var arr2:number[] =[10,20,90.40,30,50,88,44]
var temp1:number[]= arr2.slice(1,3);
console.log("display original array : "+arr2);
console.log("display the copied array :  "+temp1);


//map function 
var arr3=[1,2,3,4,5,6]
var temp2=arr3.map((myvalue)=>{

    return (myvalue*myvalue ) 
})
console.log("original array :  "+arr3)
console.log(`

***********************
square value is ${temp2}
***********************
`)
console.log(" Now the original array is :  "+arr3)

//particular index operation 

var temp3=arr3.map((element,i)=>{
    if(i==2 || i==4){
        return (element *element);

    }
})

console.log("original array :  "+arr3)
console.log(`

***********************
square value is ${temp3}
***********************
`)
console.log(" Now the original array is :  "+arr3)

function  getsquare(element:number){
    return (element * element)

}
 var temp4=arr3.map(getsquare)
 console.log("value of Temp"+temp4)


 
 //tuple
 var arr4=[2,'mayuri',true,3.14]
 console.log("Display the value of tuple  : "+arr4)


