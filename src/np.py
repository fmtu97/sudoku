def div(i,j):
    print( '    <div class="grid-item" id="g{0}{1}" onclick="clickOnItem({0},{1})">0</div>'.format(i,j))

def subgrid():
     print('<div class="sub-grid">')

def gridend():
    print('</div>')


def gg():
    for d in range(1,10,3):
        for a in range(1,10,3):
            subgrid()
            for b in range(d,d+3,1):
                for c in range(a,a+3,1):
                    div(b,c)
            gridend()
        
    
def gl():
    for i in range(1,10,1):
        print("[g{0}1,g{0}2,g{0}3,g{0}4,g{0}5,g{0}6,g{0}7,g{0}8,g{0}9],".format(i))


def gd():
    for i in range(1,10,1):
        for j in range(1,10,1):
            print('g{0}{1} = document.getElementById("g{0}{1}");'.format(i,j))


def mp():
    p = []
    for i in range(9):
        p.append([])
        for j in range(9):
            p[i].append(int(input("{0},{1}:".format(i+1,j+1))))

    print(p)

def sd():
    for i in range(10):
        print('<div class="select-item" id="s{0}" onclick="clickOnSelect({0})">{0}</div>'.format(i))
