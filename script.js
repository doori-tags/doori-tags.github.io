// Simple script for basic interactions (can be expanded later)
document.addEventListener('DOMContentLoaded', function() {
    // Add any simple interactive features here if needed
    console.log('Website loaded successfully');
    
    // Example: Add a hover effect to the logo
    const logo = document.querySelector('.logo');
    if(logo) {
        logo.addEventListener('mouseover', () => {
            logo.style.opacity = '0.8';
        });
        logo.addEventListener('mouseout', () => {
            logo.style.opacity = '1';
        });
    }
});
