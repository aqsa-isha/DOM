// DOM: Document Object Model
// The Musketeeers of Web development
// HTML, CSS, JS

// <style> tag connects with html
// <script> tag connents with css

alert("Hello")

console.log("Hello from JS");
// JS-> readability, modular divide into multiple files
// Browser Caching: reload with changes


// Window Object: The window object represents an open window 
// in a browser. It is browser's object not javaScripts & is automatically created by browser.
// Is it a global object with a llot of properties and methods.
// window object is a global object with a lot of properties and methods.
// The window object represents an open window in a browser.

// window
console.log(window)

document.write(window)


window.console.log("hello")
window.alert("Hello from window")



// DOM: When a web page is loaded, the browser creates a 
//  Document Object model (DOM) of the page.

// HTML -> we can access html in js
// html element -> js(object) -> document

// window.document
console.log(window.document)


console.log(document.body)

// To access html in JS is called DOM.
// DOM: How the browser understands it
console.dir(document.body)


console.log(document.head)

console.dir(document.body.childNodes[2])


// dynamically we can make changes

// document.body.style.background="green"
// document.body.childNodes[3].innerText = "Abcsd"



// dynamic changes or dynamic manipulation: DOM



// DOM Manipulation:
// Selecting with id   
// document.getElementbyId("myId")

// Selecting with class
// document.getElementByclassName("myClass")

// // Selecting with tag
// document.getElementByTagName('properties')




// <!DOCTYPE html>
// <html>
// <head>
//   <title>DOM Example</title>
// </head>
// <body>

//   <h1 id="myId">Hello!</h1>
//   <p class="myClass">I am paragraph one.</p>
//   <p class="myClass">I am paragraph two.</p>
//   <div>Just a div!</div>

//   <script>
//     // Select by ID
//     const heading = document.getElementById("myId");
//     heading.textContent = "Hello from JavaScript!";

//     // Select by Class
//     const paragraphs = document.getElementsByClassName("myClass");
//     paragraphs[0].textContent = "Paragraph 1 changed!";
//     paragraphs[1].textContent = "Paragraph 2 changed!";

//     // Select by Tag Name
//     const divs = document.getElementsByTagName("div");
//     divs[0].textContent = "Div content changed!";
//   </script>

// </body>
// </html>
