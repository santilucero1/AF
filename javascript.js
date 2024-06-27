function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    window.scrollTo({
        top: element.offsetTop - document.querySelector('.header').offsetHeight,
        behavior: 'smooth'
    });
}