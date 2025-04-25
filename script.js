document.addEventListener("DOMContentLoaded", async () => {
    // Verificar si Supabase está disponible
    if (!window.supabase) {
        console.error("Supabase no está definido. Asegúrate de que el script de Supabase se haya cargado correctamente.");
        return;
    }

    const supabaseUrl = "https://zeijayrxciyzymysbyvp.supabase.co";
    const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InplaWpheXJ4Y2l5enlteXNieXZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQxNjYyMjMsImV4cCI6MjA1OTc0MjIyM30.DxT8_5acA88JxhVV7n2UqmrZ_9d0DPABi6eKSO8cpDE";
    const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

    const forms = document.querySelectorAll("form");
    forms.forEach(form => {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Formulario enviado correctamente.");
        });
    });

    const usuarioActivo = localStorage.getItem('usuarioActivo');
    const menu = document.querySelector('.menu');

    if (usuarioActivo) {
        try {
            // Verificar el rol del usuario activo desde la base de datos
            const { data: usuarios, error } = await supabase
                .from('usuarios')
                .select('rol')
                .eq('email', usuarioActivo);    

            if (error) {
                console.error('Error al verificar el rol del usuario:', error.message);
            } else if (usuarios && usuarios.length > 0 && usuarios[0].rol === 'administrador') {
                // Mostrar el menú de administrador si el rol es "administrador"
                if (!menu.querySelector('a[href="verUsuarios.html"]')) {
                    const adminMenuItem = document.createElement('li');
                    adminMenuItem.innerHTML = '<a href="verUsuarios.html">Administración</a>';
                    menu.appendChild(adminMenuItem);
                }
            }
        } catch (err) {
            console.error('Error inesperado al verificar el rol del usuario:', err);
        }
    }

    // Mostrar "Matricularse", "Administración" y "Cerrar Sesión" si el usuario está autenticado
    const authLinks = document.querySelector('.auth-links');
    const adminEmail = localStorage.getItem('adminEmail') || 'admin@ejemplo.com';

    if (authLinks) {
        if (usuarioActivo) {
            authLinks.innerHTML = `
                <a href="matricularse.html">Matricularse</a>
                ${usuarioActivo === adminEmail ? `
                    <div class="dropdown">
                        <a href="#">Administración</a>
                        <ul class="dropdown-menu">
                            <li><a href="verUsuarios.html">Ver Usuarios</a></li>
                            <li><a href="solicitudMatriculacion.html">Solicitudes de Matriculación</a></li>
                        </ul>
                    </div>
                ` : ''}
                <a href="#" id="logout">Cerrar Sesión</a>
            `;
            document.getElementById('logout').addEventListener('click', () => {
                localStorage.removeItem('usuarioActivo');
                alert('Sesión cerrada exitosamente.');
                window.location.href = 'index.html';
            });
        } else {
            authLinks.innerHTML = `
                <a href="registro.html">Registrarse</a>
                <a href="login.html">Iniciar Sesión</a>
            `;
        }
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

    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const authLinks = document.querySelector('.auth-links');
    const usuarioActivo = localStorage.getItem('usuarioActivo');

    if (authLinks) {
        if (usuarioActivo) {
            authLinks.innerHTML = `
                <a href="matricularse.html">Matricularse</a>
                <a href="#" id="logout">Cerrar Sesión</a>
            `;
            document.getElementById('logout').addEventListener('click', () => {
                localStorage.removeItem('usuarioActivo');
                alert('Sesión cerrada exitosamente.');
                window.location.href = 'index.html';
            });
        } else {
            authLinks.innerHTML = `
                <a href="registro.html">Registrarse</a>
                <a href="login.html">Iniciar Sesión</a>
            `;
        }
    }
});
