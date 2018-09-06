let phrase = 'my_var'

function myFunction(){
    
    let player_input = document.getElementById('player-input').value

    

    if(player_input.length<=phrase.length) {

        let typo = false
        let i = 0
        while (i<=player_input.length && typo == false) {
            if(!(player_input[i]==phrase[i])){
                 typo = true
            }

            console.log(player_input[i] + typo)
            i++
        }   
    }
}
