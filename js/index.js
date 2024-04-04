/*$("button").hover(function() {
    $(this).css('background-color', '#0E445E');
}, function() {
    $(this).css('background-color', 'white');
});


$("button").click(function() {
    $(this).css('background-color', '#092A3A');
    $(this).css('color', 'black');

});*/

/*$("button").hover(function() {
    $(this).addClass('hover-state');
}, function() {
    $(this).removeClass('hover-state');
});

// Add a class on click and make the change permanent
$("button").click(function() {
    $(this).addClass('click-state');
});*/

/*document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('expandableButton');

    button.addEventListener('mouseenter', function() {
        // Create the circle div if it doesn't exist
        let circle = document.createElement('div');
        circle.style.width = '0';
        circle.style.height = '0';
        circle.style.borderRadius = '50%';
        circle.style.background = 'red';
        circle.style.position = 'absolute';
        circle.style.transform = 'translate(-50%, -50%)';
        circle.style.transition = 'width 0.3s, height 0.3s';
        circle.style.left = '50%';
        circle.style.top = '50%';

        this.appendChild(circle);

        // Animate the circle to fill the button
        setTimeout(() => {
            circle.style.width = '200%';
            circle.style.height = '200%';
        }, 10); // Timeout ensures the animation kicks in
    });

    button.addEventListener('mouseleave', function() {
        // Find the circle and remove it from the button
        const circle = this.querySelector('div');
        if (circle) {
            circle.remove();
        }
    });
});*/

$(document).ready(function() {
    $("button").click(function() {
        $(this).css('background-color', '#FACF3A');
        $(this).css('color', '#092A3A');
    });
});