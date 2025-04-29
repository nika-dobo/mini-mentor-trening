def ips_between(start, end):
    start = start.split(".")
    end = end.split(".")
    
    num1 = int(start[0]) * 8 ** 4 + int(start[1]) * 8 ** 3 + int(start[2]) * 8 ** 2 + int(start[3])
    num2 = int(end[0]) * 8 ** 4 + int(end[1]) * 8 ** 3 + int(end[2]) * 8 ** 2 + int(end[3])


    print(num2 - num1)


ips_between("20.0.0.10", "20.0.1.0")

