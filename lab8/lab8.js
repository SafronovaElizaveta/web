document.getElementById("add").onclick = function(){
    document.getElementById('main').insertAdjacentHTML('beforeend', 
    `<div class="strip">
    <input>
    <input>
    <button onclick="tope(this)" >&#8593;</button><!-- 
  --><button onclick="downe(this)">&#8595;</button><!-- 
  --><button onclick="this.parentNode.remove()">&#215;</button>
    </div>`)
}

document.getElementById("save").onclick = function(){
    var parent = document.querySelectorAll(".strip > input");
    var one, two = "";
    for (var i = 0; i < parent.length; i += 2)
    {
        var key = parent[i].value;
        var value = parent[i + 1].value;
        two += '"' + key + '":"' + value + '"';
        if (i != parent.length - 2)
        two += ',';
    }
    one= "{"+ two + "}";
    var answer = document.getElementById("exit");
    answer.innerHTML = one;
}

function tope(el) {
    var elem = el.parentNode;
    var parent = elem.parentNode;
    var childs = parent.children;
    for (var i = 0; i < childs.length; i++)
    {
        if (childs[i] === elem && i != 0)
            parent.insertBefore(elem, childs[i - 1]);
    }
}

function downe(el) {
    var elem = el.parentNode;
    var parent = elem.parentNode;
    var childs = parent.children;
    for (var i = 0; i < childs.length; i++)
    {
        if (childs[i] === elem && i != (childs.length - 1)) {
            parent.insertBefore(childs[i + 1], elem);
            break;
        }
    }
}