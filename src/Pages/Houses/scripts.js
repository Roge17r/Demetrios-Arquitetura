const modal = document.querySelector('.modal')
const menu = document.querySelector('.open-modal')

    menu.addEventListener("click", function () {
    modal.classList.add('active')
})

    document.querySelector('.modal').addEventListener("click", function () {
    modal.classList.remove('active')
    })
/** Script modal-house **/

const overlay = document.querySelector('.modal-overlay')

const cards = document.querySelectorAll('.card')



for(let card of cards){
    card.addEventListener("click", function() {
        var folder = card.getAttribute('id')
        overlay.classList.add('active')
        document.querySelector('.iframe').href = `/src/Images/Projetos/casa${folder}/index.html`

        
    })
}

    document.querySelector('.close-modal','.modal-overlay').addEventListener("click", function () {
    overlay.classList.remove('active')
    document.querySelector('iframe').src = ''
    
    })

    // Handle ESC key (key code 27)
document.addEventListener('keyup', function(e) {
    if (e.keyCode == 27) {
        overlay.classList.remove('active')
        document.querySelector('iframe').src = ''
    }
});