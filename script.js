// script.js

// Estructura de datos JSON para el menu

const menuData = {
    "menu": [
        { "id": 1, "nombre": "Inicio", "enlace": "/inicio" },
        { "id": 2, "nombre": "Sobre Nosotros", "enlace": "/sobre-nosotros" },
        { "id": 3, "nombre": "Servicios", "enlace": "/servicios" },
        { "id": 4, "nombre": "Contacto", "enlace": "/contacto" }
    ]
};


function renderMenu() {
    const menu = document.getElementById('menu');
    menu.innerHTML = ''; // Limpiar el menú existente
    menuData.menu.forEach(item => {
        const link = document.createElement('a');
        link.href = item.enlace;
        link.textContent = item.nombre;
        menu.appendChild(link);
    });
}

document.getElementById('menuForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const enlace = document.getElementById('enlace').value;
    
    // Validar que el ID sea único
    const newId = menuData.menu.length ? menuData.menu[menuData.menu.length - 1].id + 1 : 1;
    menuData.menu.push({ id: newId, nombre: nombre, enlace: enlace });
    
    // Limpiar el formulario
    document.getElementById('nombre').value = '';
    document.getElementById('enlace').value = '';
    
    renderMenu(); // Volver a renderizar el menú
});

// Renderizar el menú al cargar la página
renderMenu();


 