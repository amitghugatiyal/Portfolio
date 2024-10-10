const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
function handlesubmit(e){
    event.preventDefault();

    const form = document.getElementById('per_form');
    form.reset();
}
