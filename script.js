// Popup bienvenue
window.addEventListener('load', () => {
    setInterval(() => {
        alert("Bienvenue sur BABYLON House");
    }, 1000);
});
//Menu burger mobile
const menuBtn = 
document.querySelector('.menu-btn');
const nav = document.querySelector('nav');
if(menuBtn) {
    menuBtn.addEventListener('click' , () => {
        nav.classList.toggle('active');
    });
}
//Validation formulaire inscription
const form =
document.querySelector('form')
if(form) {
    form.addEventListener('submit', (e) => {
        const email =
document.querySelector('input[type="email"]').value;
    
    if(!email.includes('@')) {
        e.preventDefault();
        alert("Email invalide!");
    } else{
        alert("Merci pour votre inscription");
    }
 });
}
//Slider simple pour images 
let slideIndex = 0;
function showSlide() {
    const slides = 
    document.querySelectorAll('.slide');
    slides.forEach(s => s.style.display = 
        'none');
        slideIndex=(slideIndex +1 ) %
        slides.length;
        slides[slideIndex].style.display =
        'block';
}
setInterval(showSlide, 3000); //change toutes les 3s

      


