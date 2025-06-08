

list = [1,2,3,4,5,"hi",6,7,8,9,0,10]


print("Option 1")
# Option 1
index = 0
for i in list:
    print(str(index) + "-" + str(i))
    index += 1

print()

print("Option 2")
# Option 2
for i in range(len(list)): #len(list) = 12 | range(len(list)) = range(12)
    print(str(i) + "-" + str(list[i]))


