//Arrow Function 
var temp1 = function (str1, str2) {
    return (str1 + " " + str2);
};
// console.log(`
// ********************
// value of function is ${temp1("mayuri mestry"," vilas")}`);
var temp2 = function () {
    return (1 + 1);
};
//console.log("*******return type mentioned********" +temp2)
//Optional parameter function 
function mult(a, b, c) {
    console.log("\n        \n        value of A is " + a + "\n        value of B is " + b + "\n        value of C is " + c + "\n        value of A*B*C is " + (a + b * c) + "\n        ");
}
//mult(2,3,8)
var temp3 = function (a, b) {
    console.log("\n        \n        value of A is " + a + "\n        value of B is " + b + "\n        \n        value of A+B is " + (a + b) + "\n        ");
};
//temp3(2,8);
//Default Parameter Function
function mult1(a, b) {
    if (b === void 0) { b = 6; }
    console.log("\n        \n        value of A is " + a + "\n        value of B is " + b + "\n        \n        value of A*Bis " + (a + b) + "\n        ");
}
//mult1();
//Function Constructor
var temp4 = new Function("a1", "a2", "console.log(a1+a2)");
// temp4(7,7)
var temp5 = new Function("b1", "b2", "console.log(b1)\n    console.log(b2)\n    console.log(b1+b2)");
temp5(2, 3);
//Rest Parameter Function 
function myfun() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    console.log("value of item is" + item.join(" "));
}
myfun();
myfun(2, 3);
myfun(1, 3, 5, 6, 8, 9);
