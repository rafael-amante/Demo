// document.body.children[1].children[0].href = "https://google.com";

//console.dir(document);
// alert();
// window.alert();

let smthsmth = document.getElementById("external-link");
smthsmth.href = "https://google.com";

smthsmth = document.querySelector('p a')
smthsmth.href = "https://academind.com";


// ADD AN ELEMENT
// 1 Create the new element

let newRandomTitle = document.createElement("a");
newRandomTitle.href = "https://google.com";
newRandomTitle.textContent = "This leads to Google!";

// 2 Get access to the parent element that should hold the new element

let firstparagraph = document.querySelector("p");

// 3 Insert the new element into the parent element content

firstparagraph.append(newRandomTitle);

// REMOVE ELEMENTS
// 1. Select the element you need to remove.

let firstH1Element = document.querySelector("h1");

// 2. Remove it! 

firstH1Element.remove();
// firstH1Element.parentElement.removeChild(firstH1Element); // <---- this is just another way of also doing it, and for older browsers.


// MOVE ELEMENTS 

firstparagraph.parentElement.append(firstparagraph);


// innerHTML

console.log(firstparagraph.innerHTML); 

firstparagraph.innerHTML = "Hi! this is <strong>important!</strong>";





