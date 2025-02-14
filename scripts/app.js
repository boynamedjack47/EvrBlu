document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navbarLinks = document.querySelector('.navbar-links');

    hamburger.addEventListener('click', function () {
        navbarLinks.classList.toggle('active');
    });
});

/* Scroll to top */
// JavaScript for "Return to Top" button

// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const returnToTopBtn = document.getElementById('returnToTop');

    // Show the button when the user scrolls down 300px or more
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            returnToTopBtn.classList.add('show');
        } else {
            returnToTopBtn.classList.remove('show');
        }
    });

    // Scroll smoothly to the top when the button is clicked
    returnToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});


/* Sliding scale js*/

const slider = document.getElementById("pricing-slider");
const priceDisplay = document.getElementById("price-display");
const prices = ["$30", "$35", "$40"];

slider.addEventListener("input", function () {
  priceDisplay.textContent = prices[this.value];
});

 // Function to send the message when clicking the Book Now button
 function sendMessage() {
    const sliderValue = document.getElementById("pricing-slider").value;
    let message = "Hey! I'm interested in a quote for my ";

    // Create the message based on the pool size selected
    if (sliderValue == 0) {
        message += "small pool to be cleaned by Evrblu!";
    } else if (sliderValue == 1) {
        message += "medium pool to be cleaned by Evrblu!";
    } else if (sliderValue == 2) {
        message += "large pool to be cleaned by Evrblu!";
    }

    // Open the SMS link with the dynamic message
    window.location.href = `sms:602-551-6565?body=${encodeURIComponent(message)}`;
}

slider.addEventListener("input", function () {
    console.log("Slider moved, updating price display");
    priceDisplay.textContent = prices[this.value];
  });
  
  slider.addEventListener("input", function() {
    const value = this.value;
    const max = this.max;
    console.log("Slider moved, updating background", value, max);
    this.style.background = `linear-gradient(to right, skyblue ${value / max * 100}%, #ddd ${value / max * 100}%)`;
  });
  