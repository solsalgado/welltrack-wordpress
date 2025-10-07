<?php
add_action('wp_enqueue_scripts', function () {

    // Estilo del tema hijo
    wp_enqueue_style(
        'child-style',
        get_stylesheet_uri(),
        ['neve-fse-style']
    );

    // FullCalendar CSS y JS desde CDN
    wp_enqueue_style('fullcalendar-css', 'https://cdn.jsdelivr.net/npm/fullcalendar@6.1.10/index.global.min.css');
    wp_enqueue_script('fullcalendar-js', 'https://cdn.jsdelivr.net/npm/fullcalendar@6.1.10/index.global.min.js', [], null, true);
    wp_enqueue_script('fullcalendar-locale', 'https://cdn.jsdelivr.net/npm/fullcalendar@6.1.10/locales-all.global.min.js', ['fullcalendar-js'], null, true);


    wp_enqueue_script('tailwind', 'https://cdn.tailwindcss.com', [], null, false);

    // Tu script personalizado
    wp_enqueue_script(
        'planner-js',
        get_stylesheet_directory_uri() . '/js/planner.js',
        ['fullcalendar-js'],
        null,
        true
    );
});

// Insertar el calendario al final del contenido
add_filter('the_content', function ($content) {
    if (is_user_logged_in()) { // Solo si el usuario está logueado

//         $calendar_html = <<<HTML

// <div class="max-w-6xl mx-auto mt-10 px-4">
//   <!-- Registro y Notas en 2 columnas -->
//   <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

//     <!-- Registro diario -->
//     <section id="registro-diario" class="bg-white shadow-md rounded-2xl p-6">
//       <h2 class="text-2xl font-semibold mb-4 text-center">Registrar mi día ✨</h2>
//       <button id="abrir-registro" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition w-full mb-4">
//         Comenzar registro
//       </button>

//       <form id="form-registro" class="hidden space-y-4 text-left">
//         <!-- Ánimo -->
//         <div>
//           <label class="block mb-2 font-medium">¿Cómo te sentís hoy?</label>
//           <div id="animo-emojis" class="flex justify-between text-2xl">
//             <button type="button" class="emoji-btn" data-animo="😞">😞</button>
//             <button type="button" class="emoji-btn" data-animo="😐">😐</button>
//             <button type="button" class="emoji-btn" data-animo="😊">😊</button>
//             <button type="button" class="emoji-btn" data-animo="😁">😁</button>
//             <button type="button" class="emoji-btn" data-animo="🤩">🤩</button>
//           </div>
//         </div>

//         <!-- Estrés -->
//         <div>
//           <label class="block mb-1 font-medium">Nivel de estrés 🧠</label>
//           <input type="range" id="estres" min="0" max="10" value="5" class="w-full accent-red-500">
//         </div>

//         <!-- Energía -->
//         <div>
//           <label class="block mb-1 font-medium">Nivel de energía ⚡</label>
//           <input type="range" id="energia" min="0" max="10" value="5" class="w-full accent-yellow-500">
//         </div>

//         <!-- Actividades -->
//         <div>
//           <label class="block mb-2 font-medium">Actividades de hoy 🏃</label>
//           <div class="flex flex-wrap gap-2">
//             <label class="flex items-center gap-1">
//               <input type="checkbox" value="Gimnasio" class="accent-blue-500"> 💪 Gimnasio
//             </label>
//             <label class="flex items-center gap-1">
//               <input type="checkbox" value="Estudio" class="accent-blue-500"> 📚 Estudio
//             </label>
//             <label class="flex items-center gap-1">
//               <input type="checkbox" value="Trabajo" class="accent-blue-500"> 💼 Trabajo
//             </label>
//             <label class="flex items-center gap-1">
//               <input type="checkbox" value="Caminata" class="accent-blue-500"> 🚶 Caminata
//             </label>
//             <label class="flex items-center gap-1">
//               <input type="checkbox" value="Deporte" class="accent-blue-500"> 🏀 Deporte
//             </label>
//           </div>
//         </div>

//         <!-- Nota -->
//         <div>
//           <label class="block mb-1 font-medium">Notas o reflexiones 📝</label>
//           <textarea id="notas" rows="3" class="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400"></textarea>
//         </div>

//         <!-- Botón -->
//         <div class="text-center">
//           <button id="enviar-registro" type="button" class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition w-full">
//             Guardar registro
//           </button>
//         </div>
//       </form>

//       <!-- Resumen -->
//       <div id="resumen-dia" class="hidden mt-6 bg-gray-50 p-6 rounded-2xl shadow-inner">
//         <h3 class="text-lg font-semibold mb-3">Resumen de tu día 🌅</h3>
//         <div id="resumen-contenido" class="text-left space-y-2 text-gray-700"></div>
//       </div>
//     </section>

//     <!-- Notas rápidas -->
//     <section id="notas-diarias" class="bg-white shadow-md rounded-2xl p-6">
//       <h2 class="text-2xl font-semibold mb-4 text-center">Notas rápidas 📝</h2>
      
//       <div class="flex gap-2 mb-4">
//         <input
//           type="text"
//           id="nueva-nota"
//           placeholder="Escribe una nota rápida..."
//           class="flex-1 border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
//         />
//         <button id="agregar-nota" class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">
//           Agregar
//         </button>
//       </div>

//       <div id="lista-notas" class="grid grid-cols-1 gap-3"></div>
//     </section>

//   </div>
// </div>

// <!-- Historial y modal quedan igual -->
// <div id="historial" class="hidden mt-6 bg-white rounded-2xl shadow-md max-w-md mx-auto p-5">
//   <h3 class="text-lg font-semibold mb-3">Tus últimos días 📆</h3>
//   <div id="lista-historial" class="space-y-3 text-left text-gray-700"></div>
// </div>

// <div id="event-modal" class="hidden fixed inset-0 flex items-center justify-center z-[10000] transition-all duration-300">
//   <div id="modal-overlay" class="absolute inset-0 bg-black/40"></div>
//   <div class="relative bg-white rounded-2xl shadow-2xl p-6 max-w-sm w-[90%] z-[10001] transform transition-all duration-300 scale-95 opacity-0 translate-y-5"
//        id="modal-content">
//     <h3 id="modal-title" class="text-xl font-semibold text-gray-800 mb-2">Evento</h3>
//     <p id="modal-date" class="text-sm text-gray-600 mb-1"></p>
//     <p id="modal-category" class="text-sm text-gray-600 mb-4"></p>
//     <div class="flex justify-end gap-2">
//       <button id="delete-event" class="bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded-lg transition">
//         Eliminar
//       </button>
//       <button id="close-modal" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium px-4 py-2 rounded-lg transition">
//         Cerrar
//       </button>
//     </div>
//   </div>
// </div>

// <!-- Calendario debajo, sin tocar nada -->
// <section id="calendario-usuario" class="mt-12">
//   <h2 class="text-2xl font-semibold text-center mb-6">Mi calendario y tareas 📅</h2>

//   <div class="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
//     <!-- 🗓️ Calendario -->
//     <div class="md:col-span-2 bg-white shadow-md rounded-2xl p-4">
//       <div id="planner-calendar" style="max-width:100%; margin:auto;"></div>

//       <div id="planner-form" class="hidden mt-6 p-4 bg-gray-50 rounded-xl text-center">
//         <input id="event-title" type="text" placeholder="Título del evento"
//           class="w-full border border-gray-300 rounded-lg p-2 mb-3 focus:ring-2 focus:ring-blue-400 focus:outline-none">
//         <input id="event-color" type="color" value="#3788d8"
//           class="w-full h-10 mb-3 cursor-pointer border border-gray-200 rounded-md">
//         <select id="event-category"
//           class="w-full border border-gray-300 rounded-lg p-2 mb-3 focus:ring-2 focus:ring-blue-400 focus:outline-none">
//           <option value="">Seleccionar categoría</option>
//           <option value="Trabajo">Trabajo</option>
//           <option value="Personal">Personal</option>
//           <option value="Cumpleaños">Cumpleaños</option>
//         </select>
//         <div class="flex justify-center gap-3">
//           <button id="save-event"
//             class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition">Agregar</button>
//           <button id="cancel-event"
//             class="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-lg transition">Cancelar</button>
//         </div>
//       </div>
//     </div>

//     <!-- ✅ Lista de tareas -->
//     <div class="bg-white shadow-md rounded-2xl p-6">
//       <h3 class="text-lg font-semibold mb-3 text-center">Tareas del día 🧾</h3>

//       <div class="flex gap-2 mb-4">
//         <input type="text" id="nueva-tarea" placeholder="Agregar nueva tarea..."
//           class="flex-1 border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400">
//         <button id="agregar-tarea"
//           class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">+</button>
//       </div>

//       <ul id="lista-tareas" class="space-y-2 text-left"></ul>
//     </div>
//   </div>
// </section>







// HTML;

        // return $content . $calendar_html; // agrega el calendario al final del contenido
    }
    return $content;
});
