var hambuerguer = document.querySelector('.hambuerguer')

var fecha = document.querySelector('.fecha')

var menu = document.querySelector('.menu')

hambuerguer.addEventListener('click', ()=>{
    menu.style.left='0'
    menu.style.width='100%'
    hambuerguer.style.display='none'
})

fecha.addEventListener('click', ()=>{
    menu.style.width='0'
    menu.style.left= '-100%'
    hambuerguer.style.display='block'
})