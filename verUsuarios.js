import { database } from './firebase-config.js';
import { ref, get, child } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";

// Función para mostrar los usuarios registrados
async function mostrarUsuarios() {
    const dbRef = ref(database);
    const snapshot = await get(child(dbRef, 'usuarios'));

    if (!snapshot.exists()) {
        console.log('No hay usuarios registrados.');
        return;
    }

    console.log('Usuarios registrados:');
    console.table(Object.values(snapshot.val()));
}

// Ejecutar la función al cargar el archivo
mostrarUsuarios();

// Verificar si el usuario tiene permisos de administrador
const usuarioActivo = localStorage.getItem('usuarioActivo');
const adminEmail = localStorage.getItem('adminEmail');
const usuariosConPermisos = JSON.parse(localStorage.getItem('usuariosConPermisos')) || [];

if (!usuarioActivo || (usuarioActivo !== adminEmail && !usuariosConPermisos.includes(usuarioActivo))) {
    alert('No tienes permisos para acceder a esta página.');
    window.location.href = 'index.html';
}

// Función para manejar el cierre de sesión
function cerrarSesion() {
    localStorage.removeItem('usuarioActivo');
    alert('Sesión cerrada exitosamente.');
    window.location.href = 'index.html';
}

// Agregar botón de "Cerrar Sesión" si el usuario está autenticado
if (usuarioActivo) {
    const authLinks = document.querySelector('.auth-links');
    authLinks.innerHTML = '<a href="#" id="logout">Cerrar Sesión</a>';
    document.getElementById('logout').addEventListener('click', cerrarSesion);
}
