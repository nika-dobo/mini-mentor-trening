time = int(input("enter time here:"))
weather = input("enter weather here:")
if_friend_can_go = input("enter yes or no here: ")


if time >= 8: #this is pm
    print("you can not go")
elif time <= 8:
    print("you can go")


if weather == "sunny":
    print("you can go")
elif weather == "cloudy":
    print("you can maybe go")
elif weather == "rainy":
    print("you cant go")



if if_friend_can_go == "yes":
    print("you can go with him")
elif if_friend_can_go == 'no':
    print('you can not go')


if time <= 8 and weather == 'sunny' or weather == "cloudy" and if_friend_can_go == 'yes':
    print('you can go')
else:
    print('you cannot go')