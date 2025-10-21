// Dynamic Operations JavaScript

// Add event listener to ensure DOM is fully loaded before executing scripts
document.addEventListener('DOMContentLoaded', function() {
    
    // Toggle chevron arrow upwards
    document.querySelectorAll('.arrow-toggle').forEach(function(btn) {
        // Event listener for click on the button class arrow-toggle
        btn.addEventListener('click', function() {
            // Select the <use> element within the chevron-icon SVG
            const chevron = this.querySelector('.chevron-icon use');
            const isChevronDown = chevron.getAttribute('href') === '#icon-chevron-down';
            // Toggle the chevron direction based on its current state
            if (isChevronDown) {
                chevron.setAttribute('href', '#icon-chevron-up');
            } else {
                chevron.setAttribute('href', '#icon-chevron-down');
            }
        });
    });

    // Display tooltip on click
    document.querySelectorAll('.custom-tooltip-trigger').forEach(function(tt_trigger) {
        // Event listener for click on the tooltip trigger
        tt_trigger.addEventListener('click', function() {
            // Select the corresponding tooltip and overlay elements
            const tt = this.nextElementSibling;
            const overlay = document.querySelector('.tooltip-overlay');

            // Display the tooltip
            tt.style.visibility = 'visible';
            tt.style.opacity = 1;

            // Overlay the background
            overlay.style.opacity = '1';
            overlay.style.pointerEvents = 'auto';
        });
    });

    // Close tooltip on click
    document.querySelectorAll('.custom-tooltip-close').forEach(function(close) {
        // Event listener for click on the tooltip trigger
        close.addEventListener('click', function() {
            // Select the corresponding tooltip and overlay elements
            const tt = this.parentElement;
            const overlay = document.querySelector('.tooltip-overlay');
            
            // Hide the tooltip
            tt.style.visibility = 'hidden';
            tt.style.opacity = 0;

            // Remove the overlay
            overlay.style.opacity = '0';
            overlay.style.pointerEvents = 'none';
        });
    });

});