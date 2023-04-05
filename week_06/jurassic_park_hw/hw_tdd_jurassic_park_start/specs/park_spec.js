const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let dino1;
  let dino2;

  beforeEach(function () {
    dino1 = new Dinosaur("Trevorceratops", "Vegan", 2)
    dino2 = new Dinosaur("Wee-Rex", "Pesci", 7)
    
    park = new Park('Purassic Jark', 5)
  })

  it('should have a name', function (){
    const actual = park.name;
    assert.strictEqual(actual, 'Purassic Jark')
  });
  
  it('should have a ticket price', function() {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 5)
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.dinoCollection;
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDino(dino1);
    const actual = park.dinoCollection;
    assert.deepStrictEqual(actual, [dino1])
  });
  // SHOULD HAVE USED SPLICE
  it('should be able to remove a dinosaur from its collection', function() {
    park.addDino(dino1);
    park.addDino(dino2);
    park.removeDino(dino2);
    const actual = park.dinoCollection;
    assert.deepStrictEqual(actual, [dino1])
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    park.addDino(dino1);
    park.addDino(dino2);
    const actual = park.mostVisitedDino();
    assert.deepStrictEqual(actual, dino2);
  });

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
