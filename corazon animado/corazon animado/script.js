document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        body.appendChild(particle);

        const size = Math.random() * 2 + 1 + 'px';
        const duration = Math.random() * 5 + 3 + 's';
        const delay = Math.random() * 2 + 's';
        const xPosition = Math.random() * 100 + 'vw';
        const color = hsl(${Math.random() * 360}, 100%, 80%);

        particle.style.width = size;
        particle.style.height = size;
        particle.style.left = xPosition;
        particle.style.backgroundColor = color;
        particle.style.animationDuration = duration;
        particle.style.animationDelay = delay;

        setTimeout(() => {
            particle.remove();
        }, parseFloat(duration) * 1000 + 2000);
    }

    setInterval(createParticle, 50);
});