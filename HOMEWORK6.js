document.addEventListener('DOMContentLoaded', function() {
    const lines = document.querySelectorAll('.line');
    lines.forEach((line, index) => {
    
        setTimeout(() => {
            line.style.animation = `slideFadeIn 1s ease-out ${index}s`;
        }, 1000 * index);
    });
});
