const para = document.getElementById('p1')
const para2 = document.getElementById('p2')

const phrasing = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"]

//This function uses math.floor and math.random to randomly choose a string from the array.
function eightBall() {
    return phrasing[Math.floor(Math.random() * phrasing.length)]
}

// let retButEl = document.getElementById('retreat');
// retButEl.addEventListener('click', (evt) => {
//     endGame()
// })

//This function gets the elements from the input field and will display it under the p2 tag
function questdisp() {
    let x = document.getElementById("question").value;
    document.getElementById("p2").innerHTML = x;
}
// add event listener to the :"ask button"

let ansbtn = document.getElementById('ask');
ansbtn.addEventListener('click', (evt) => {
    para.textContent = eightBall()
    questdisp()

}
)