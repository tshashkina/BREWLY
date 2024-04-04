/*$("button").hover(function() {
    $(this).css('background-color', '#0E445E');
}, function() {
    $(this).css('background-color', 'white');
});


$("button").click(function() {
    $(this).css('background-color', '#092A3A');
    $(this).css('color', 'black');

});*/

$("button").hover(function() {
    $(this).addClass('hover-state');
}, function() {
    $(this).removeClass('hover-state');
});

// Add a class on click and make the change permanent
$("button").click(function() {
    $(this).addClass('click-state');
});