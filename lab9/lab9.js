var el_1 = document.getElementById('input_k1');
var el_2 = document.getElementById('input_k2');
let nop = ""; //считает все
el_1.value=0;
function numbers(a){
    nop = nop+a;
    el_1.value = a;
    el_2.value = nop.slice(0, -1)+"  ";
}

function symbol(m){
    a = String.fromCharCode(m);
    nop = nop+a;
    el_1.value = a;
    el_2.value = nop.slice(0, -1)+"  ";
}

function equally(){
    el_1.value=eval(nop);
    el_2.value="";
    nop=eval(nop);
}

function C(){
    el_1.value=0;
    el_2.value="";
    nop="";
}

function returne(){
    if (nop == el_1.value){
    el_1.value=el_1.value.slice(0, -1);
    nop = el_1.value;
    el_2.value=nop;
    }
    else{
    el_1.value=nop.slice(0, -1);
    nop = el_1.value;
    el_2.value=el_1.value;
    }
}