const wordLibrary = [
    "brie",
    "kan",
    "vara",
    "trevligt",
    "att",
    "ha",
    "ibland"
]


let words = []

function newWord() {
    let phrase = wordLibrary[Math.floor((Math.random() * wordLibrary.length))]
    words.push(new Word(phrase))
    console.log("The new word is " + phrase)
}

function drawWords() {
    words.forEach(element => {
        element.draw()
        
    });

}
