const modal = document.querySelector('.modal')
const menu = document.querySelector('.open-modal')

    menu.addEventListener("click", function () {
    modal.classList.add('active')
})

    document.querySelector('.modal').addEventListener("click", function () {
    modal.classList.remove('active')
    })
