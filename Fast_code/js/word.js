var numberofid = 0

export function Word(word) {
    this.id = numberofid
    this.element = document.createElement("h4")
    this.element.id ="word" + this.id
    this.element.class ="phrase"
    this.element.innerHTML = word
    document.getElementById("word-field").appendChild(this.element)

    this.y = 0
    this.x = [Math.floor((Math.random() * 1000))]
    this.velocity = 0.3
    function draw() {
        this.element.style.top = y + "px"

        this.y += this.velocity
    }


    numberofid++
}