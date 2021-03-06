const gallery = document.querySelector('.gallery')
const galleryResize = document.querySelector('.gallery__resize')
const before = document.querySelector('#before')
const after = document.querySelector('#after')


gallery.addEventListener('mousemove', (event) => {
    let x = event.ofsetX
    galleryResize.classList.remove('tr')
    galleryResize.style.width = x + 'px'
})

gallery.addEventListener('mouseleave', (event) => {
    galleryResize.style.width = 50 + '%'
    galleryResize.classList.add('tr')
})

before.onclick = () => {
galleryResize.classList.add('tr')
galleryResize.style.width = 100 + 'px'

}
after.onclick = () => {
    galleryResize.classList.add('tr')
    galleryResize.style.width = 90 + '%'
} 