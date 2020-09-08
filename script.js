const hamburger=document.querySelector('.menu-icon');
const navList=document.querySelector('.nav-list')
hamburger.addEventListener('click',()=>{
    navList.classList.toggle('active');
    hamburger.classList.toggle('fa-bars');
    hamburger.classList.toggle('fa-times');
});