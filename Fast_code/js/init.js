let phrase = ''

const words = [
    "brie",
    "kan",
    "vara",
    "trevligt",
    "att",
    "ha",
    "ibland"
]

//sets a word to start with
newWord();
console.log("The first word is " + phrase)

function myFunction() {
    
    let player_input = document.getElementById('player-input').value

    if(player_input.length<=phrase.length) {

        let typo = false
        let i = 0
        while (i <= player_input.length && typo == false) {

            //looks for error
            if(!(player_input[i] === phrase[i])){
                console.log(player_input[i] + "  " + phrase[i])
                 typo = true
                 document.getElementById('player-input').style.color = "red"
                 console.log("I'm in the part of the if that marks an error" )
            }

            //looks if completed
            else if(player_input === phrase) {
                document.getElementsByClassName('gratulation').innerHTML = "Good jobb, " + phrase +  " was typed correctly!"

                newWord()
            }
            
            //if not completed but correct
            else {
                typo = false
                document.getElementById('player-input').style.color = "black"
            }

            console.log(player_input[i] + typo)
            i++
        }   
    }
}

function newWord() {

    phrase = words[Math.floor((Math.random() * words.length))]

    document.getElementsByClassName('phrase').innerHTML = phrase

}
