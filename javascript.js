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
    // Aquí podrías manejar la lógica para verificar la respuesta
    var respuestaInput = document.getElementById('respuestaInput').value;

    // Si quieres mostrar el iframe de Google Docs, aquí cambiarías el contenido
    var desafioDiv = document.getElementById('desafio');
    desafioDiv.innerHTML = `
        <iframe src="https://forms.gle/mTtvYzTgfEHv1Ho57"></iframe>`;
}