const Park = function (name, ticketPrice) {
  this.name = name
  this.ticketPrice = ticketPrice
  this.dinoCollection = []
}

Park.prototype.addDino = function (dino) {
  this.dinoCollection.push(dino);
}
// SHOULD HAVE USED SPLICE
Park.prototype.removeDino = function (dino) {
  this.dinoCollection.pop(dino)
}
// USE THIS ^
// Park.prototype.remove = function (dinosaur) {
//   const index = this.dinosaurs.indexOf(dinosaur);
//   this.dinosaurs.splice(index, 1);
// }

Park.prototype.mostVisitedDino = function () {
  let popDino = null;
  this.dinoCollection.sort((a, b) => b.guestsAttractedPerDay - a.guestsAttractedPerDay);
  popDino = this.dinoCollection[0];
  return popDino;
}

// CLASS SOLUTION
Park.prototype.findMostAttractiveDinosaur = function () {
  let mostAttractiveDino = this.dinosaurs[0];
// USED 'OF' INSTEAD OF 'IN' - 'IN' WOULD PROVIDE INDEX
  for (const dino of this.dinosaurs) {
    if (dino.guestsAttractedPerDay > mostAttractiveDino.guestsAttractedPerDay) {
      mostAttractiveDino = dino;
    }
  }

  return mostAttractiveDino;
}

module.exports = Park;
