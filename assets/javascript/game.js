// We need a random number generator function
//Max is non inclusive; so the input will always be the same number of words that I have
function getRandom (max) {
    return Math.floor(Math.random() * Math.floor(max));
}

//Here is my word list with 23 words
var wordArray = ['jedi', 'lightsaber', 'podracing', 'ewoks', 'lando', 'jabba', 'droid', 'master', 'sithlord', 'chancellor', 'destroyer', 'padme', 'skywalker', 'yoda', 'chewbacca', 'wookie', ' tatooine', 'rebels', 'force', 'senator', 'republic', 'galaxy', 'alderaan' ];

//When I call my random function, it should always be max 23, since it will go from 0-22 which is the range of indexes that my array has
var guessWord =wordArray[getRandom(23)];


