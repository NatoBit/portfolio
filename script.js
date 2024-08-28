const languageToggle = document.getElementById('languageToggle');
const languageOptions = document.getElementById('languageOptions');

languageToggle.addEventListener('click', () => {
    languageOptions.classList.toggle('show');
});

document.querySelectorAll('.language-option').forEach(option => {
    option.addEventListener('click', (e) => {
        const lang = e.target.getAttribute('data-lang');
        // Aquí puedes agregar la lógica para cambiar el idioma
        fetch(`${lang}.json`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('menuInicio').innerText = data.menuInicio;            
            document.getElementById('menuSobreMi').innerText = data.menuSobreMi;
            document.getElementById('menuProyectos').innerText = data.menuProyectos;
            document.getElementById('homeContentH1').innerText = data.homeContentH1;
            document.getElementById('homeContentH2').innerHTML = data.homeContentH2;
            document.getElementById('homeContentP').innerText = data.homeContentP;
            document.getElementById('aboutMeH1').innerText = data.aboutMeH1;
            document.getElementById('aboutMeP1').innerText = data.aboutMeP1;
            document.getElementById('aboutMeP2').innerText = data.aboutMeP2;
            document.getElementById('liPais').innerHTML = data.liPais;
            document.getElementById('liIdiomas').innerHTML = data.liIdiomas;
            document.getElementById('liHerramientas').innerText = data.liHerramientas;
            document.getElementById('liLenProg').innerText = data.liLenProg;
            document.getElementById('liRedes').innerText = data.liRedes;
            document.getElementById('habilidadesH2').innerText = data.habilidadesH2;
            document.getElementById('foot').innerText = data.foot;
        })
        .catch(error => console.error('Error al cargar el archivo:', error));
        languageOptions.classList.remove('show');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Asignar manejadores de eventos a las etiquetas <a>
    document.getElementById('menuInicio').addEventListener('click', function(event) {
        event.preventDefault(); // Evitar comportamiento por defecto del enlace
        showSection('inicio');
    });
    document.getElementById('menuSobreMi').addEventListener('click', function(event) {
        event.preventDefault();
        showSection('sobreMi');
    });
    document.getElementById('menuProyectos').addEventListener('click', function(event) {
        event.preventDefault();
        showSection('proyectos');
    });

    // Mostrar la primera sección por defecto
    showSection('inicio');
});

function showSection(sectionId) {
    // Ocultar todas las secciones
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });

    // Mostrar la sección seleccionada
    var activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active');

    // Remover la clase activa de todos los enlaces
    var menuLinks = document.querySelectorAll('.header-menu-link');
    menuLinks.forEach(function(link) {
        link.classList.remove('active');
    });

    // Agregar la clase activa al enlace correspondiente
    var activeLink = document.querySelector('#menu' + sectionId.charAt(0).toUpperCase() + sectionId.slice(1));
    activeLink.classList.add('active');
}