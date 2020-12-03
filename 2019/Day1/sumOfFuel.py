import csv

def r(f, miniSum):
    fuel = getFuel(f)
    if fuel > 0:
        miniSum += fuel        
        return r(fuel, miniSum)
    else: return miniSum

def getFuel(x):
    return int(int(x)/3) - 2

if __name__ == '__main__':
    with open ("mass.txt", 'r') as f:
        data = csv.reader(f)
        sum = 0
        for line in data:
            sum += r(line[0], 0)
            print(sum)