import chai from 'chai';
import Puzzle from '../src/Puzzle.js';
const expect = chai.expect;


describe('Puzzle', function() {
  let puzzle;
  beforeEach(function() {
    puzzle = new Puzzle();
  });

  it('instantiates our good friend, Puzzle', function() {
    expect(puzzle).to.be.an.instanceof(Puzzle);
  });

  it('should have default values', function() {
    expect(puzzle.hint).to.equal(null);
    expect(puzzle.puzzleDetails).to.equal(null);
    expect(puzzle.difficulty).to.equal(null);
    expect(puzzle.category).to.equal(null);
    expect(puzzle.answer).to.deep.equal([]);
    expect(puzzle.splitAnswer).to.deep.equal([]);
  });
  
  it('selects a random puzzle bank based on the difficulty', function() {
    expect(puzzle.difficulty).to.deep.equal(null);
    expect(puzzle.category).to.deep.equal(null);

    puzzle.chooseDifficulty();
    puzzle.randomizePuzzle();

    expect(puzzle.difficulty).to.be.an('object');
    expect(puzzle.category).to.be.an('string');
  });

  it('should split answer into individual letters', function() {
    puzzle.chooseDifficulty();
    puzzle.randomizePuzzle();
    expect(puzzle.splitAnswer).to.not.deep.equal(puzzle.answer);
  })
});