import csv
def getValues(pointer, instruction, puzzle):
    length = len(str(instruction))
    reversedInstruction = instruction[length::-1]
    mode = reversedInstruction[2:]
    if mode and mode[0] == "1":
        firstValue = puzzle[pointer + 1]
    else:
        firstValue = puzzle[puzzle[pointer + 1]]

    if mode and len(str(mode)) == 2 and mode[1] == "1":
        secondValue = puzzle[pointer + 2]
    else:
        secondValue = puzzle[puzzle[pointer + 2]]
    return firstValue, secondValue

def add(pointer, instruction, puzzle):
    firstValue, secondValue = getValues(pointer, instruction, puzzle)
    puzzle[puzzle[pointer + 3]] = firstValue + secondValue
    pointer += 4
    return pointer

def multi(pointer, instruction, puzzle):
    firstValue, secondValue = getValues(pointer, instruction, puzzle)
    puzzle[puzzle[pointer + 3]] = firstValue * secondValue
    pointer += 4 
    return pointer

def inputValue(pointer, puzzle):
    value = 5
    puzzle[puzzle[pointer + 1]] = value
    pointer += 2
    return pointer

def outputValue(pointer, puzzle):
    print(puzzle[puzzle[pointer + 1]])
    pointer += 2
    return pointer

def stop(pointer, puzzle):
    pointer = len(puzzle)
    return pointer

def trueJump(pointer, instruction, puzzle):
    firstValue, secondValue = getValues(pointer, instruction, puzzle)
    if firstValue:
        pointer = secondValue
    else:
        pointer += 3
    return pointer

def falseJump(pointer, instruction, puzzle):
    firstValue, secondValue = getValues(pointer, instruction, puzzle)
    if not firstValue:
        pointer = secondValue
    else:
        pointer += 3
    return pointer

def lessThan(pointer, instruction, puzzle):
    firstValue, secondValue = getValues(pointer, instruction, puzzle)
    if int(firstValue) < int(secondValue):
        puzzle[puzzle[pointer + 3]] = 1
    else:
        puzzle[puzzle[pointer + 3]] = 0
    pointer += 4
    return pointer

def equals(pointer, instruction, puzzle):
    firstValue, secondValue = getValues(pointer, instruction, puzzle)
    if int(firstValue) == int(secondValue):
        puzzle[puzzle[pointer + 3]] = 1
    else:
        puzzle[puzzle[pointer + 3]] = 0
    pointer += 4
    return pointer

def getOpCode(pointer, instruction, puzzle):
    instructionString = str(instruction)
    if instructionString[-2:] in ("1", "01"): return add(pointer, instructionString, puzzle)
    if instructionString[-2:] in ("2", "02"): return multi(pointer, instructionString, puzzle)
    if instructionString[-2:] == "3": return inputValue(pointer, puzzle)
    if instructionString[-2:] == "4": return outputValue(pointer, puzzle)
    if instructionString[-2:] in ("5", "05"): return trueJump(pointer, instructionString, puzzle)
    if instructionString[-2:] in ("6", "06"): return falseJump(pointer, instructionString, puzzle)
    if instructionString[-2:] in ("7", "07"): return lessThan(pointer, instructionString, puzzle)
    if instructionString[-2:] in ("8", "08"): return equals(pointer, instructionString, puzzle)
    if instructionString[-2:] == "99":
        return stop(pointer, puzzle) 
    else:
        pointer += 1
        return pointer

def processOpCode(puzzle):
    pointer = 0
    while True:
        pointer = getOpCode(pointer, puzzle[pointer], puzzle)
        if pointer == len(puzzle):# + 1:
            break

if __name__ == '__main__':
    data = [3,225,1,225,6,6,1100,1,238,225,104,0,101,14,135,224,101,-69,224,224,4,224,1002,223,8,223,101,3,224,224,1,224,223,223,102,90,169,224,1001,224,-4590,224,4,224,1002,223,8,223,1001,224,1,224,1,224,223,223,1102,90,45,224,1001,224,-4050,224,4,224,102,8,223,223,101,5,224,224,1,224,223,223,1001,144,32,224,101,-72,224,224,4,224,102,8,223,223,101,3,224,224,1,223,224,223,1102,36,93,225,1101,88,52,225,1002,102,38,224,101,-3534,224,224,4,224,102,8,223,223,101,4,224,224,1,223,224,223,1102,15,57,225,1102,55,49,225,1102,11,33,225,1101,56,40,225,1,131,105,224,101,-103,224,224,4,224,102,8,223,223,1001,224,2,224,1,224,223,223,1102,51,39,225,1101,45,90,225,2,173,139,224,101,-495,224,224,4,224,1002,223,8,223,1001,224,5,224,1,223,224,223,1101,68,86,224,1001,224,-154,224,4,224,102,8,223,223,1001,224,1,224,1,224,223,223,4,223,99,0,0,0,677,0,0,0,0,0,0,0,0,0,0,0,1105,0,99999,1105,227,247,1105,1,99999,1005,227,99999,1005,0,256,1105,1,99999,1106,227,99999,1106,0,265,1105,1,99999,1006,0,99999,1006,227,274,1105,1,99999,1105,1,280,1105,1,99999,1,225,225,225,1101,294,0,0,105,1,0,1105,1,99999,1106,0,300,1105,1,99999,1,225,225,225,1101,314,0,0,106,0,0,1105,1,99999,108,226,677,224,1002,223,2,223,1006,224,329,1001,223,1,223,1007,226,226,224,1002,223,2,223,1006,224,344,101,1,223,223,1008,226,226,224,102,2,223,223,1006,224,359,1001,223,1,223,107,226,677,224,1002,223,2,223,1005,224,374,101,1,223,223,1107,677,226,224,102,2,223,223,1006,224,389,101,1,223,223,108,677,677,224,102,2,223,223,1006,224,404,1001,223,1,223,1108,677,226,224,102,2,223,223,1005,224,419,101,1,223,223,1007,677,226,224,1002,223,2,223,1006,224,434,101,1,223,223,1107,226,226,224,1002,223,2,223,1006,224,449,101,1,223,223,8,677,226,224,102,2,223,223,1006,224,464,1001,223,1,223,1107,226,677,224,102,2,223,223,1005,224,479,1001,223,1,223,1007,677,677,224,102,2,223,223,1005,224,494,1001,223,1,223,1108,677,677,224,102,2,223,223,1006,224,509,101,1,223,223,1008,677,677,224,102,2,223,223,1005,224,524,1001,223,1,223,107,226,226,224,1002,223,2,223,1005,224,539,101,1,223,223,7,226,226,224,102,2,223,223,1005,224,554,101,1,223,223,1108,226,677,224,1002,223,2,223,1006,224,569,1001,223,1,223,107,677,677,224,102,2,223,223,1005,224,584,101,1,223,223,7,677,226,224,1002,223,2,223,1005,224,599,101,1,223,223,108,226,226,224,1002,223,2,223,1005,224,614,101,1,223,223,1008,677,226,224,1002,223,2,223,1005,224,629,1001,223,1,223,7,226,677,224,102,2,223,223,1005,224,644,101,1,223,223,8,677,677,224,102,2,223,223,1005,224,659,1001,223,1,223,8,226,677,224,102,2,223,223,1006,224,674,1001,223,1,223,4,223,99,226]
    processOpCode(data)
