import { assertStrictEquals } from "std-assert";
import { grow } from "../src/1-grow.ts";

Deno.test("Basic tests", async (t) => {
  await t.step(
    "Testing for [1, 2, 3]",
    () => assertStrictEquals(grow([1, 2, 3]), 6),
  );
  await t.step(
    "Testing for [4, 1, 1, 1, 4]",
    () => assertStrictEquals(grow([4, 1, 1, 1, 4]), 16),
  );
  await t.step(
    "Testing for [2, 2, 2, 2, 2, 2]",
    () => assertStrictEquals(grow([2, 2, 2, 2, 2, 2]), 64),
  );
});

Deno.test("Random tests", async (t) => {
  const rand = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;
  const sol = (arr: number[]) => arr.reduce((a, b) => a * b, 1);
  for (let i = 0; i < 100; i++) {
    const x = Array.from({ length: rand(2, 8) }, () => rand(1, 9));
    await t.step(
      `Testing for [${x.join(", ")}]`,
      () => assertStrictEquals(grow(x), sol(x)),
    );
  }
});
