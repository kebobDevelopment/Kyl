var numberofid = 0;

    class Word {
        constructor(word) {
            this.word = word
            this.id = numberofid
            this.element = document.createElement( "h4" )
            this.element.id ="word" + this.id
            this.element.className ="phrase"
            this.element.innerHTML = word
            document.getElementById( "word-field" ).appendChild( this.element )

            numberofid++
            generateAnimation()
        }

        get getWord() { return this.word }

        generateAnimation() {
            
            this.element.style.left = this.Math.floor((Math.random() * 1000)) + "px"
            this.element.style.top = '-20px'
            this.element.style.transition = "top " + this.Math.floor((Math.random() * 10 + 10)) + 's'
            this.element.style.top = '80vh'
        }
}