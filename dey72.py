

n = int(input("enter lenght: "))

user_list = []

i = 0

while i < n:
    string = "enter element  #" + str(i + 1) + ": "
    user_list.append(input(string))
    i += 1

print(user_list)

