// document.addEventListener('DOMContentLoaded', function() {
//   const calendarEl = document.getElementById('planner-calendar');
//   if (!calendarEl) return;

//   const calendar = new FullCalendar.Calendar(calendarEl, {
//     initialView: 'dayGridMonth',
//     selectable: true,
//     editable: true,
//     dateClick: function(info) {
//       const title = prompt('Agregar evento:');
//       if (title) {
//         calendar.addEvent({
//           title: title,
//           start: info.dateStr,
//           allDay: true
//         });
//       }
//     },
//     eventClick: function(info) {
//       if (confirm('¿Eliminar este evento?')) {
//         info.event.remove();
//       }
//     }
//   });

//   calendar.render();
// });

// document.addEventListener('DOMContentLoaded', function() {
//   const calendarEl = document.getElementById('planner-calendar');
//   const formEl = document.getElementById('planner-form');
//   const titleInput = document.getElementById('event-title');
//   const colorInput = document.getElementById('event-color');
//   const categorySelect = document.getElementById('event-category');
//   const saveButton = document.getElementById('save-event');
//   const cancelButton = document.getElementById('cancel-event');
//   const eventModal = document.getElementById('event-modal');
// const overlay = document.getElementById('modal-overlay');
// const modalTitle = document.getElementById('modal-title');
// const modalDate = document.getElementById('modal-date');
// const modalCategory = document.getElementById('modal-category');
// const deleteButton = document.getElementById('delete-event');
// const closeButton = document.getElementById('close-modal');

//   if (!calendarEl) return;

//   let selectedDate = null;

//   const calendar = new FullCalendar.Calendar(calendarEl, {
//     initialView: 'dayGridMonth',
//     selectable: true,
//     editable: true,
//     headerToolbar: {
//       left: 'prev,next today',
//       center: 'title',
//       right: 'dayGridMonth,timeGridWeek,listWeek'
//     },
//     eventClick: function(info) {
//       if (confirm('¿Eliminar este evento?')) {
//         info.event.remove();
//       }
//     },
//     dateClick: function(info) {
//       selectedDate = info.dateStr;
//       formEl.style.display = 'block'; // mostrar formulario
//       titleInput.focus();
//     }
//   });

//   saveButton.addEventListener('click', function() {
//     const title = titleInput.value.trim();
//     const color = colorInput.value;
//     const category = categorySelect.value;

//     if (title && selectedDate) {
//       calendar.addEvent({
//         title: title + (category ? ' (' + category + ')' : ''),
//         start: selectedDate,
//         allDay: true,
//         color: color
//       });

//       // Limpiar y ocultar formulario
//       titleInput.value = '';
//       categorySelect.value = '';
//       selectedDate = null;
//       formEl.style.display = 'none';
//     }
//   });

//   cancelButton.addEventListener('click', function() {
//     titleInput.value = '';
//     categorySelect.value = '';
//     selectedDate = null;
//     formEl.style.display = 'none';
//   });

//   calendar.render();
// });

// let currentEvent = null;

// calendar.setOption('eventClick', function(info) {
//     currentEvent = info.event;

//     // Mostrar info del evento
//     modalTitle.textContent = currentEvent.title;
//     modalDate.textContent = 'Fecha: ' + currentEvent.start.toLocaleDateString();
//     modalCategory.textContent = 'Categoría: ' + (currentEvent.extendedProps.category || 'N/A');

//     // Mostrar modal
//     eventModal.style.display = 'block';
//     overlay.style.display = 'block';
// });

// // Cerrar modal
// closeButton.addEventListener('click', function() {
//     eventModal.style.display = 'none';
//     overlay.style.display = 'none';
// });

// // Cerrar al tocar overlay
// overlay.addEventListener('click', function() {
//     eventModal.style.display = 'none';
//     overlay.style.display = 'none';
// });

// // Eliminar evento desde modal
// deleteButton.addEventListener('click', function() {
//     if(currentEvent) {
//         currentEvent.remove();
//         eventModal.style.display = 'none';
//         overlay.style.display = 'none';
//     }
// });

// calendar.addEvent({
//     title: title,
//     start: selectedDate,
//     allDay: true,
//     color: color,
//     extendedProps: {
//         category: category
//     }
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const calendarEl = document.getElementById("planner-calendar");
//   const formEl = document.getElementById("planner-form");
//   const titleInput = document.getElementById("event-title");
//   const colorInput = document.getElementById("event-color");
//   const categorySelect = document.getElementById("event-category");
//   const saveButton = document.getElementById("save-event");
//   const cancelButton = document.getElementById("cancel-event");

//   // Modal
//   const eventModal = document.getElementById("event-modal");
//   const overlay = document.getElementById("modal-overlay");
//   const modalTitle = document.getElementById("modal-title");
//   const modalDate = document.getElementById("modal-date");
//   const modalCategory = document.getElementById("modal-category");
//   const deleteButton = document.getElementById("delete-event");
//   const closeButton = document.getElementById("close-modal");

//   if (!calendarEl) return;

//   let selectedDate = null;
//   let currentEvent = null;

//   const calendar = new FullCalendar.Calendar(calendarEl, {
//     initialView: "dayGridMonth",
//     selectable: true,
//     editable: true,
//     eventDrop: function () {
//       saveEventsToLocalStorage();
//     },

//     headerToolbar: {
//       left: "prev,next today",
//       center: "title",
//       right: "dayGridMonth,timeGridWeek,listWeek",
//     },

//     dateClick: function (info) {
//       selectedDate = info.dateStr;
//       formEl.style.display = "block";
//       titleInput.focus();
//     },

//     eventClick: function (info) {
//       currentEvent = info.event;

//       modalTitle.textContent = currentEvent.title;
//       modalDate.textContent =
//         "Fecha: " + currentEvent.start.toLocaleDateString();
//       modalCategory.textContent =
//         "Categoría: " + (currentEvent.extendedProps.category || "N/A");

//       eventModal.classList.remove("hidden");
//       setTimeout(() => {
//         const modalContent = document.getElementById("modal-content");
//         modalContent.classList.remove("opacity-0", "translate-y-5", "scale-95");
//         modalContent.classList.add("opacity-100", "translate-y-0", "scale-100");
//       }, 50);

//       //   eventModal.style.display = 'block';
//       //   overlay.style.display = 'block';
//     },
//   });

//   saveButton.addEventListener("click", function () {
//     const title = titleInput.value.trim();
//     const color = colorInput.value;
//     const category = categorySelect.value;

//     if (title && selectedDate) {
//       calendar.addEvent({
//         title: title,
//         start: selectedDate,
//         allDay: true,
//         color: color,
//         extendedProps: {
//           category: category,
//         },
//       });

//       saveEventsToLocalStorage();

//       titleInput.value = "";
//       categorySelect.value = "";
//       selectedDate = null;
//       formEl.style.display = "none";
//     }
//   });

//   cancelButton.addEventListener("click", function () {
//     titleInput.value = "";
//     categorySelect.value = "";
//     selectedDate = null;
//     formEl.style.display = "none";
//   });

//   //   // Modal: cerrar y eliminar
//   //   closeButton.addEventListener('click', () => {
//   //     eventModal.style.display = 'none';
//   //     overlay.style.display = 'none';
//   //   });

//   //   overlay.addEventListener('click', () => {
//   //     eventModal.style.display = 'none';
//   //     overlay.style.display = 'none';
//   //   });

//   //   deleteButton.addEventListener('click', () => {
//   //     if (currentEvent) {
//   //       currentEvent.remove();
//   //       eventModal.style.display = 'none';
//   //       overlay.style.display = 'none';
//   //     }
//   //   });

//   // Mostrar modal

//   // Ocultar modal
//   function closeModal() {
//     const modalContent = document.getElementById("modal-content");
//     modalContent.classList.add("opacity-0", "translate-y-5", "scale-95");
//     modalContent.classList.remove("opacity-100", "translate-y-0", "scale-100");
//     setTimeout(() => eventModal.classList.add("hidden"), 200);
//   }

//   closeButton.addEventListener("click", closeModal);
//   overlay.addEventListener("click", closeModal);
//   deleteButton.addEventListener("click", () => {
//     if (currentEvent) currentEvent.remove();
//     saveEventsToLocalStorage();

//     closeModal();
//   });

//   function saveEventsToLocalStorage() {
//     const events = calendar.getEvents().map((event) => ({
//       title: event.title,
//       start: event.startStr,
//       color: event.backgroundColor,
//       category: event.extendedProps.category,
//     }));

//     localStorage.setItem("plannerEvents", JSON.stringify(events));
//   }

//   // Cargar eventos guardados
//   const storedEvents = JSON.parse(
//     localStorage.getItem("plannerEvents") || "[]"
//   );
//   storedEvents.forEach((e) => {
//     calendar.addEvent({
//       title: e.title,
//       start: e.start,
//       color: e.color,
//       allDay: true,
//       extendedProps: { category: e.category },
//     });
//   });

//   calendar.render();
// });

// // ---------------------------

// document.addEventListener("DOMContentLoaded", () => {
//   const abrirBtn = document.getElementById("abrir-registro");
//   const form = document.getElementById("form-registro");
//   const resumen = document.getElementById("resumen-dia");
//   const resumenContenido = document.getElementById("resumen-contenido");
//   const enviarBtn = document.getElementById("enviar-registro");

//   let animoSeleccionado = null;

//   // Seleccionar ánimo
//   document.querySelectorAll(".emoji-btn").forEach((btn) => {
//     btn.addEventListener("click", () => {
//       document
//         .querySelectorAll(".emoji-btn")
//         .forEach((b) => b.classList.remove("scale-125"));
//       btn.classList.add("scale-125");
//       animoSeleccionado = btn.textContent;
//     });
//   });

//   // Mostrar formulario
//   abrirBtn.addEventListener("click", () => {
//     form.classList.toggle("hidden");
//     resumen.classList.add("hidden");
//   });

//   // Enviar registro
//   enviarBtn.addEventListener("click", () => {
//     if (!animoSeleccionado) {
//       alert("Por favor, seleccioná tu ánimo 😊");
//       return;
//     }

//     const estres = document.getElementById("estres").value;
//     const energia = document.getElementById("energia").value;
//     const actividades = [
//       ...form.querySelectorAll('input[type="checkbox"]:checked'),
//     ].map((c) => c.value);
//     const notas = document.getElementById("notas").value.trim();

//     const registro = {
//       fecha: new Date().toLocaleDateString(),
//       animo: animoSeleccionado,
//       estres,
//       energia,
//       actividades,
//       notas,
//     };

//     let registros = JSON.parse(localStorage.getItem("registros-dia") || "[]");
//     registros = registros.filter((r) => r.fecha !== registro.fecha);
//     registros.push(registro);
//     localStorage.setItem("registros-dia", JSON.stringify(registros));

//     localStorage.setItem("registro-dia", JSON.stringify(registro));

//     form.classList.add("hidden");
//     resumen.classList.remove("hidden");

//     resumenContenido.innerHTML = `
//       <p><strong>Ánimo:</strong> ${registro.animo}</p>
//       <p><strong>Estrés:</strong> ${registro.estres}/10</p>
//       <p><strong>Energía:</strong> ${registro.energia}/10</p>
//       <p><strong>Actividades:</strong> ${
//         registro.actividades.join(", ") || "Ninguna"
//       }</p>
//       <p><strong>Notas:</strong> ${registro.notas || "—"}</p>
//     `;
//   });

//   function mostrarHistorial() {
//     const historialDiv = document.getElementById("historial");
//     const lista = document.getElementById("lista-historial");
//     const registros = JSON.parse(localStorage.getItem("registros-dia") || "[]");

//     if (registros.length === 0) return;

//     historialDiv.classList.remove("hidden");

//     // Ordenar del más reciente al más antiguo
//     const recientes = registros.sort(
//       (a, b) => new Date(b.fecha) - new Date(a.fecha)
//     );

//     // Mostrar los últimos 5
//     lista.innerHTML = recientes
//       .slice(0, 5)
//       .map(
//         (r) => `
//     <div class="p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition">
//       <p><strong>${r.fecha}</strong> — ${r.animo}</p>
//       <p class="text-sm text-gray-600">⚡ Energía: ${r.energia}/10 | 🧠 Estrés: ${r.estres}/10</p>
//     </div>
//   `
//       )
//       .join("");
//   }
//   resumen.classList.remove("hidden");
//   mostrarHistorial();

//   mostrarHistorial();
// });


document.addEventListener("DOMContentLoaded", () => {
  // ---------------- CALENDARIO ----------------
  const calendarEl = document.getElementById("planner-calendar");
  const formEl = document.getElementById("planner-form");
  const titleInput = document.getElementById("event-title");
  const colorInput = document.getElementById("event-color");
  const categorySelect = document.getElementById("event-category");
  const saveButton = document.getElementById("save-event");
  const cancelButton = document.getElementById("cancel-event");

  const eventModal = document.getElementById("event-modal");
  const overlay = document.getElementById("modal-overlay");
  const modalTitle = document.getElementById("modal-title");
  const modalDate = document.getElementById("modal-date");
  const modalCategory = document.getElementById("modal-category");
  const deleteButton = document.getElementById("delete-event");
  const closeButton = document.getElementById("close-modal");

  let selectedDate = null;
  let currentEvent = null;

  if (calendarEl) {
    const calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: "dayGridMonth",
      locale: 'es',
      height: 'auto',
      selectable: true,
      editable: true,
      
      eventDrop: saveEventsToLocalStorage,
      headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,listWeek",
      },
      

       buttonText: {
    today: "Hoy",
    month: "Mes",
    week: "Semana",
    day: "Día",
    list: "Lista",
  },
      dateClick: (info) => {
        selectedDate = info.dateStr;
        formEl.style.display = "block";
        titleInput.focus();
        mostrarTareas();
      },
      eventClick: (info) => {
        currentEvent = info.event;
        modalTitle.textContent = currentEvent.title;
        modalDate.textContent = "Fecha: " + currentEvent.start.toLocaleDateString();
        modalCategory.textContent =
          "Categoría: " + (currentEvent.extendedProps.category || "N/A");

        eventModal.classList.remove("hidden");
        setTimeout(() => {
          const modalContent = document.getElementById("modal-content");
          modalContent.classList.remove("opacity-0", "translate-y-5", "scale-95");
          modalContent.classList.add("opacity-100", "translate-y-0", "scale-100");
        }, 50);
      },
    });

    saveButton.addEventListener("click", () => {
      const title = titleInput.value.trim();
      const color = colorInput.value;
      const category = categorySelect.value;

      if (title && selectedDate) {
        calendar.addEvent({
          title,
          start: selectedDate,
          allDay: true,
          color,
          extendedProps: { category },
        });
        saveEventsToLocalStorage();
        titleInput.value = "";
        categorySelect.value = "";
        selectedDate = null;
        formEl.style.display = "none";
      }
    });

    cancelButton.addEventListener("click", () => {
      titleInput.value = "";
      categorySelect.value = "";
      selectedDate = null;
      formEl.style.display = "none";
    });

    closeButton.addEventListener("click", closeModal);
    overlay.addEventListener("click", closeModal);
    deleteButton.addEventListener("click", () => {
      if (currentEvent) currentEvent.remove();
      saveEventsToLocalStorage();
      closeModal();
    });

    function closeModal() {
      const modalContent = document.getElementById("modal-content");
      modalContent.classList.add("opacity-0", "translate-y-5", "scale-95");
      modalContent.classList.remove("opacity-100", "translate-y-0", "scale-100");
      setTimeout(() => eventModal.classList.add("hidden"), 200);
    }

    function saveEventsToLocalStorage() {
      const events = calendar.getEvents().map((event) => ({
        title: event.title,
        start: event.startStr,
        color: event.backgroundColor,
        category: event.extendedProps.category,
      }));
      localStorage.setItem("plannerEvents", JSON.stringify(events));
    }

    // Cargar eventos guardados
    const storedEvents = JSON.parse(localStorage.getItem("plannerEvents") || "[]");
    storedEvents.forEach((e) => {
      calendar.addEvent({
        title: e.title,
        start: e.start,
        color: e.color,
        allDay: true,
        extendedProps: { category: e.category },
      });
    });

    calendar.render();

    // ----- ✅ LISTA DE TAREAS -----
const tareasKey = "tareas_diarias";
const nuevaTareaInput = document.getElementById("nueva-tarea");
const agregarTareaBtn = document.getElementById("agregar-tarea");
const listaTareas = document.getElementById("lista-tareas");

// Cargar tareas guardadas
let tareas = JSON.parse(localStorage.getItem(tareasKey) || "[]");

// Mostrar tareas
function mostrarTareas() {
  if (!selectedDate) {
    listaTareas.innerHTML = "<p class='text-gray-500'>Seleccioná un día en el calendario</p>";
    return;
  }

  const tareasDelDia = tareas.filter(t => t.fecha === selectedDate);

  listaTareas.innerHTML = tareasDelDia
    .map(
      (t) => `
      <li class="flex justify-between items-center bg-gray-50 border border-gray-200 rounded-lg p-2">
        <span class="flex-1 ${t.completada ? 'line-through text-gray-400' : ''}">${t.texto}</span>
        <div class="flex gap-2">
          <button data-id="${t.id}" class="completar-tarea text-green-500 hover:text-green-700">✔</button>
          <button data-id="${t.id}" class="eliminar-tarea text-red-500 hover:text-red-700">✖</button>
        </div>
      </li>`
    )
    .join('');

  document.querySelectorAll('.completar-tarea').forEach((btn) =>
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id);
      const tarea = tareas.find((t) => t.id === id);
      if (tarea) tarea.completada = !tarea.completada;
      localStorage.setItem(tareasKey, JSON.stringify(tareas));
      mostrarTareas();
    })
  );

  document.querySelectorAll('.eliminar-tarea').forEach((btn) =>
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id);
      tareas = tareas.filter((t) => t.id !== id);
      localStorage.setItem(tareasKey, JSON.stringify(tareas));
      mostrarTareas();
    })
  );
}


// Agregar nueva tarea
agregarTareaBtn.addEventListener('click', () => {
  const texto = nuevaTareaInput.value.trim();
  if (!texto || !selectedDate) return; // ⚠️ agregar validación de fecha
  tareas.push({ id: Date.now(), fecha: selectedDate, texto, completada: false });
  localStorage.setItem(tareasKey, JSON.stringify(tareas));
  nuevaTareaInput.value = '';
  mostrarTareas();
});


mostrarTareas();

  }

  // ---------------- REGISTRO DIARIO ----------------
  const abrirBtn = document.getElementById("abrir-registro");
  const formRegistro = document.getElementById("form-registro");
  const resumen = document.getElementById("resumen-dia");
  const resumenContenido = document.getElementById("resumen-contenido");
  const enviarBtn = document.getElementById("enviar-registro");
  const animoEmojis = document.getElementById("animo-emojis");

let animoSeleccionado = null;

document.querySelectorAll(".emoji-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".emoji-btn").forEach((b) => b.classList.remove("scale-125"));
    btn.classList.add("scale-125");
    animoSeleccionado = btn.dataset.animo; // <-- ahora seguro
  });
});


  abrirBtn.addEventListener("click", () => {
    formRegistro.classList.toggle("hidden");
    resumen.classList.add("hidden");
  });

  enviarBtn.addEventListener("click", () => {
    if (!animoSeleccionado) {
      alert("Por favor, seleccioná tu ánimo 😊");
      return;
    }

    const estres = document.getElementById("estres").value;
    const energia = document.getElementById("energia").value;
    const actividades = [...formRegistro.querySelectorAll('input[type="checkbox"]:checked')].map(
      (c) => c.value
    );
    const notas = document.getElementById("notas").value.trim();

    const registro = {
      fecha: new Date().toLocaleDateString(),
      animo: animoSeleccionado,
      estres,
      energia,
      actividades,
      notas,
    };

    let registros = JSON.parse(localStorage.getItem("registros-dia") || "[]");
    registros = registros.filter((r) => r.fecha !== registro.fecha);
    registros.push(registro);
    localStorage.setItem("registros-dia", JSON.stringify(registros));
    localStorage.setItem("registro-dia", JSON.stringify(registro));

    formRegistro.classList.add("hidden");
    resumen.classList.remove("hidden");

    resumenContenido.innerHTML = `
      <p><strong>Ánimo:</strong> ${registro.animo}</p>
      <p><strong>Estrés:</strong> ${registro.estres}/10</p>
      <p><strong>Energía:</strong> ${registro.energia}/10</p>
      <p><strong>Actividades:</strong> ${
        registro.actividades.join(", ") || "Ninguna"
      }</p>
      <p><strong>Notas:</strong> ${registro.notas || "—"}</p>
    `;

    mostrarHistorial();
  });

  function mostrarHistorial() {
    const historialDiv = document.getElementById("historial");
    const lista = document.getElementById("lista-historial");
    const registros = JSON.parse(localStorage.getItem("registros-dia") || "[]");

    if (registros.length === 0) return;

    historialDiv.classList.remove("hidden");

    const recientes = registros.sort(
      (a, b) => new Date(b.fecha) - new Date(a.fecha)
    );

    lista.innerHTML = recientes
      .slice(0, 5)
      .map(
        (r) => `
      <div class="p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition">
        <p><strong>${r.fecha}</strong> — ${r.animo}</p>
        <p class="text-sm text-gray-600">⚡ Energía: ${r.energia}/10 | 🧠 Estrés: ${r.estres}/10</p>
      </div>
    `
      )
      .join("");
  }

  // Mostrar historial al cargar
  resumen.classList.remove("hidden");
  mostrarHistorial();


//   -------


// --- Notas ---
const notasKey = "notas_generales";
const nuevaNotaInput = document.getElementById('nueva-nota');
const agregarNotaBtn = document.getElementById('agregar-nota');
const listaNotasDiv = document.getElementById('lista-notas');

let notas = JSON.parse(localStorage.getItem(notasKey) || '[]');

function mostrarNotas() {
  listaNotasDiv.innerHTML = notas
    .map((n) => `
      <div class="p-3 rounded-lg bg-gradient-to-br from-yellow-100 via-green-50 to-purple-100 shadow flex justify-between items-center">
        <p class="flex-1 text-gray-800 break-words">${n.contenido}</p>
        <button data-id="${n.id}" class="ml-2 text-gray-700 hover:text-gray-900 font-bold">✖</button>
      </div>
    `)
    .join('');

  // Agregar eventos de eliminar
  listaNotasDiv.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id);
      notas = notas.filter(n => n.id !== id);
      localStorage.setItem(notasKey, JSON.stringify(notas));
      mostrarNotas();
    });
  });
}

// Agregar nueva nota
agregarNotaBtn.addEventListener('click', () => {
  const contenido = nuevaNotaInput.value.trim();
  if (!contenido) return;
  notas.push({ id: Date.now(), contenido });
  localStorage.setItem(notasKey, JSON.stringify(notas));
  nuevaNotaInput.value = '';
  mostrarNotas();
});

// Mostrar notas al cargar
mostrarNotas();

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("login-form");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const mensaje = document.getElementById("login-mensaje");

    mensaje.textContent = "Conectando...";
    mensaje.classList.remove("text-red-500");
    mensaje.classList.add("text-gray-600");

    try {
      const response = await fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        mensaje.textContent = data.mensaje || "Error al iniciar sesión";
        mensaje.classList.add("text-red-500");
        return;
      }

      // Guardar token y usuario
      localStorage.setItem("token", data.token);
      localStorage.setItem("usuarioActual", JSON.stringify(data.usuario));

      mensaje.textContent = "Inicio de sesión exitoso 🎉";
      mensaje.classList.remove("text-red-500");
      mensaje.classList.add("text-green-500");

      // Redirigir después de 1s (por ejemplo al dashboard)
      setTimeout(() => {
        window.location.href = "/mi-dashboard"; // o la página principal de Welltrack
      }, 1000);

    } catch (error) {
      console.error("Error en la conexión:", error);
      mensaje.textContent = "No se pudo conectar con el servidor.";
      mensaje.classList.add("text-red-500");
    }
  });
});

const token = localStorage.getItem("token");

fetch("http://127.0.0.1:8000/api/nota", {
  headers: {
    "Authorization": `Bearer ${token}`,
  },
});

document.getElementById("logout")?.addEventListener("click", async () => {
  const token = localStorage.getItem("token");
  if (!token) return;

  await fetch("http://127.0.0.1:8000/api/logout", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Accept": "application/json",
    },
  });

  localStorage.removeItem("token");
  localStorage.removeItem("usuarioActual");
  alert("Sesión cerrada");
  location.reload();
});


// document.addEventListener("DOMContentLoaded", function () {
//   const notasKey = "notas_generales";
//   const modalNota = new bootstrap.Modal(document.getElementById("modalNota"));
//   const offcanvasNotas = new bootstrap.Offcanvas(document.getElementById("panelNotas"));
//   const guardarNotaBtn = document.getElementById("guardar-nota-btn");
//   const abrirNotaBtn = document.getElementById("abrir-nota-btn");
//   const abrirPanelBtn = document.getElementById("abrir-panel-btn");
//   const listaNotas = document.getElementById("lista-notas");
//   const textarea = document.getElementById("nota-contenido");

//   function cargarNotas() {
//     const notas = JSON.parse(localStorage.getItem(notasKey)) || [];
//     listaNotas.innerHTML = "";

//     if (notas.length === 0) {
//       listaNotas.innerHTML = "<p class='text-muted'>No tenés notas guardadas.</p>";
//       return;
//     }

//     notas.forEach((nota, index) => {
//       const notaEl = document.createElement("div");
//       notaEl.className = "card mb-3 shadow-sm";
//       notaEl.innerHTML = `
//         <div class="card-body">
//           <p class="card-text">${nota}</p>
//           <button class="btn btn-sm btn-outline-danger eliminar-nota" data-index="${index}">Eliminar</button>
//         </div>
//       `;
//       listaNotas.appendChild(notaEl);
//     });

//     document.querySelectorAll(".eliminar-nota").forEach(btn => {
//       btn.addEventListener("click", e => {
//         const i = e.target.getAttribute("data-index");
//         eliminarNota(i);
//       });
//     });
//   }

//   function guardarNota() {
//     const texto = textarea.value.trim();
//     if (!texto) return;
//     const notas = JSON.parse(localStorage.getItem(notasKey)) || [];
//     notas.push(texto);
//     localStorage.setItem(notasKey, JSON.stringify(notas));
//     textarea.value = "";
//     modalNota.hide();
//     cargarNotas();
//   }

//   function eliminarNota(index) {
//     const notas = JSON.parse(localStorage.getItem(notasKey)) || [];
//     notas.splice(index, 1);
//     localStorage.setItem(notasKey, JSON.stringify(notas));
//     cargarNotas();
//   }

//   guardarNotaBtn.addEventListener("click", guardarNota);
//   abrirNotaBtn.addEventListener("click", () => modalNota.show());
//   abrirPanelBtn.addEventListener("click", () => {
//     cargarNotas();
//     offcanvasNotas.show();
//   });
// });

});
