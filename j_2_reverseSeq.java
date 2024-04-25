// WPU Coding Challenge 2024
// 2/366
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d

import java.util.stream.IntStream;

public class j_2_reverseSeq {
    // public static int[] reverse(int n) {
    // int[] result = new int[n];
    // for (int i = 0; i < n; i++) {
    // result[i] = n - i;
    // }
    // return result;
    // }

    public static int[] reverse(int n) {
        return IntStream.iterate(n, i -> i - 1).limit(n).toArray();
    }

    public static void main(String[] args) {
        int[] arr = reverse(5);
        for (int i : arr) {
            System.out.println(i);
        }
    }
}
