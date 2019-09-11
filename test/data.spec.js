global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');


describe("data.species", () => {

  const muestra = [{
    "name": "Beth Smith",
    "species": "Human",
  },{
    "name": "Scary Brandon",
    "species": "Humanoid",
  },{
    "name": "Pat Gueterman",
    "species": "Robot",
  },{
    "name": "Blim Blam",
    "species": "Alien",
  }]
  
  it("debería ser una función", () => {
    assert.equal(typeof window.filter.species, "function");
  });

  it("debería retornar Blim Blam al filtrar por Alien", () => {
    assert.deepEqual(window.filter.species(muestra,"Alien"), [{"name":"Blim Blam","species": "Alien"}]);
  });
})

describe("data.order", () => {

  const muestra = [{
    "name": "Beth Smith",
  },{
    "name": "Scary Brandon",
  },{
    "name": "Pat Gueterman",
  },{
    "name": "Blim Blam",
  }]
  
  it("debería ser una función", () => {
    assert.equal(typeof window.sort.order, "function");
  });

  it("debería retornar Beth Smith, Blim Blam, Pat Gueterman, Scary Brandon al ordenar por A-Z", () => {
    assert.deepEqual(window.sort.order(muestra,"az"), [{"name":"Beth Smith"},{"name": "Blim Blam"},{ "name": "Pat Gueterman"},{"name": "Scary Brandon"}]);
  });

  it("debería retornar Scary Brandon, Pat Gueterman, Blim Blam, Beth Smith al ordenar por Z-A", () => {
    assert.deepEqual(window.sort.order(muestra,"Z-A"), [{"name": "Scary Brandon"},{ "name": "Pat Gueterman"},{"name": "Blim Blam"},{"name":"Beth Smith"}]);
  });
})