var numberofid = 0;

    class Word {
        constructor(word) {
            this.word = word
            this.id = numberofid
            this.element = document.createElement("h4")
            this.element.id ="word" + this.id
            this.element.className ="phrase"
            this.element.innerHTML = word
            document.getElementById("word-field").appendChild(this.element)

            this.x = [ Math.floor(( Math.random() * 1000 )) ]
            this.element.style.left = this.x + "px"
            this.velocity = 0.04
            numberofid++
            generateAnimation()
        }

        get getWord() { return this.word }

        generateAnimation() {
            this.
        }
}