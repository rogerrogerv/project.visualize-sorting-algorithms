/* Example Code
      The following is just some example code for you to play around with.
      No need to keep this---it's just some code so you don't feel too lonely.
*/

// How can we use require here if it's frontend? We can thank webpack.
//const Sort = require("./Sort");

// A link to our styles!
require("./index.css");

const images = ['01.jpg','02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg'];
const appImageSpace = document.querySelector(".app_container");

function createCheesyTitle(slogan) {
  const container = document.createElement("h1");
  const textNode = document.createTextNode(slogan);
  container.appendChild(textNode);
  return container;
}

// const title = createCheesyTitle(sort.returnValue("Re-Engineer Yourself"));
// document.getElementById("title").appendChild(title);

/*
    An simple example of how you can make your project a bit more
    interactive, if you would like.

    In our `index.html` page, we have a short form.
    Here is the code that talks to it.
  */
// function changeTitle(event) {
//   event.preventDefault();
  // console.log('What is an event?', event);
//}

// const form = document.querySelector("form");
// document.addEventListener("DOMContentLoaded", () => {
//   form.onsubmit = changeTitle;
// });

const newDiv = () => document.createElement("div");

const next = () => {
  let counter = 0;
  let pageEl = newDiv();
  let imageEl = document.createElement("img");
  imageEl.src = "./images/" + images[counter];
  pageEl.append(imageEl);
  appImageSpace.append(pageEl);
  counter += 1;
};

let nextButton = document.getElementById("next-button");
nextButton.addEventListener("click", next());
