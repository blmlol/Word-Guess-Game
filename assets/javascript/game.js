
var game = {
    words: ['jedi', 'lightsaber', 'podracing', 'ewoks', 'lando', 'jabba', 'droid', 'master', 'sithlord', 'chancellor', 'destroyer', 'padme', 'skywalker', 'yoda', 'chewbacca', 'wookie', ' tatooine', 'rebels', 'force', 'senator', 'republic', 'galaxy', 'alderaan'],
    isGuessed: false,
    guessesLeft: 5,
    wins: 0,
    //What letters they have guessed
    guesses: [],
    slot: "_ ",
    slotArray: [],
    guessWord: '',
    alpha: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

    //This function is to input the underscores to demarcate the number of letters in the word to be guessed
    makeSlots: function () {
        //23 because we have 23 words in our list of possible words
        var num = Math.floor(Math.random() * Math.floor(23));
        this.guessWord = this.words[num];
        this.slot = this.slot.repeat(this.words[num].length);
        this.slotArray = this.slot.split("")

    },
    //Convert slot string into an array with str.split and then convert back into              
    //Function will check user guess to see if it is in the word then proceed to pop up letter(s) if it is in word

    checkGuess: function (guess) {
        if (this.guessWord.includes(guess)) {
            //If the guess is included in the word, loop through word and replace underscores with the guessed letter
            for (var i = 0; i < this.slot.length; i++) {
                if (guess === this.guessWord[i]) {
                    this.slotArray[i * 2] = guess;
                }
            }
            this.slot = this.slotArray.join(" ");
        }
        else {
            this.guesses.push(guess);
            this.guesses.push(" ");
            this.guessesLeft = this.guessesLeft - 1;
        }
    },


};
