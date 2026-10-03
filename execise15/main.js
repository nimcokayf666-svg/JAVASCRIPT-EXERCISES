
const studentform = document.querySelector("#student-form")
const studentname = document.querySelector("#Name")
const emailInput = document.querySelector("#email-Input")
// const courseselect = document.querySelector("#course-select")
const charCount = document.querySelector("#char-Count")
const studentList = document.querySelector("#student-list")
const Name = document.querySelector("#Name")
const SelectedCourse=document.querySelector("#SelectedCourse")
const result = document.querySelector("#result")
const Course=document.querySelector("#Course")
// const item=document.querySelector("#item")

Name.addEventListener("input",function(){
  const totalChars = Name.value.length
  charCount.textContent = `Tirada xarafka: ${totalChars}`
  
})

Course.addEventListener("change",function(){

   result.textContent = "Selected Course: " + Course.value;

   
})

studentform.addEventListener('submit', function(event) {
  event.preventDefault()
  


const student = document.createElement("li"); 
student.textContent = Name.value + " - " + Course.value + "-" + emailInput.value
studentList.appendChild(student)



const deletebuton = document.createElement("button")
deletebuton.textContent = "Delete"
deletebuton.classList.add("delete-btn")
student.appendChild(deletebuton)


deletebuton.addEventListener("click",function(){
    studentList.removeChild(student)
})

Name.value =""
Course.value =""

charCount.textContent =" tirada xarafka:0"
    result.textContent = "Selected Course: None";
})

    