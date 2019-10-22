
var game = {
    words: ['jedi', 'lightsaber', 'podracing', 'ewoks', 'lando', 'jabba', 'droid', 'master', 'sithlord', 'chancellor', 'destroyer', 'padme', 'skywalker', 'yoda', 'chewbacca', 'wookie', ' tatooine', 'rebels', 'force', 'senator', 'republic', 'galaxy', 'alderaan'],
    isGuessed: false,
    guessesLeft: 5,
    wins: 0,
    //What letters they have guessed
    guesses: [],
    slot: "_ ",
    guessWord: '',
    alpha: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

    //This function is to input the underscores to demarcate the number of letters in the word to be guessed
    makeSlots: function() {
        //23 because we have 23 words in our list of possible words
        var num =Math.floor(Math.random() * Math.floor(23));
        this.guessWord = this.words[num];
        this.slot= this.slot.repeat(this.words[num].length);
        
    },
    
    //Function will check user guess to see if it is in the word then proceed to pop up letter(s) if it is in word
    checkGuess: function(guess) {
       if(this.guessWord.includes(guess)){
            for(var i = 0; i < this.guessWord.length; i++){
                if(guess === this.guessWord[i]){
                    this.slot.replace(this.slot[(i * 2)], guess);
                }
                
            }
       }
       else
        {
        this.guesses.push(guess);
        this.guessesLeft= this.guessesLeft - 1;
        }
    },
   

};
