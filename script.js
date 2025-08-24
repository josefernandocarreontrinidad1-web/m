
document.addEventListener('DOMContentLoaded', () => {
    const heartContainer = document.querySelector('.heart-container');
    const totalHearts = 2000;
    const colors = ['#ff006e', '#8338ec', '#3a86ff', '#fb5607', '#ffbe0b'];

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');

        // Posición inicial aleatoria en la parte inferior de la pantalla
        const startX = Math.random() * window.innerWidth;
        const startY = window.innerHeight;
        heart.style.left = `${startX}px`;
        heart.style.top = `${startY}px`;

        // Color aleatorio
        const color = colors[Math.floor(Math.random() * colors.length)];
        heart.style.backgroundColor = color;
        heart.style.setProperty('--heart-color', color);

        // Ajustar el color de los pseudo-elementos
        heart.style.setProperty('--heart-color', color);

        // Añadir el corazón al contenedor
        heartContainer.appendChild(heart);

        return heart;
    }

    // Crear los corazones iniciales y animarlos
    for (let i = 0; i < totalHearts; i++) {
        const heart = createHeart();

        // Calcular el punto de destino
        const targetX = (window.innerWidth / 2) - heart.offsetLeft;
        const targetY = (window.innerHeight / 2) - heart.offsetTop;
        heart.style.setProperty('--target-x', `${targetX}px`);
        heart.style.setProperty('--target-y', `${targetY}px`);

        // Animación de subida y unión
        const animationDelay = Math.random() * 5; // Retraso aleatorio para la animación
        const animationDuration = 5 + Math.random() * 3; // Duración de la animación

        heart.style.animation = `merge ${animationDuration}s ${animationDelay}s forwards, pulse 1s infinite`;

        // Pequeño efecto de destello al final de la animación de unión
        heart.addEventListener('animationend', (e) => {
            if (e.animationName === 'merge') {
                heart.style.animation = 'pulse 1s infinite';
            }
        });
    }
});