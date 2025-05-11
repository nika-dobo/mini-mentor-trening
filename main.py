while True:
    num = int(input("enter number:"))
    if num == 9:
        print("answer correct")
        break
    else:
        print("answer incorrect")

for i in range(10):
    if i == 8:
        break
    else:
        print(i)