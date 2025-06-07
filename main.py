

list = [1,2,3,4,5,"hi",6,7,8,9,0]


# вариани 1
index = 0
for i in list:
    print(str(index) + "-" + str(i))
    index += 1


# вариани 2
for i in range(len(list)): # len(list) = 11 | range(len(list)) = range(11)
    print(str(i) + "-" + str(list[i]))



