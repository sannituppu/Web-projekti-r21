const input = document.querySelector('input')
const output = document.querySelector('output')

const sanat = [
    {name:"akku", image: "./pictures/sanasto/akku.jpg"},
    {name:"diodi", image: "./pictures/sanasto/diodi.jpg"},
    {name:"emolevy", image: "./pictures/sanasto/emolevy.jpg"},
    {name:"fototransistori", image: "./pictures/sanasto/fototransistori.jpg"},
    {name:"grafiikkakortti", image: "./pictures/sanasto/grafiikkakortti.jpg"},
    {name:"hdmi-kaapeli", image: "./pictures/sanasto/hdmi-kaapeli.jpg"},
    {name:"hiiri", image: "./pictures/sanasto/hiiri.jpg"},
    {name:"ilmajäähdytin", image: "./pictures/sanasto/ilmajaahdytin.jpg"},
    {name:"kiintolevy", image: "./pictures/sanasto/kiintolevy.jpg"},
    {name:"kondensaattori", image: "./pictures/sanasto/kondensaattori.jpg"},
    {name:"led", image: "./pictures/sanasto/led.jpg"},
    {name:"mikropiiri", image: "./pictures/sanasto/mikropiiri.jpg"},
    {name:"näppäimistö", image: "./pictures/sanasto/nappaimisto.jpg"},
    {name:"näyttö", image: "./pictures/sanasto/naytto.jpg"},
    {name:"prosessori", image: "./pictures/sanasto/prosessori.jpg"},
    {name:"satunnaiskäyttömuisti", image: "./pictures/sanasto/satunnaiskayttomuisti.jpg"},
    {name:"ssd", image: "./pictures/sanasto/ssd.jpg"},
    {name:"transistori", image: "./pictures/sanasto/transistori.jpg"},
    {name:"usb-kaapeli", image: "./pictures/sanasto/usb-kaapeli.jpg"},
    {name:"vastus", image: "./pictures/sanasto/vastus.jpg"}
]
    
let randomizeWord = ''
let maskedWord = ''

const newGame = () => {
    const random = Math.floor(Math.random() * 20) + 1
    randomizeWord = sanat[random].name
    maskedWord = "*".repeat(randomizeWord.length)
    console.log(randomizeWord)
    output.innerHTML = maskedWord

    const pic = document.getElementById('kuva')
    pic.src = sanat[random].image
}

newGame()

const win = () => {
    alert(`OIKEIN !!     Sana on ${randomizeWord}.` )
    newGame()
}

const replaceFoundChars = (guess) => {
    for (let i = 0; i<randomizeWord.length;i++) {
        const char = randomizeWord.substring(i,i+1)
        if (char === guess) {
            let newString = maskedWord.split('')
            newString.splice(i,1,guess)
            newString = newString.join('')
            maskedWord = newString
        }
        
    }
    output.innerHTML = maskedWord
}

input.addEventListener('keypress',(e) => {
    if (e.key === 'Enter') {
        e.preventDefault()

        const guess = input.value
        if (guess.toLowerCase() === randomizeWord.toLowerCase()) {
            win()
        } else  if (guess.length === 1 ) {
            replaceFoundChars(guess)
            if (maskedWord.toLocaleLowerCase() === randomizeWord.toLocaleLowerCase()) {
                win()
            }
        } else {
            alert("Väärin! Yritä uudelleen.")
        }
        
        input.value = ''
    }
})