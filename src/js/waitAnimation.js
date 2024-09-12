/* 
    Animation Run Only In View
*/
function checkAnimation(entries, observer) {
    entries.forEach(entry => {
        
        const elem = entry.target;

        // If the element is already animated, skip
        if (elem.classList.contains('animate-slide_right','animate-slide_left', 'animate-slide_down')) return;
        // If the element is in the viewport and contains 'slideRight' class
        if (entry.isIntersecting) {
            elem.classList.remove('animationWait');
            if (elem.classList.contains('slideRight')) {
                elem.classList.add('animate-slide_right');
            }
            else if (elem.classList.contains('slideDown')) {
                elem.classList.add('animate-slide_down');
            }
            else if (elem.classList.contains('slideLeft')) {
                elem.classList.add('animate-slide_left');
            }
            else if (elem.classList.contains('slideLeft2')) {
                elem.classList.add('animate-slide_left2');
            }
            else if (elem.classList.contains('slideRight2')) {
                elem.classList.add('animate-slide_right2');
            }
        }
    });
}

// IntersectionObserver options
let options = {
    root: null, // Observe relative to the viewport
    rootMargin: '0px',
    threshold: 0.3,
};

// Create a4n IntersectionObserver instance
let observer = new IntersectionObserver(checkAnimation, options);

// Select all elements with the class 'animationWait'
document.querySelectorAll('.animationWait').forEach(elem => {
    observer.observe(elem);
});