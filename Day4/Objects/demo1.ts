//json object
//java script object Notation
//data should be in key & value format
//json use dot notation

var jsonObj = {
    firstname: "Mayuri ",
    lastname: "Mestry",
    id: 1
};

//parsing of a json /retrive the data 

// console.log(`
// first name: ${jsonObj.firstname}
// last name: ${jsonObj.lastname}
// id: ${jsonObj.id}

// `)


//Array of object 
var arrObj =[
        {
            firstname: "Mayuri ",
            lastname: "Mestry",
            id: 1 
        },
        {
            firstname: "omprasad ",
            lastname: "Mestry",
            id: 2 
        },
        {
            firstname: "Noshigandha ",
            lastname: "Nerulkar",
            id: 3 
        }
    ]

    // console.log("0th index data is ---------")
    // console.log("firstname: "+arrObj[0].firstname)
    // console.log("lastname: "+arrObj[0].lastname)
    // console.log("id: "+arrObj[0].id)

    // console.log("********************")

    // for(let i=0;i<arrObj.length;i++){
    //     console.log("First name "+arrObj[i].firstname);
    //     console.log("Last name "+arrObj[i].lastname);
    //     console.log("ID  "+arrObj[i].id);

    // }

    //Json ( industry format )

    var indusjson={
        status: "Success",
        data: [{
                    productname :"redmi mobile",
                    quantity: "3",
                    price:12000},
                {
                    productname :"apple mobile",
                    quantity: "5",
                    price:190000},
                {
                    productname :"samsung mobile",
                    quantity: "10",
                    price:20000 
                }
            ],
        error:"Invalid",
        location:{
            area:"Pune University Road",
            City:"pune",
            pincode: 411007,
            state:"maharashtra"

        }      
    };

    console.log(`
    
    status is: ${indusjson.status}
    error is: ${indusjson.error}
    
    
    `)
    for(let i=0;i<indusjson.data.length;i++){
        console.log(`
        
        product name : ${indusjson.data[i].productname}
        quantity : ${indusjson.data[i].quantity}
        price is : ${indusjson.data[i].price}

        `)
        for(let i=0;i<indusjson.data.length;i++){
            console.log("Area is : "+indusjson.location.area);
            console.log("city is : "+indusjson.location.City);
            console.log("pincode is : "+indusjson.location.pincode);

        }
        
    }
