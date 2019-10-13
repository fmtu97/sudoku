g11 = document.getElementById("g11");
g12 = document.getElementById("g12");
g13 = document.getElementById("g13");
g14 = document.getElementById("g14");
g15 = document.getElementById("g15");
g16 = document.getElementById("g16");
g17 = document.getElementById("g17");
g18 = document.getElementById("g18");
g19 = document.getElementById("g19");
g21 = document.getElementById("g21");
g22 = document.getElementById("g22");
g23 = document.getElementById("g23");
g24 = document.getElementById("g24");
g25 = document.getElementById("g25");
g26 = document.getElementById("g26");
g27 = document.getElementById("g27");
g28 = document.getElementById("g28");
g29 = document.getElementById("g29");
g31 = document.getElementById("g31");
g32 = document.getElementById("g32");
g33 = document.getElementById("g33");
g34 = document.getElementById("g34");
g35 = document.getElementById("g35");
g36 = document.getElementById("g36");
g37 = document.getElementById("g37");
g38 = document.getElementById("g38");
g39 = document.getElementById("g39");
g41 = document.getElementById("g41");
g42 = document.getElementById("g42");
g43 = document.getElementById("g43");
g44 = document.getElementById("g44");
g45 = document.getElementById("g45");
g46 = document.getElementById("g46");
g47 = document.getElementById("g47");
g48 = document.getElementById("g48");
g49 = document.getElementById("g49");
g51 = document.getElementById("g51");
g52 = document.getElementById("g52");
g53 = document.getElementById("g53");
g54 = document.getElementById("g54");
g55 = document.getElementById("g55");
g56 = document.getElementById("g56");
g57 = document.getElementById("g57");
g58 = document.getElementById("g58");
g59 = document.getElementById("g59");
g61 = document.getElementById("g61");
g62 = document.getElementById("g62");
g63 = document.getElementById("g63");
g64 = document.getElementById("g64");
g65 = document.getElementById("g65");
g66 = document.getElementById("g66");
g67 = document.getElementById("g67");
g68 = document.getElementById("g68");
g69 = document.getElementById("g69");
g71 = document.getElementById("g71");
g72 = document.getElementById("g72");
g73 = document.getElementById("g73");
g74 = document.getElementById("g74");
g75 = document.getElementById("g75");
g76 = document.getElementById("g76");
g77 = document.getElementById("g77");
g78 = document.getElementById("g78");
g79 = document.getElementById("g79");
g81 = document.getElementById("g81");
g82 = document.getElementById("g82");
g83 = document.getElementById("g83");
g84 = document.getElementById("g84");
g85 = document.getElementById("g85");
g86 = document.getElementById("g86");
g87 = document.getElementById("g87");
g88 = document.getElementById("g88");
g89 = document.getElementById("g89");
g91 = document.getElementById("g91");
g92 = document.getElementById("g92");
g93 = document.getElementById("g93");
g94 = document.getElementById("g94");
g95 = document.getElementById("g95");
g96 = document.getElementById("g96");
g97 = document.getElementById("g97");
g98 = document.getElementById("g98");
g99 = document.getElementById("g99");


glist = [
    [g11,g12,g13,g14,g15,g16,g17,g18,g19],
    [g21,g22,g23,g24,g25,g26,g27,g28,g29],
    [g31,g32,g33,g34,g35,g36,g37,g38,g39],
    [g41,g42,g43,g44,g45,g46,g47,g48,g49],
    [g51,g52,g53,g54,g55,g56,g57,g58,g59],
    [g61,g62,g63,g64,g65,g66,g67,g68,g69],
    [g71,g72,g73,g74,g75,g76,g77,g78,g79],
    [g81,g82,g83,g84,g85,g86,g87,g88,g89],
    [g91,g92,g93,g94,g95,g96,g97,g98,g99]];

originGrid = null;
answerGrid = null;
currentGrid = null;
emptyGrid = [[0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0]];

class gItem{
    selectedItem = null;
    x = 0;
    y = 0;
    ava = false;
    clearSelect(){
        if(this.ava){
            this.selectedItem.style.backgroundColor = "paleturquoise";
        }
        this.selectedItem = null;
        this.x = 0;
        this.y = 0;
        this.ava = false;
    }
    setItem(x,y){
        if(this.ava){
            this.selectedItem.style.backgroundColor = "paleturquoise";
        }
        this.x = x;
        this.y = y;
        this.selectedItem = document.getElementById(`g${x}${y}`);
        this.checkOrigin(originGrid);
        if(this.ava){
            this.selectedItem.style.backgroundColor = "aquamarine";
        }
    }
    checkOrigin(originGrid){
        if(originGrid[this.x-1][this.y-1] == 0){
            this.ava = true;
        } else{
            this.ava = false;
        }
    }
    updateItem(num){
        if(this.ava == true){
            currentGrid[this.x-1][this.y-1] = num;
            if(num == 0){
                this.selectedItem.innerHTML = "";
            } else{
                this.selectedItem.innerHTML = num;
            }
        }
        checkComp();
    }
}

item = new gItem();

function clickOnItem(x,y){
    console.log(`Origin: ${originGrid[x-1][y-1]}  Current: ${currentGrid[x-1][y-1]}  Answer: ${answerGrid[x-1][y-1]}`);
    item.setItem(x,y);
}

function clickOnSelect(num){
    item.updateItem(num);
}

function checkConflict(){
    item.clearSelect();
    for(i=0;i<originGrid.length;i++){
        for(j=0;j<originGrid[i].length;j++){
            if(currentGrid[i][j] != 0){
                if(currentGrid[i][j] != answerGrid[i][j]){
                    glist[i][j].style.backgroundColor = "lightsalmon";
                }
            }
        }
    }
}

function clearGrid(){
    item.clearSelect();
    for(i=0;i<originGrid.length;i++){
        for(j=0;j<originGrid[i].length;j++){
            if(originGrid[i][j] == 0){
                glist[i][j].innerHTML = "";
                glist[i][j].style.backgroundColor = "paleturquoise";
            }
        }
    }
}

function checkComp(){
    for(i=0;i<originGrid.length;i++){
        for(j=0;j<originGrid[i].length;j++){
            if(answerGrid[i][j] != currentGrid[i][j]){
                return;
            }
        }
    }
    compAll();
}

function compAll(){
    item.clearSelect();
    originGrid = emptyGrid;
    colorAll("greenyellow");
}

function colorAll(color){
    for(i=0;i<originGrid.length;i++){
        for(j=0;j<originGrid[i].length;j++){
            glist[i][j].style.backgroundColor = color;
        }
    }
}




/* Below are presets and should be replaced by a generator*/
//These data are from www.sudokugame.org (mid level)
//19-10-11
preset1 = [[0, 4, 3, 0, 7, 0, 8, 0, 0], [0, 0, 6, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 5, 0, 0], [0, 0, 0, 0, 3, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 9, 0, 0], [0, 0, 0, 0, 4, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 3], [6, 0, 0, 0, 0, 5, 0, 0, 0], [0, 0, 7, 0, 0, 9, 0, 0, 6]];
preset1a = [[9, 4, 3, 5, 7, 2, 8, 6, 1], [5, 1, 6, 4, 8, 3, 7, 2, 9], [7, 8, 2, 6, 9, 1, 5, 3, 4], [4, 7, 5, 9, 3, 8, 6, 1, 2], [1, 3, 8, 2, 5, 6, 9, 4, 7], [2, 6, 9, 1, 4, 7, 3, 8, 5], [8, 5, 1, 7, 6, 4, 2, 9, 3], [6, 9, 4, 3, 2, 5, 1, 7, 8], [3, 2, 7, 8, 1, 9, 4, 5, 6]];
//19-10-10
preset2 = [[0, 0, 0, 0, 2, 0, 0, 0, 0], [9, 6, 0, 0, 0, 0, 5, 0, 0], [0, 0, 0, 0, 7, 8, 0, 0, 4], [0, 0, 0, 1, 0, 0, 6, 0, 0], [0, 0, 8, 0, 0, 0, 0, 3, 0], [7, 0, 0, 0, 0, 0, 0, 0, 0], [0, 3, 0, 6, 0, 0, 0, 0, 0], [0, 1, 0, 0, 4, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 7]];
preset2a = [[8, 7, 4, 5, 2, 6, 9, 1, 3], [9, 6, 2, 3, 1, 4, 5, 7, 8], [3, 5, 1, 9, 7, 8, 2, 6, 4], [5, 4, 3, 1, 9, 7, 6, 8, 2], [1, 2, 8, 4, 6, 5, 7, 3, 9], [7, 9, 6, 8, 3, 2, 4, 5, 1], [4, 3, 7, 6, 8, 9, 1, 2, 5], [2, 1, 5, 7, 4, 3, 8, 9, 6], [6, 8, 9, 2, 5, 1, 3, 4, 7]];
//19-10-09
preset3 = [[0, 0, 0, 2, 0, 0, 0, 0, 0], [0, 9, 1, 0, 0, 5, 0, 0, 3], [0, 0, 8, 0, 0, 0, 0, 0, 0], [4, 0, 0, 0, 0, 0, 7, 2, 0], [0, 0, 0, 0, 6, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [2, 0, 6, 7, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 3, 0], [0, 0, 0, 0, 0, 0, 9, 0, 1]];
preset3a = [[5, 4, 7, 2, 9, 3, 1, 6, 8], [6, 9, 1, 8, 7, 5, 2, 4, 3], [3, 2, 8, 1, 4, 6, 5, 9, 7], [4, 1, 3, 9, 5, 8, 7, 2, 6], [7, 8, 2, 4, 6, 1, 3, 5, 9], [9, 6, 5, 3, 2, 7, 8, 1, 4], [2, 3, 6, 7, 1, 9, 4, 8, 5], [1, 7, 9, 5, 8, 4, 6, 3, 2], [8, 5, 4, 6, 3, 2, 9, 7, 1]];
//19-10-08
preset4 = [[0, 0, 0, 0, 0, 0, 7, 0, 6], [3, 0, 1, 0, 2, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 9, 0, 0, 0, 0, 0, 0, 0], [0, 6, 7, 0, 0, 5, 4, 0, 0], [0, 0, 0, 0, 3, 0, 0, 1, 0], [0, 0, 9, 0, 0, 0, 0, 3, 0], [0, 0, 0, 0, 0, 7, 0, 0, 0], [0, 0, 0, 4, 0, 6, 0, 0, 0]];
preset4a = [[9, 8, 5, 1, 4, 3, 7, 2, 6], [3, 7, 1, 6, 2, 9, 5, 4, 8], [4, 2, 6, 5, 7, 8, 3, 9, 1], [1, 9, 3, 8, 6, 4, 2, 7, 5], [2, 6, 7, 9, 1, 5, 4, 8, 3], [8, 5, 4, 7, 3, 2, 6, 1, 9], [6, 4, 9, 2, 5, 1, 8, 3, 7], [5, 1, 2, 3, 8, 7, 9, 6, 4], [7, 3, 8, 4, 9, 6, 1, 5, 2]];
//19-10-07
preset5 = [[6, 0, 4, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 2, 0, 3, 0, 5], [0, 0, 0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 5, 0, 0, 0, 0, 0], [9, 0, 0, 8, 3, 0, 0, 0, 0], [4, 0, 0, 0, 0, 0, 0, 7, 0], [0, 0, 5, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 4, 0, 6, 0], [0, 3, 0, 1, 0, 0, 0, 0, 0]];
preset5a = [[6, 1, 4, 9, 5, 3, 7, 2, 8], [7, 8, 9, 6, 2, 1, 3, 4, 5], [5, 2, 3, 4, 7, 8, 6, 9, 1], [3, 7, 2, 5, 4, 9, 8, 1, 6], [9, 6, 1, 8, 3, 7, 2, 5, 4], [4, 5, 8, 2, 1, 6, 9, 7, 3], [8, 4, 5, 7, 6, 2, 1, 3, 9], [1, 9, 7, 3, 8, 4, 5, 6, 2], [2, 3, 6, 1, 9, 5, 4, 8, 7]];


presets = [];
presets.push(preset1);
presets.push(preset2);
presets.push(preset3);
presetsa = [];
presetsa.push(preset1a);
presetsa.push(preset2a);
presetsa.push(preset3a);

function init(){
    var r = Math.floor(Math.random()*presets.length);
    originGrid = presets[r];
    answerGrid = presetsa[r];
    currentGrid = [];
    for(i=0;i<glist.length;i++){
        currentGrid.push([]);
        for(j=0;j<glist[i].length;j++){
            currentGrid[i].push(originGrid[i][j]);
        }
    }
    for(i=0;i<glist.length;i++){
        for(j=0;j<glist[i].length;j++){
            if(originGrid[i][j] == 0){
                glist[i][j].style.backgroundColor = "paleturquoise";
                glist[i][j].innerHTML = "";
            } else{
                glist[i][j].style.backgroundColor = "skyblue";
                glist[i][j].innerHTML = originGrid[i][j];
            }
        }
    }
}


init();