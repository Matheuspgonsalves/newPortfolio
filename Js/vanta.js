document.addEventListener("DOMContentLoaded", function () {
    VANTA.WAVES({
        el: "#vanta-bg", // O seletor correto para o elemento de fundo
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x161615, // Cor das ondas
        shininess: 20.00, // Brilho das ondas
        waveHeight: 12.00, // Altura das ondas
        waveSpeed: 0.55, // Velocidade das ondas
        zoom: 1.25 // Nível de zoom
    });
});