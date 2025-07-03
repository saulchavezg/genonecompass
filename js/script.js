document.addEventListener("DOMContentLoaded", () => {
    const quotes = [
        `"The world is flat if you believe it is flat." – Albert Einstein`,
        `"If you are first you are not last." – Unknown`,
        `"Education is real" – Malcolm X`,
        `":)" – GenOne Compass`
    ];

    const targetElement = document.getElementById("dynamic-quote");  

    let curr = 0;

    function changeText() {
        targetElement.classList.add("hero-quote-fade-out"); // Has opacity start at zero

        setTimeout(() => {
            curr = (curr + 1) % quotes.length; // Allows advancement while returning to 0
            targetElement.innerText = quotes[curr];
            targetElement.classList.remove("hero-quote-fade-out"); // Ensures opacity increases over 0.8s
        }, 800); // 800 ms lines up with increase in opacity over 0.8s
    }

    setInterval(changeText, 5000); // Pauses quote for 5 seconds
});