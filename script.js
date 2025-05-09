// Function to simulate random butterflies
function randomButterflies() {
    const butterflies = document.querySelectorAll('.butterfly');
    setInterval(() => {
        butterflies.forEach(butterfly => {
            butterfly.style.top = `${Math.random() * window.innerHeight}px`;
            butterfly.style.left = `${Math.random() * window.innerWidth}px`;
        });
    }, 2000);
}

randomButterflies();