function add(){
    var val1 = parseFloat(document.getElementById("value1").value);
    var val2 = parseFloat(document.getElementById("value2").value);
    document.getElementById("operand").innerHTML = "+";
    document.getElementById("displaye").innerHTML = val1 + val2;
}

function sub(){
    var val1 = parseFloat(document.getElementById("value1").value);
    var val2 = parseFloat(document.getElementById("value2").value);
    document.getElementById("operand").innerHTML = "-";
    document.getElementById("displaye").innerHTML = val1 - val2;
}

function div(){
    var val1 = parseFloat(document.getElementById("value1").value);
    var val2 = parseFloat(document.getElementById("value2").value);
    document.getElementById("operand").innerHTML = "/";
    document.getElementById("displaye").innerHTML = val1 / val2;
}

function mult(){
    var val1 = parseFloat(document.getElementById("value1").value);
    var val2 = parseFloat(document.getElementById("value2").value);
    document.getElementById("operand").innerHTML = "*";
    document.getElementById("displaye").innerHTML = val1 * val2;
}

function mod(){
    var val1 = parseFloat(document.getElementById("value1").value);
    var val2 = parseFloat(document.getElementById("value2").value);
    document.getElementById("operand").innerHTML = "%";
    document.getElementById("displaye").innerHTML = val1 % val2;
}