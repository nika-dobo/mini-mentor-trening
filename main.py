# list = [2,4,6,[3,4,[3,5,6,6],3]]

# print(list[-1][2][1])


# i = 0 

# while i < len(list):
#     print(list[i])
#     i += 1 



num = 5

while True:
    ans = int(input("enter number: "))
    if ans == num:
        print("you won")
        break
    else:
        print("retry")


n = int(input("enter num: "))
fact = 1
i = 1
while i <= n:
    fact *= i
    i += 1
print(fact)