// Typing para versão pt-br
var app = document.getElementById('typed-output');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 40,
});

typewriter
  .pauseFor(500)
  .typeString('Olá, eu sou Matheus Pereira')
  .pauseFor(300)
  .deleteChars(30)
  .typeString('Desenvolvedor Front-end')
  .pauseFor(300)
  .deleteChars(30)
  .typeString('Desenvolvedor Back-end')
  .pauseFor(300)
  .deleteChars(30)
  .typeString('Desenvolvedor Full-Stack')
  .pauseFor(1000)
  .start();

// Typing for english version

var app = document.getElementById('typed-outputUS');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 40,
});

typewriter
  .pauseFor(500)
  .typeString("Hi, i'm Matheus Pereira")
  .pauseFor(800)
  .deleteChars(30)
  .typeString("I'm Front-end Developer")
  .pauseFor(800)
  .deleteChars(30)
  .typeString("I'm Back-end Developer")
  .pauseFor(800)
  .deleteChars(30)
  .typeString("I'm Full-Stack Developer")
  .pauseFor(1000)
  .start();