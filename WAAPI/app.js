var elem = document.getElementsByClassName('box')[0];
// Class returns HTML in form of array thats why location[0] is written after
// document.getElementsByClassName
elem.animate({
    opacity: [0.5, 1],
    transform: ['scale(0.5)', 'scale(1)'],
}, {
    direction: 'alternate',
    duration: 500,
    iterations: Infinity,
});