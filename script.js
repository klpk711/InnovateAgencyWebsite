document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default jump behavior

        const targetId = this.getAttribute('href'); // Get the href attribute (e.g., "#services")
        const targetElement = document.querySelector(targetId); // Select the target section

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - document.querySelector('.navbar').offsetHeight, // Scroll to element, accounting for fixed navbar height
                behavior: 'smooth' // Smooth scroll animation
            });
        }
    });
});

// Optional: Add a simple form submission handler (for demonstration)
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent actual form submission

    // In a real application, you would send this data to a server
    alert('Thank you for your message! We will get back to you soon.');

    // Clear the form
    this.reset();
});
