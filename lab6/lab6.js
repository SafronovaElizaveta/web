function click_1() {
    document.getElementById('cat').style.display = 'inline';
    document.getElementById('dog').style.display = 'none';
    document.getElementsByClassName('colom_1')[0].style.width = "560px";
    document.getElementById('dog').style.width = '400px';
    document.getElementById('cat').style.width = '400px';   
}

function click_2() {
    document.getElementById('cat').style.display = 'inline';
    document.getElementById('cat').style.width = '250px';
    
    document.getElementById('cat').style.margin = '15px 15px 80px 15px';
    document.getElementById('dog').style.display = 'inline';
    document.getElementById('dog').style.width = '250px';
    document.getElementById('dog').style.margin = '15px 15px 80px 15px';
    document.getElementsByClassName('colom_1')[0].style.width = "300px"; 
}

function click_3() {
    document.getElementById('cat').style.display = 'none';
    document.getElementById('cat').style.width = '400px';
    document.getElementById('dog').style.display = 'inline';
    document.getElementById('dog').style.width = '400px';
    document.getElementsByClassName('colom_1')[0].style.width = "40px";
    document.getElementsByClassName('colom_2')[0].style.width = "560px";
}
