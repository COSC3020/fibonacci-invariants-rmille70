[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/rzkZS2Jf)
# Fibonacci Invariants

Recall the definition of the Fibonacci series: the first number is 0, the second
1, and each subsequent number is the sum of the two numbers preceding it.
Implement a function that computes the Fibonacci numbers recursively, storing
the results in an array.

For example, the return value of `fib(7)` is the following array:

| index |  0  |  1  |  2  |  3  |  4  |  5  |  6  |  7  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- |
| value |  0  |  1  |  1  |  2  |  3  |  5  |  8  |  13 |

Add your code in `code.js`. Test your new function; I've provided some basic
testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

## Invariant

What is a good invariant for your recursive implementation of `fib()`
i.e. something that is always true at the beginning of the recursive call?

Hint: Think about what the "state of the world" is here and what you can say
about it at the start of each recursive call. Your invariant must say something
about the current recursive call.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. You do not need to prove that the invariant is correct. Add
your answer to this markdown file.

A good invariant for this code would be the following:
"At the start of any call to the recursive function 'fibFunc()' for a the calculation of some fibonacci value at index i, the number of elements in the array 'arr' must be equal to the value's index: i."

Invariant Reasoning: 
The reason why this is a good invariant is because stands true any time that fibFunc() is called. For n > 1, in each recursive step, we add an element. So for n = 2, we are given an array with two elements and place their sum at index 2. For index 3, the number of elements is equal to the number of elements in the original array (which is 2) plus the one added in the last recursive step. And at index 4, the number of elements in the array will be equal to 2 original + 2 added in the previous recursive steps. And this pattern continues until we reach an index greater then n where our recursion stops. So we can presume for each step of recursion, the invariant holds true. 