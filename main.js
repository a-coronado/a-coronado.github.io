let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #e07a5f;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #e07a5f;">Estudio Ingenieria en Administrador de Sistema.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
