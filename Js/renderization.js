// scripts.js

// Inicializa AOS quando a página estiver carregada
document.addEventListener("DOMContentLoaded", function() {
    AOS.init({
        duration: 1000, // Duração da animação
        easing: 'ease-in-out', // Efeito de suavização da animação
        once: false, // Permite que a animação aconteça várias vezes
    });

    let lastScrollTop = 0;

    window.addEventListener("scroll", function() {
        let st = window.pageYOffset || document.documentElement.scrollTop; // Posição atual de rolagem

        // Rolando para cima
        if (st < lastScrollTop) {
            // Se rolou para cima, adicione classe para animação de saída
            document.querySelectorAll("section").forEach(section => {
                section.classList.remove('fade-out'); // Remova a classe de fade out
                section.classList.add('fade-in'); // Adicione a classe de fade in
            });
        } else {
            // Rolando para baixo
            document.querySelectorAll("section").forEach(section => {
                section.classList.remove('fade-in'); // Remova a classe de fade in
                section.classList.add('fade-out'); // Adicione a classe de fade out
            });
        }

        lastScrollTop = st <= 0 ? 0 : st; // Para evitar rolagem negativa
    });
});
