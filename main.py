
my_list = []  # ცარიელი სია


num_elements = int(input("რამდენი ელემენტის დამატება გსურთ? "))
for i in range(num_elements):
    element = input("შეიყვანეთ ელემენტი: ")
    my_list.append(element)



more = input("გსურთ კიდევ ელემენტის დამატება? (კი/არა): ").strip().lower()
if more == "yes":
    index = int(input("რომელ პოზიციაზე გსურთ ელემენტის დამატება? (0-{}): ".format(len(my_list))))
    new_element = input("შეიყვანეთ დამატებითი ელემენტი: ")
    my_list.insert(index, new_element)
elif more == "no":
    print("okey")

    
print("საბოლოო სია:", my_list)

