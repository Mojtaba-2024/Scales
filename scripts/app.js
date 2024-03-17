const $ = document

const listMenu = $.querySelector('.bi-list')
const closeMenu = $.querySelector('.bi-x-lg')
const mobileNav = $.querySelector('.mobile-nav')
const cover = $.querySelector('.cover')

listMenu.addEventListener('click', () => {
    mobileNav.classList.add('active')
    cover.classList.add('cover--visibla')
})

closeMenu.addEventListener('click', () => {
    mobileNav.classList.remove('active')
    cover.classList.remove('cover--visibla')
})

cover.addEventListener('click', () => {
    mobileNav.classList.remove('active')
    cover.classList.remove('cover--visibla')
})