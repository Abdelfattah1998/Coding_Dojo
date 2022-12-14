def toword( n):
    d = { 0 : '', 1 : 'one', 2 : 'two', 3 : 'three', 4 : 'four', 5 : 'five',
          6 : 'six', 7 : 'seven', 8 : 'eight', 9 : 'nine', 10 : 'ten',
          11 : 'eleven', 12 : 'twelve', 13 : 'thirteen', 14 : 'fourteen',
          15 : 'fifteen', 16 : 'sixteen', 17 : 'seventeen', 18 : 'eighteen',
          19 : 'nineteen', 20 : 'twenty',
          30 : 'thirty', 40 : 'forty', 50 : 'fifty', 60 : 'sixty',
          70 : 'seventy', 80 : 'eighty', 90 : 'ninety' }
    ones=n%10 
    hundreds=int((n/100)%10)
    if n<1000000:
        if n<1000:
            if hundreds !=0:
                return d[hundreds]+" hundreds "+toword(n%100)
            if n<=20 :
                return d[n]
            else:
                m=n//10 *10
                return d[m]+" "+d[ones]
        else:
            return toword(n//1000)+" Thousands "+toword(n%1000)

    else:
        return toword(n//1000000)+" millions "+toword(n%1000000)
print(toword(15231501))