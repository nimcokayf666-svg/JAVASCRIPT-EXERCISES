// 1: Select by ID
document.getElementById("title")
console.log("hellow world")

//  2: Select by Class
const nimco =document.getElementsByClassName("text")

  console.log(nimco)

  //  3: Select by Tag

const sihaam = document.getElementsByTagName("li")

  console.log(sihaam)

//    4: Query Selector

// Select the h1
const heading = document.querySelector("#title");

// Select the first p
const firstParagraph = document.querySelector(".text");

// Select all three p elements
const allParagraphs = document.querySelectorAll(".text");

// Log the selected elements
console.log(heading) 
console.log(firstParagraph)
console.log(allParagraphs)

