import "dart:math";
import "package:test/test.dart";
import "package:wpu_coding_challenge_2024/src/1-grow.dart";

void main() {
  group("Basic tests", () {
    test("Testing for [1, 2, 3]", () => expect(grow([1, 2, 3]), equals(6)));
    test("Testing for [4, 1, 1, 1, 4]",
        () => expect(grow([4, 1, 1, 1, 4]), equals(16)));
    test("Testing for [2, 2, 2, 2, 2, 2]",
        () => expect(grow([2, 2, 2, 2, 2, 2]), equals(64)));
  });
  group("Random tests", () {
    Random rng = Random();
    int sol(List<int> arr) => arr.fold(1, (a, b) => a * b);
    for (int i = 0; i < 100; i++) {
      List<int> x =
          List<int>.generate(rng.nextInt(7) + 2, (_) => rng.nextInt(9) + 1);
      test("Testing for $x", () => expect(grow(x), equals(sol(x))));
    }
  });
}
