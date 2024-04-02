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
"At the start of a recursive call to the function 'fibFunc(arr, n, iter)' the value of arr[iter-1] must be the correct (n-1)th fibonacci number, the value of arr[iter-2] must be the correct (n-2)th fibonacci number, the number of elements in arr must be equal to iter, and the value to be placed at arr[iter] must be equal to arr[iter-1] + arr[iter-2]."

Invariant Reasoning: 
The reason why this is a good invariant is because stands true at the the start of any recursive step, it implies the array contains the correct fibonacci values from arr[0] to arr[iter-1], and it guarantees the value to be places at arr[iter] will the corresponding fibonacci value for index iter.

For n = 2, the number of elements is equal to 2 original + 0 previous recursive step + 1 being added at arr[2],
and arr[2] = (arr[0] = 0 (correct (n-1)th fibonacci value)) + (arr[1] = 1 (correct (n-2)th fibonacci value))

For n = 3, the number of elements is equal to 2 original + 1 previous recursive step + 1 being added at arr[3],
and arr[3] = (arr[1] = 1 (correct (n-1)th fibonacci value)) + (arr[2] = 1 (correct (n-2)th fibonacci value))

For n = 4, the number of elements is equal to 2 original + 2 previous recursive step + 1 being added at arr[4].
and arr[4] = (arr[2] = 1 (correct (n-1)th fibonacci value)) + (arr[3] = 1 (correct (n-2)th fibonacci value))

And this pattern continues until we reach an iter greater then n where our recursion stops. So we can presume for each step of recursion, the invariant holds true. 