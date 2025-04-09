document.addEventListener("DOMContentLoaded", () => {
    const forms = document.querySelectorAll("form");
    forms.forEach(form => {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Formulario enviado correctamente.");
        });
    });

    // Verificar si el usuario activo es administrador
    const adminEmail = localStorage.getItem('adminEmail') || 'admin@ejemplo.com'; // Valor predeterminado
    const usuarioActivo = localStorage.getItem('usuarioActivo');
    const menu = document.querySelector('.menu');

    if (usuarioActivo === adminEmail) {
        const adminMenuItem = document.createElement('li');
        adminMenuItem.innerHTML = '<a href="verUsuarios.html">Administración</a>';
        menu.appendChild(adminMenuItem);
    }

    // Manejo de cierre de sesión
    const authLinks = document.querySelector('.auth-links');
    if (usuarioActivo) {
        authLinks.innerHTML = '<a href="#" id="logout">Cerrar Sesión</a>';
        document.getElementById('logout').addEventListener('click', function () {
            localStorage.removeItem('usuarioActivo');
            alert('Sesión cerrada exitosamente.');
            window.location.href = 'index.html';
        });
    }

    // Manejo del menú desplegable
    const dropdowns = document.querySelectorAll(".dropdown");
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener("mouseenter", () => {
            const submenu = dropdown.querySelector(".submenu");
            if (submenu) submenu.style.display = "block";
        });
        dropdown.addEventListener("mouseleave", () => {
            const submenu = dropdown.querySelector(".submenu");
            if (submenu) submenu.style.display = "none";
        });
    });

    // Eliminar funcionalidad de los modales

    const images = document.querySelectorAll(".carousel-images img");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const progressBar = document.querySelector(".progress-bar");
    let currentIndex = 0;
    let interval;

    const updateCarousel = () => {
        images.forEach((img, index) => {
            img.classList.toggle("active", index === currentIndex);
        });
        resetProgressBar(); // Restablecer la barra de carga
    };

    const resetProgressBar = () => {
        progressBar.style.transition = "none"; // Desactivar transición temporalmente
        progressBar.style.width = "0"; // Restablecer el ancho a 0
        setTimeout(() => {
            progressBar.style.transition = "width 5s linear"; // Reactivar transición
            progressBar.style.width = "100%"; // Llenar la barra
        }, 50); // Pequeño retraso para reiniciar la animación
    };

    const startAutoSlide = () => {
        interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            updateCarousel();
        }, 5000); // Cambiar cada 5 segundos
    };

    const stopAutoSlide = () => {
        clearInterval(interval);
    };

    prevBtn.addEventListener("click", () => {
        stopAutoSlide();
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel();
        startAutoSlide();
    });

    nextBtn.addEventListener("click", () => {
        stopAutoSlide();
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
        startAutoSlide();
    });

    updateCarousel(); // Inicializar el carrusel
    startAutoSlide(); // Iniciar el cambio automático
});
