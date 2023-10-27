document.addEventListener("DOMContentLoaded", function() {
    let sonido = document.getElementById("gameSound");
    let reproduccionesRestantes = 10; // Establece la cantidad de veces que deseas reproducir el sonido
  
    function reproducirSonido() {
      sonido.currentTime = 0; // Reinicia la reproducción desde el principio
      sonido.play();
      reproduccionesRestantes--;
  
      if (reproduccionesRestantes > 0) {
        setTimeout(reproducirSonido, sonido.duration * 1000); // Espera la duración del sonido antes de la siguiente reproducción
      }
    }
  
    // Llama a la función para iniciar la primera reproducción
    reproducirSonido();
  });
  

