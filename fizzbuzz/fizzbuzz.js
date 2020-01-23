/*
 * Found some cool variations at
 * https://gist.github.com/jaysonrowe/1592432#file-fizzbuzz-js-L1
 * 
 * Write a program that prints the numbers 1-20, each on a new line
 * For each number that is a multiple of 3, print “Fizz” instead of the number
 * For each number that is a multiple of 5, print “Buzz” instead of the number
 * For each number that is a multiple of both 3 and 5, print “FizzBuzz” instead of the number
 */

for (var i=0; i <= 20; i++)
{
    if (i % 15 == 0)
        console.log(i, " FizzBuzz");
    else if (i % 3 == 0)
        console.log(i, " Fizz");
    else if (i % 5 == 0)
        console.log(i, " Buzz");
    else
        console.log(i);
}