Rules:
The most basic rule is that you add the value of all the symbols: so II is 2, LXVI is 66, etc.

The exception is that there may not be more than three of the same characters in a row. Instead, you switch to subtraction. So instead of writing IIII for 4, you write IV (for 5 minus 1); and instead of writing LXXXX for 90, you write XC.

You also have to separate ones, tens, hundreds, and thousands. In other words, 99 is XCIX, not IC. You cannot count higher than 3,999 in Roman numerals.

Symbol  Value
I       1
V       5
X       10
L       50
C       100
D       500
M       1,000

Specs:

1) The program will translate 1 to symbol I and return the symbol as output.
Example Input: 1 Example Output: I

2) The program will translate 1, 5, 10, 50, 100, 500, and 1,000 to the corresponding symbols (I, V, X, L, C, D, M, respectively).
Example Input: 5 Example Output: V

3) The program will add the symbols together up to three times.
Example Input: 3 Example output: III

4) Once the program has 3 of the same symbol the next iteration will subtract two of the current symbol and add the next symbol in the array to the end.
Example Input: 4 Example Output: IV

5) The program will do nothing to non-numerical characters.
Example Input: blah Example Output: blah
