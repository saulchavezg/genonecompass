const quotes = [
    `"The world is flat if you believe it is flat." – Albert Einstein`,
    `"If you are first you are not last." – Unknown`,
    `"Education is real" – Malcolm X`,
    `":)" – GenOne Compass`
  ];

const targetElement = document.getElementById("dynamic-quote");  

let curr = 0;

function changeText() {
    targetElement.innerText = quotes[curr];
    curr = (curr + 1) % quotes.length; 
}

setInterval(changeText, 3000); 