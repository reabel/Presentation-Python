'''
 Fizzbuzz py
 Write a program that prints the numbers 1-100 (20), each on a new line
 For each number that is a multiple of 3, print “Fizz” instead of the number
 For each number that is a multiple of 5, print “Buzz” instead of the number
 For each number that is a multiple of both 3 and 5, print “FizzBuzz” instead of the number

 Complicated solution (w/ testing)
 https://www.blog.pythonlibrary.org/2019/09/18/python-code-kata-fizzbuzz/
'''

def fizzbuzz(n):

    if n % 3 == 0 and n % 5 == 0:
        return 'FizzBuzz'
    elif n % 3 == 0:
        return 'Fizz'
    elif n % 5 == 0:
        return 'Buzz'
    else:
        return str(n)
'''
this throws an error:
for two reasons: 
    - print is structured like a function in python3
    - xrange is replaced by range
print "\n".join(fizzbuzz(n) for n in xrange(1, 21))
'''



print("\n".join(fizzbuzz(n) for n in range(1, 21)))