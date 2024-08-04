function createWave(event) {
    const element = event.currentTarget;
    const wave = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    wave.style.width = wave.style.height = `${size}px`;
    wave.style.left = `${x}px`;
    wave.style.top = `${y}px`;
    wave.classList.add('wave');

    element.appendChild(wave);

    wave.addEventListener('animationend', () => {
        wave.remove();
    });
}

document.querySelectorAll('[contenteditable="true"], .material-wave').forEach(element => {
    element.addEventListener('click', createWave);
});