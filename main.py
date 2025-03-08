# 2)შექმენი ფუნქცია, რომელიც აბრუნებს სამუშაო დღეს შეყვანილი ნომრის მომხმარებელეი ჩაწერე ამ რიცხვს მიხედვით:
# 1 print "Sunday"
# 2 print "Monday"
# 3 print "Tuesday"
# 4 print "Wednesday"
# 5 print "Thursday"
# 6 print "Friday"
# 7 print "Saturday"
# Otherwise returns "Wrong, please enter a number between 1 and 7"

def day_of_week():
    day = int(input("Please enter a number between 1 and 7: "))
    if day == 1:
        return "Sunday"
    elif day == 2:
        return "Monday"
    elif day == 3:
        return "Tuesday"
    elif day == 4:
        return "Wednesday"
    elif day == 5:
        return "Thursday"
    elif day == 6:
        return "Friday"
    elif day == 7:
        return "Saturday"
    else:
        return "Wrong, please enter a number between 1 and 7"

print(day_of_week())
print(day_of_week())
print(day_of_week())
print(day_of_week())
print(day_of_week())
print(day_of_week())