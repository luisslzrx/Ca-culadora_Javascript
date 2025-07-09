function calcularSuma(){
    const n1 = parseFloat(document.getElementById("num1").value);
    const n2 = parseFloat(document.getElementById("num2").value);
    const op = document.getElementById("operador").value;
    let resultado;

    
    if (op == "+") {
        resultado= n1+n2
    }
    if (op == "-") {
        resultado= n1-n2
    }
    if (op == "*") {
        resultado= n1*n2
    }
    if (op == "/") {
        resultado= n1/n2
    }

    document.getElementById("resultado").textContent = "Resultado: " + resultado;
}