const id = document.getElementById('id')
const style = document.getElementById('style')

console.log(id)
console.log(style)

const setCard = () => {
    let card = document.getElementById(id.value)
    card.style.color = style.value
    id.value = ''
    style.value =''
}


const resetCards = () => {
    let diamond = document.getElementById ('diamonds')
        diamond.style.color = ''
    let clubs = document.getElementById ('clubs')
        clubs.style.color = ''
    let hearts = document.getElementById ('hearts')
        hearts.style.color = ''
    let spades = document.getElementById ('spades')
        spades.style.color = ''
        
}