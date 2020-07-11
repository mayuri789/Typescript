var objfun={
    fname:"mayuri",
    lname:"mestry",
    rollno: 7,
    fullname:(str:string,str2:string)=>{
        return(str+" "+str2)
    }

}
console.log(`

        First name :: ${objfun.fname}

        Last name :: ${objfun.lname}

        Full name :: ${objfun.fullname(objfun.fname,objfun.lname)}

`)