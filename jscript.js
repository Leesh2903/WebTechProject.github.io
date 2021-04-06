function help1() {
    alert ('It might not be the smartest idea to drink the water that is killing your town, maybe an escape would be a slightly better plan. Ultimately it is your choice however :)');
}

function help2() {
    alert ('Sneaking out may work but it may be too risky, waiting is also quite risky however might be a safer choice :)');
}

function help3() {
    alert ('You are very close to escaping now! Your keys are probably the best chance you have now, climbing the gate may make too much noise :)');
}

function home() {
    alert ('Going Home!')
}

function back() {
    alert ('Made a wrong choice?')
}

function mouseOver1() {
    document.getElementById("link").style.color = "red";
} 

function mouseOut1() {
    document.getElementById("link").style.color = "black";
}

function mouseOver2() {
    document.getElementById("link2").style.color = "red";
} 

function mouseOut2() {
    document.getElementById("link2").style.color = "black";
}

var d = new Date();
document.getElementById("time").innerHTML = d;