const modal = document.querySelector('.modal')
const menu = document.querySelector('.open-modal')
const cards = document.querySelectorAll('.card')
const links = document.querySelectorAll('.pages')

    menu.addEventListener("click", function () {
    modal.classList.add('active')
})

    document.querySelector('.modal').addEventListener("click", function () {
    modal.classList.remove('active')
    })
   
    for(let card of cards){
    card.addEventListener("mouseover",function(){
        
        const link = card.getAttribute('id')
            document.getElementById(link).style.background = 'white'
            document.getElementById(link).style.color = 'black'
            document.querySelector('.dalmata').src = `/src/Pages/assets/animation/${link}.png`
    })
    const link = card.getAttribute('id')
    card.addEventListener("mouseout",function(){
        document.getElementById(link).style.background = ''
        document.getElementById(link).style.color = ''
        document.querySelector('.dalmata').src = `/src/Pages/assets/animation/house.png`
    })
}

for(let link of links){
    link.addEventListener("mouseover",function(){

        const page= link.getAttribute('id')
        // const link = card.getAttribute('id')
            document.querySelector('.dalmata').src = `/src/Pages/assets/animation/${page}.png`
    })
}