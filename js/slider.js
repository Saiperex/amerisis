const button_slider = document.querySelector('.button_slider');
const menu = document.querySelector('.menu');

button_slider.addEventListener('click', function() 
{
    // Toggle 'active' class on button_slider
    this.classList.toggle('active');
    
    // Check if button_slider has 'active' class
    if (this.classList.contains('active')) {
        // If 'active', set menu left to 0
        menu.style.left = '0';
    } else {
        // If not 'active', set menu left to 100%
        menu.style.left = '100%';
    }
});

