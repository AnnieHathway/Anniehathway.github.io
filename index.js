var btns = document.querySelectorAll("#picbtn > li");

var olis = document.querySelectorAll("#pic > li");

console.log('数据信息', btns);
console.log('数据信息22', olis);

var idx = 0;
var ADtimer = null;

function changepic() {
    for (i = 0; i < olis.length; i++) {
        olis[i].className = "";
        btns[i].className = "";
    }
    olis[idx].className = "now";
    btns[idx].className = "on";
}
function autochange() {
    idx++;
    if (idx > olis.length - 1) {
        idx = 0;
    }
    changepic();
}
ADtimer = setInterval(autochange, 2000);
for (i = 0; i < btns.length; i++) {
    btns[i].index = i;
    btns[i].onmouseover = function () {
        clearInterval(ADtimer);
        idx = this.index;
        changepic();
    }
    btns[i].onmouseout = function () {
        ADtimer = setInterval(autochange, 2000);
    }
}
