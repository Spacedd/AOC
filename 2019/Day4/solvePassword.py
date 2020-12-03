def checkIncreasing(attempt):
    pwd = str(attempt)
    if len(pwd) == 6:
        for i in range(5):
            if pwd[i] > pwd[i+1]:            
                return False
        return True
    return False

def check(attempt, part):
    return checkDouble(attempt, part) and checkIncreasing(attempt)

def checkDouble(attempt, part):
    pwd = str(attempt)
    for i in range(10):
        if part == 1 and str(pwd).count(str(i)) >= 2:
            return True
        elif part == 2 and str(pwd).count(str(i)) == 2:
            return True
    return False

if __name__ == '__main__':
    lower = 402328
    upper = 864247
    p1 = 0
    p2 = 0
    for attempt in range(lower, upper):
        if check(attempt, 1): p1+=1 # part1
        if check(attempt, 2): p2+=1 # part2
    print(p1)
    print(p2)