import assert from "node:assert/strict";
import grow from "../src/1-grow.js";

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(grow([1, 2, 3]), 6);
    assert.strictEqual(grow([4, 1, 1, 1, 4]), 16);
    assert.strictEqual(grow([2, 2, 2, 2, 2, 2]), 64);
  });
});

describe("Random tests", () => {
  const randint = (a, b) => ~~(Math.random() * (b - a + 1)) + a;

  function mygrow(x) {
    return x.reduce((a, b) => a * b);
  }

  let names = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  it("Testing for 100 random tests", () => {
    for (let i = 0; i < 100; i++) {
      let x = [], len = randint(2, 8);
      for (let k = 0; k < len; k++) x.push(names[randint(0, names.length - 1)]);
      assert.strictEqual(grow(x.slice()), mygrow(x), `Testing for ${x}`);
    }
  });
});
