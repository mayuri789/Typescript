var array1 = [1, 4, 8, 9, 5];
// for(let i=0;i<array1.length;i++){
//     console.log("length of Arr is "+array1[i])
// }
// array1.forEach(element => {
//     console.log("value is"+element)
// })
// array1.forEach((value,i) =>{
//     console.log("2nd for each loop value is  "+value+"  whose index is  "+i)
// })
var arr2 = [10, 20, 30, 40];
console.log("value of arr is " + arr2);
console.log("print array using join function " + arr2.join(" "));
console.log("print array using join function " + arr2.join(" # "));
var arr3 = [];
//using LIFO Principal
console.log("value of arr3 before push operation" + arr3);
arr3.push(89);
arr3.push(90);
arr3.push(12);
arr3.push(29);
arr3.push(14);
arr3.push(16);
console.log("value of arr3 after push operation" + arr3);
var temp1 = arr3.pop();
console.log("temp1 poped value is" + temp1);
console.log(" now the new array is  " + arr3);
