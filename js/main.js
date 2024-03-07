const nav = document.querySelector('#nav')
const navBtn = document.querySelector('#nav-btn')
const navBtnImg = document.querySelector('#nav-btn-img')
const activeElement = document.querySelector('#nav__item')
let list = document.querySelector('#list')

navBtn.addEventListener('click', function() {
    if (nav.classList.toggle('open')) {
        
        navBtnImg.src = "./img/navcl.svg"
        activeElement.classList.add('active')

        list.style.zIndex = 1
        list.style.opacity = 1
    } else {
        navBtnImg.src = "./img/NAV.svg"
    }
})

