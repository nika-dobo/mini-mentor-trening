

# num = int(input("enter number: "))

# for i in range(2, num + 1, 2):#star - 2, end - num, step - 2
#     print(i)

# #range ===> step --->  star(2) + step(2) === 1) 2 + 2 = 4, 2) 4 + 2 = 6, 3) 6 + 2 = 8, 4) 8 + 2 = 10...



# num = int(input("enter number: "))


sum = 0

for i in range(100): #0,1,2,3,4,5,6,7,8,9,10,11,12,13...
    if i % 2 == 0: #even
        sum += i
        print(i)
print(sum)        

