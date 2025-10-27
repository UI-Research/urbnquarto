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

    // Toggle chart button on 
    document.querySelectorAll('.chart-toggle').forEach(function(btn) {
        btn.addEventListener('click', function() {
            const toggle_button = this.querySelector('.chart-toggle-button use');
            const isButtonOff = toggle_button.getAttribute('href') === '#icon-toggle-off';
            
           // Extract toggleId from the data-toggle-id attribute
            const toggleId = this.dataset.toggleId; 

            // Find relevant chart elements using toggleId
            const chartWithFloorsTargets = document.getElementById('chart-with-floors-targets-' + toggleId);
            const chartWithout = document.getElementById('chart-without-' + toggleId);
            const turnOnText = document.getElementById('turn-on-text-' + toggleId);
            const turnOffText = document.getElementById('turn-off-text-' + toggleId);

            if (isButtonOff) {
                // Turn on floors and targets
                toggle_button.setAttribute('href', '#icon-toggle-on');
                chartWithFloorsTargets.style.display = 'block';
                chartWithout.style.display = 'none';
                turnOffText.style.display = 'inline';
                turnOnText.style.display = 'none';
            } else {
                // Turn off floors and targets
                toggle_button.setAttribute('href', '#icon-toggle-off');
                chartWithFloorsTargets.style.display = 'none';
                chartWithout.style.display = 'block';
                turnOffText.style.display = 'none';
                turnOnText.style.display = 'inline';
            }
        });
    });

});