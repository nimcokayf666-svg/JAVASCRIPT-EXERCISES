function shaam(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const secscess = false

            if(secscess){
                resolve("comaplted taskess")
            }else{
                reject("error failed ")
            }
        },1000)
    })
}

shaam()

.then(data => console.log("user data", data))
.catch(error => console.log("error", error) )