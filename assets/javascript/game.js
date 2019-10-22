// We need a random number generator function
//Max is non inclusive; so the input will always be the same number of words that I have
function getRandom (max) {
    return Math.floor(Math.random() * Math.floor(max));
}

//Here is my word list with 23 words
var wordArray = ['jedi', 'lightsaber', 'podracing', 'ewoks', 'lando', 'jabba', 'droid', 'master', 'sithlord', 'chancellor', 'destroyer', 'padme', 'skywalker', 'yoda', 'chewbacca', 'wookie', ' tatooine', 'rebels', 'force', 'senator', 'republic', 'galaxy', 'alderaan' ];

//When I call my random function, it should always be max 23, since it will go from 0-22 which is the range of indexes that my array has
var guessWord =wordArray[getRandom(23)];

var game = {
    words: ['jedi', 'lightsaber', 'podracing', 'ewoks', 'lando', 'jabba', 'droid', 'master', 'sithlord', 'chancellor', 'destroyer', 'padme', 'skywalker', 'yoda', 'chewbacca', 'wookie', ' tatooine', 'rebels', 'force', 'senator', 'republic', 'galaxy', 'alderaan'],
    isGuessed: false,
    guessesLeft: 5,
    wins: 0,
    guesses: '',
    guessSlot:'',
    slot: "_ ",
    guessWord: '',
    alpha: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

    //This function is to input the underscores to demarcate the number of letters in the word to be guessed
    makeSlots: function() {
        //23 because we have 23 words in our list of possible words
        var num =Math.floor(Math.random() * Math.floor(23));
        this.guessWord = this.words[num];
        return(this.slot.repeat(this.words[num].length));
    },
    
    //Function will check user guess to see if it is in the word then proceed to pop up letter(s) if it is in word
    checkGuess: function(guess) {
       if(this.guessWord.includes(guess)){
            for(var i = 0; i < this.guessWord.length; i+2){
                if(guess === this.guessWord[i]){
                    this.slot.replace(this.slot[i], guess);
                }
                
            }
       }
       else
        {
        this.guessSlot.replace(this.guessSlot[5-game.guessesLeft], guess);
        this.guessesLeft= this.guessesLeft -1;
        }
    },
   

};
