// WPU Coding Challenge 2024
// 1/366
// https://www.codewars.com/kata/57f780909f7e8e3183000078

import java.util.Arrays;

public class j_1_grow {
    // private static int grow(int[] x) {
    // int result = x[0];
    // for (int i = 1; i < x.length; i++)
    // result *= x[i];
    // return result;
    // }

    // private static int grow(int[] x) {
    // int result = 1;
    // for (int i : x)
    // result *= i;
    // return result;
    // }

    private static int grow(int[] x) {
        return Arrays.stream(x).reduce(1, (a, b) -> a * b);
    }

    public static void main(String[] args) {
        System.out.println(grow(new int[] { 1, 2, 3, 4 }));
    }
}