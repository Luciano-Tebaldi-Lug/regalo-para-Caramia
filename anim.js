// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "If I could begin to be", time: 5},
  { text: "Half of what you think of me", time: 8},
  { text: "I could do about anything", time:11},
  { text: "I could even learn how to love", time: 14 },
  { text: "When I see the way you act", time: 17 },
  { text: "Wondering when I'm coming back", time: 20 },
  { text: "I could do about anything", time: 23 },
  { text: "I could even learn how to love like you", time: 26 },
  { text: "(Like you)", time: 28 },
  { text: "(Love like you)", time: 34 },
  { text: "I always thought I might be bad", time: 41 },
  { text: "Now I'm sure that it's true", time: 43 },
  { text: "Cause I think you're so good", time: 46 },
  { text: "And I'm nothing like you", time: 49},
  { text: "Look at you go", time: 52 },
  { text: "I just adore you", time: 53 },
  { text: "I wish that I knew", time: 54.6 },
  { text: "What makes you think", time: 59 },
  { text: "I'm so special?", time: 62 },
  { text: "If I could begin to do", time: 67 },
  { text: "Something that does right by you", time: 70 },
  { text: "I would do about anything", time: 74 },
  { text: "I would even learn how to love", time: 78 },
  { text: "When I see the way you look", time: 85 },
  { text: "Shaken by how long it took", time: 88 },
  { text: "I could do about anything", time: 92},
  { text: "I could even learn how to love like you", time: 95 },
  { text: "(Love like you)", time:102 },
  { text: "Love me like you", time: 106 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 4
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);