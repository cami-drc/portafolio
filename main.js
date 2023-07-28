let app = document.getElementById('typewriter');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(1000)
  .typeString('Camila del Río Castro')
  .pauseFor(300)
  .deleteChars(7)
  .start();