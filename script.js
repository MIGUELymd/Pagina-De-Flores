document.addEventListener('DOMContentLoaded', () => {
    const messages = [
        "te amo señorita, eso nunca va cambiar",
        "eres lo mejor que me ha pasado karina. ✨",
        "Siempre serás mi flor favorita, morada, verde, plateda, simple seras mi hermosa flor que voy a cuidar y amar. 💛",
        "Auiero tocarte hasta hacerte venir, y luego grites mi nombre",
        "Amo tu cuerpo es lo mas bello que h evisto, y gracias por querer entregarmelo a mi mi señorita",
        "Cada día a tu lado es como un hermoso campo de tulipanes. 😊",
        "Solo te diré una cosa: gracias por existir y querer compartir tu vida conmigo. 🥰",
        "Ante mis ojos siempre seras perfecta",
        "Si te seintes mal solo dime, mi vida es un desastre pero puedo intentar ayudarte",
        "Quiero que sepas que solo seremos nosotros, nunca pensare en engañarte, eres lo mejore, y diferente y como tu nunca encontare a otra",
        "Amor te adamo",
        "No es que quiera solo lo que tu sabes es que eres la unica que me provoca",
        "Confia en el tiempo de Dios es perfecto y el sabe cuando no pondra de frente amor",
        "Quiciera ofrecerte fortunas que todavia no tengo, pero eso seria ilucionarte, asi que mejor te ofrezco estos ojos cansados, que solo te miraran a ti.",
        "Te dedicare mil y una de poesia y canciones, solo para expresarte un poco de lo que siento, mientras que no puedo decirtelo yo mismo amor.",
        "quiero teta (siempre quiero las tuyas)",
        "Eres el amarillo de mi vida. 🌼"
    ];

    const messageButton = document.getElementById('messageButton');
    const messageContainer = document.getElementById('messageContainer');

    messageButton.addEventListener('click', () => {
        // Selecciona un mensaje aleatorio
        const randomIndex = Math.floor(Math.random() * messages.length);
        messageContainer.textContent = messages[randomIndex];
    });

    // --- Generador de flores ---
    const flowerContainer = document.getElementById('flowerContainer');
    const numberOfFlowers = 70; // ¡Puedes cambiar este número a tu gusto!

    for (let i = 0; i < numberOfFlowers; i++) {
        const flower = document.createElement('div');
        flower.textContent = '🌼'; // Puedes cambiar este emoji si quieres
        flower.classList.add('flower');

        // Posición aleatoria
        const leftPosition = Math.random() * 100;
        const animationDuration = Math.random() * 10 + 10; // Duración de 10 a 20 segundos
        const animationDelay = Math.random() * 5; // Retraso de 0 a 5 segundos

        flower.style.left = `${leftPosition}vw`;
        flower.style.animationDuration = `${animationDuration}s`;
        flower.style.animationDelay = `${animationDelay}s`;
        
        flowerContainer.appendChild(flower);
    }
});