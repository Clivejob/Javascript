const IsogramFinder = function (word) {
  this.word = word.toLowerCase();
  this.alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
}

IsogramFinder.prototype.isIsogram = function () {
  return this.word.some(letter => this.word)
}

module.exports = IsogramFinder;
