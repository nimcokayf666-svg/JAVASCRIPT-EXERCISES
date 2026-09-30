// 1: Change Welcome Message
function updateMessage() {
    // Change h1 using textContent

    const title = document.querySelector("#title")
    title.textContent = "hellow , welcome to my wepsite"

    // Change p using innerHTML
    const message = document.querySelector("#message")
    message.innerHTML = "<b>This message has been updated</b>"

}

//  2: Create a New List
function addStudent() {
    const title = document.createElement("title")
    title.textContent = "studentslist"
    console.log(title)

}

const list = document.querySelector("#list");

const item = document.createElement("li");

item.textContent = "Apple";

list.appendChild(item);

//  3: Remove a List Item

const removeBtn = document.querySelector("#removeBtn");
const myList = document.querySelector("#myList");

removeBtn.addEventListener("click", function () {
   
    if (myList.lastElementChild) {
        myList.removeChild(myList.lastElementChild);
    }
});

//  4: Add Product

const ProdBtn = document.querySelector("#ProdBtn")
const productsDiv = document.querySelector("#products")

 const newp =document.createElement("p")

    newp.textContent = "new product added"

    productsDiv.appendChild(newp)

    //  5: Update Profile

    function updateProfile(){
        const nameEL = document.querySelector("#userName")
        nameEL.textContent = "nimco kayf"


        const descEl=document.querySelector("#userDesc")
        descEl.innerHTML ="Updated profile"

        const newp =document.createElement("p")
        newp.textContent = "Welcome to my updated profile page"

        const container = document.querySelector("#profileContainer");
            container.appendChild(newp)
    }













