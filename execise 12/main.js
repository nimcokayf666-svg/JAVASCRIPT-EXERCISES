 //  1: Async/Await with Student Data
function studentPromise(){
    return new Promise((resolve,reject)=>{
        const student={
            name:"burka",age:24
        }
        resolve(student)
    })
}

async function getStudent(){
    try{
        const student =await studentPromise()

        console.log("student Name",student.name)
        console.log("student age",student.age)
    }catch(error){
        console.log("error:",error)
    }
}
getStudent()

//  2: Async/Await with Login
function loginUser(username){
    return new Promise((resolve, reject) => {
        if (username ==="admin") {
            resolve("login succsesfully")    
        }else{
            reject("invaild username")
        }
    })
}

async function login(){
    try{
        const result = await loginUser("admin")
        console.log(result)
    }catch(error){
        console.log("error:",error)
    }
    
}

login()

//  3: Async/Await with Product
function getProduct(){
    return new Promise((resolve, reject) => {
        const product ={name:"mobel",price:"500"
        }
        resolve(product)
    })
}

async function loadproduct(){
    try{
        const product=await getProduct()
        console.log("product loaded succsesfully")
    }catch(error){
        console.log("error:")
    }
    
}

loadproduct()