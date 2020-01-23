#def someoutput

for num in range(21):
    someoutput = ''
    if num % 3 == 0:
        someoutput += 'Fizz'
    if num % 5 == 0:
        someoutput += 'Buzz'
    if (num % 3 != 0 and num % 5 != 0):
        continue
        #someoutput = str(num)
    # need to convert int to string (duh)
    print(str(num) + " " + someoutput)
