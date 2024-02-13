// Wait for the DOM content to load
document.addEventListener("DOMContentLoaded", function() {
    // Display an alert box with the welcome message
    alert("Welcome to LifeStyleShi - Website");
});
// JavaScript for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// JavaScript for filter buttons
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const filterValue = this.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });

        // Toggle active class
        filterBtns.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});

// Additional JavaScript code can be added for more functionality as needed
