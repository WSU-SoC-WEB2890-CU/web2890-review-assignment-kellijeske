//TODO - Your ES6 JavaScript code (if any) goes here
import 'bootstrap'









// PORTFOLIO BUTTONS FUNCTION

document.addEventListener('DOMContentLoaded', function() {
// Function to filter portfolio items
function filterPortfolio(category) {
    const items = document.querySelectorAll('.portfolio-item');

    items.forEach(item => {
    // Show or hide items based on the filter
    if (category === 'all' || item.getAttribute('data-category') === category) {
        item.style.display = 'block'; // Show the item
    } else {
        item.style.display = 'none';  // Hide the item
    }
    });
}

// Add event listeners to the filter buttons
const buttons = document.querySelectorAll('.btn[data-filter]');

buttons.forEach(button => {
    button.addEventListener('click', function() {
    const category = this.getAttribute('data-filter');  // Get the category from the button's data-filter attribute
    filterPortfolio(category); // Call the filter function
    });
});

// Show all items by default on page load
filterPortfolio('all');
});

