function getRandom(min, max) {
    return Math.random() * (max - min) + min;
    }

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const a5 = getRandomInt(1, 4);

    
document.getElementById("square").onclick = function(){
    var number = document.getElementById("number").value;
    for (let i = 0; i < number; i++) { 
    var square = document.createElement("div");
    square.classList.add("squares")
    var hight = getRandom(50, 200);
    square.style.height =  hight+ "px";
    square.style.width =  hight+ "px";
    margin_left = getRandom(0, 1200);
    margin_top = getRandom(0, 400);
    square.style.marginLeft = margin_left + "px";
    square.style.marginTop = margin_top + "px";
    document.body.appendChild(square);
    }
}

document.getElementById("triangle").onclick = function(){
    var number = document.getElementById("number").value;
    for (let i = 0; i < number; i++) { 
    var triangle = document.createElement("div");
    triangle.classList.add("triangles")
    margin_left = getRandom(0, 1200);
    margin_top = getRandom(0, 300);
    triangle.style.marginLeft = margin_left + "px";
    triangle.style.marginTop = margin_top + "px";
    var a1 = getRandom(10, 200);
    var a2 = getRandom(10, 200);
    var a3 = getRandom(10, 200);
    var a4 = getRandom(10, 200);
    triangle.style.borderTopWidth = a1 +"px";
    triangle.style.borderLeftWidth = a2 +"px";
    triangle.style.borderRightWidth = a3 +"px";
    triangle.style.borderBottomWidth = a4 +"px";
    
    if (a5 == 1) triangle.style.borderTopColor = "blue";
    if (a5 == 2) triangle.style.borderLeftColor = "blue";
    if (a5 == 3) triangle.style.borderRightColor = "blue";
    if (a5 == 4) triangle.style.borderBottomColor = "blue";
    document.body.appendChild(triangle);
    }
}



document.getElementById("circle").onclick = function(){
    var number = document.getElementById("number").value;
    for (let i = 0; i < number; i++) { 
        var circle = document.createElement("div");
        circle.classList.add("circles");
        var hight = getRandom(50, 200);
        circle.style.height = hight + "px";
        circle.style.width = hight + "px";
        margin_left = getRandom(0, 1200);
        margin_top = getRandom(0, 400);
        circle.style.marginLeft = margin_left + "px";
        circle.style.marginTop = margin_top + "px";
        circle.style.borderRadius = hight/2 + "px";
        document.body.appendChild(circle);
    }   
};

document.body.addEventListener('dblclick', function (elem_id) {
    var obdject = elem_id.target;
    if (obdject.className === 'squares' || obdject.className === 'triangles'
        || obdject.className === 'circles') obdject.remove();
}, false);

document.body.addEventListener('click', function (elem_id) {
    var obdject = elem_id.target;
    if (obdject.className === 'squares'
        || obdject.className === 'circles') obdject.style.background = "green";
    if (obdject.className === 'triangles') {
                                          if (a5 == 1) obdject.style.borderTopColor = "green";
                                          if (a5 == 2) obdject.style.borderLeftColor = "green";
                                          if (a5 == 3) obdject.style.borderRightColor = "green";
                                          if (a5 == 4) obdject.style.borderBottomColor = "green";}
}, false);

