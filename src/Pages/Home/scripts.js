const modal = document.querySelector('.modal')
const menu = document.querySelector('.open-modal')
const cards = document.querySelectorAll('.card')


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
     
    })
    const link = card.getAttribute('id')
    card.addEventListener("mouseout",function(){
        document.getElementById(link).style.background = ''
            document.getElementById(link).style.color = ''
 
    })
}