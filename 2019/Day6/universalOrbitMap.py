
class orbitDetails:
    def __init__(self, id, parent, children):
        self.id = id
        self.parent = parent
        self.children = children

    def addChild(self, child):
        self.children.append(child)

    def display(self):
        return {
            "id": self.id,
            "parent": self.parent,
            "children": self.children
        }

def main():
    with open ("./day6/orbitsTest.txt", 'r') as f:
        data = f.readlines()
        orbitInputs = []
        for line in data:
            orbitInputs.append(line[:-1].split(")"))
    
    for orbitPair in orbitInputs:
            parent = orbitPair[0]
            child = orbitPair[1]
            ob = orbitDetails(parent, "", child)
            print(ob.display())    
 
if __name__ == '__main__':
    main()