// function shaam(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             const secscess = false

//             if(secscess){
//                 resolve("comaplted taskess")
//             }else{
//                 reject("error failed ")
//             }
//         },1000)
//     })
// }

// shaam()

// .then(data => console.log("user data", data))
// .catch(error => console.log("error", error))

// 1: Promise for Student Data

function nimco(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({name:"nimco",age:23})
        },2000)
    })
}

nimco()
.then((student)=>{
    console.log("student Name:"  + student.name)
    console.log("Student Age: " + student.age)
})

//  2: Promise for Login

function loginUser(username){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(username === "admin"){
                resolve("login successfull")
            }else{
                reject("invalid username")
            }
        }, 2000)
    })
}

loginUser()

.then((message)=>{
    console.log(message)
})
.catch((error)=>{
    console.log(error)

})

// 3: Promise for Product

function getProduct(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("product loadded seccssfully")

            },2000);
    })
}

getProduct()
.then((message)=>{
    console.log(message)
})
.catch((error)=>{
    console.log("error:"+error)
})

// 4: Promise for Server Request

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully");
        }, 3000);
    });
}

// Call the function
fetchData()
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log("Error: " + error);
    });





