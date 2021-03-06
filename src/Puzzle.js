import data from './data.js';
import domUpdates from './domUpdates.js';

class Puzzle {
  constructor() {
    this.hint = null;
    this.puzzleDetails = null;
    this.difficulty = null;
    this.category = null;
    this.answer = [];
    this.splitAnswer = [];
  }
  chooseDifficulty() {
    let result = null;
    let randomNumber = Math.floor(Math.random() * 5);
    if (randomNumber === 4) {
      result = data.puzzles.four_word_answers;
    } else if (randomNumber === 3) {
      result = data.puzzles.three_word_answers;
    } else if (randomNumber === 2) {
      result = data.puzzles.two_word_answers;
    } else {
      result = data.puzzles.one_word_answers;
    }
    this.difficulty = result;
  }
  randomizePuzzle() {
    let randomIndex = Math.floor(Math.random() * 
      this.difficulty.puzzle_bank.length);
    this.puzzleDetails = this.difficulty.puzzle_bank[randomIndex];
    this.answer = this.puzzleDetails.correct_answer;
    this.category = this.puzzleDetails.category;
    domUpdates.displayDetails(this.puzzleDetails.number_of_words, this.category);
    this.displayPuzzle();
    return this.puzzleDetails;
  }
  displayPuzzle() {
    this.splitAnswer = this.answer.split('');
    this.splitAnswer.forEach((letter, i) => {
      domUpdates.appendPuzzle(letter, i);
    })
    return this.splitAnswer;
  }
}

export default Puzzle;