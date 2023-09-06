const header = document.querySelector('#header');
const menu = document.querySelector('.mobile-nav');

// Toggle Menu

const mobile_menu = () => {
    header.classList.toggle('active');
}
menu.addEventListener('click',()=>mobile_menu());