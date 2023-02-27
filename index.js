//Boton del formulario
let btn = document.getElementById("enviar");
btn.addEventListener("click", () => {
  alert(
    "¡Ups! Ahora mismo no puedo recibir formularios, pero espero poder agregarlos pronto!"
  );
});

//Animacion de secciones "on-scroll"

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("show", entry.isIntersecting);
  });
});

const hiddenEl = document.querySelectorAll(".hidden");
hiddenEl.forEach((el) => observer.observe(el));
