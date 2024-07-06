function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    window.scrollTo({
        top: element.offsetTop - document.querySelector('.header').offsetHeight,
        behavior: 'smooth'
    });
}

function mostrarAdivinanza() {
    var textoDesafio = document.getElementById('textoDesafio');
    textoDesafio.innerHTML = `
        <p>Siempre estoy en movimiento,
        pero nunca me verás caminar.<br>
        Puedo elevarte al cielo<br>
        o dejarte caer sin avisar.<br>
        Puedo ser tu aliado más preciado<br>
        o tu enemigo más temido.<br>
        ¿Qué soy?</p>`;
    
    var btnAcepto = document.getElementById('btnAcepto');
    btnAcepto.style.display = 'none';
    
    var respuestaContainer = document.getElementById('respuestaContainer');
    respuestaContainer.style.display = 'block';
}

function adivinarRespuesta() {
    var respuestaInput = document.getElementById('respuestaInput').value;

    var textoDesafio = document.getElementById('textoDesafio');
    textoDesafio.innerHTML = '';

    var respuestaContainer = document.getElementById('respuestaContainer');
    respuestaContainer.style.display = 'none';
    
    var formularioContainer = document.getElementById('formularioContainer');
    formularioContainer.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').addEventListener('submit', function(event) {
        // Prevenir el comportamiento predeterminado de enviar el formulario
        event.preventDefault();
        
        // Crear una nueva pestaña para abrir premio.html
        window.open("premio.html", "_blank");
        
        // Enviar el formulario
        this.submit();
    });
});