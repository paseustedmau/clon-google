const form = document.getElementById("search-form");
const input = document.getElementById("search-input");
const clearBtn = document.getElementById("clear-btn");
const voiceBtn = document.getElementById("voice-btn");
const appsBtn = document.getElementById("apps-btn");
const appsMenu = document.getElementById("apps-menu");

// Mostrar el botón de borrar solo cuando hay texto
input.addEventListener("input", () => {
  clearBtn.hidden = input.value.length === 0;
});

clearBtn.addEventListener("click", () => {
  input.value = "";
  clearBtn.hidden = true;
  input.focus();
});

// Redirigir a Google con el texto del usuario como query
function search() {
  const query = input.value.trim();

  // No buscar si la barra está vacía (como hace Google)
  if (query === "") {
    input.focus();
    return;
  }

  window.location.href = `https://google.com/search?q=${encodeURIComponent(query)}`;
}

// Se dispara con Enter y con cualquiera de los dos botones
form.addEventListener("submit", (event) => {
  event.preventDefault();
  search();
});

// Menú de aplicaciones
appsBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  const isOpen = !appsMenu.hidden;
  appsMenu.hidden = isOpen;
  appsBtn.setAttribute("aria-expanded", String(!isOpen));
});

document.addEventListener("click", (event) => {
  if (!appsMenu.hidden && !appsMenu.contains(event.target)) {
    appsMenu.hidden = true;
    appsBtn.setAttribute("aria-expanded", "false");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !appsMenu.hidden) {
    appsMenu.hidden = true;
    appsBtn.setAttribute("aria-expanded", "false");
    appsBtn.focus();
  }
});

// Búsqueda por voz (Web Speech API, disponible en Chrome y Edge)
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
  const recognition = new SpeechRecognition();
  recognition.lang = "es-MX";
  recognition.interimResults = false;

  voiceBtn.addEventListener("click", () => recognition.start());

  recognition.addEventListener("start", () => voiceBtn.classList.add("is-listening"));
  recognition.addEventListener("end", () => voiceBtn.classList.remove("is-listening"));

  recognition.addEventListener("result", (event) => {
    input.value = event.results[0][0].transcript;
    clearBtn.hidden = false;
    search();
  });
} else {
  voiceBtn.title = "Tu navegador no admite la búsqueda por voz";
  voiceBtn.disabled = true;
}
