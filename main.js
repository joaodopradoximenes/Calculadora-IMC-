const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso =Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    
    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }
    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = calculoIMC(peso, altura);
    console.log(imc)

    if (imc < 18.5) {
        setResultado(`${imc}, Abaixo do Peso`);
    }
    else if (imc >= 19 && imc < 24.9) {
        setResultado(`${imc}, Peso ideal`);
    } 
    else if (imc >= 25 && imc < 29.9) {
        setResultado(`${imc}, acima do Peso`);
    } 
    else if (imc >= 30 && imc < 34.9) {
        setResultado(`${imc}, obesidade 01`);
    } 
    else if (imc >= 35 && imc < 39.9) {
        setResultado(`${imc}, obsidade 02`);
    } 
    else if (imc >= 40) {
        setResultado(`${imc}, obsidade 03`);
    }

});



function calculoIMC (peso, altura){
    const calculo = peso / (altura*altura);
    return calculo.toFixed(2);
}

function criaP () {
    const p = document.createElement('p');
    return p;
}

function setResultado (msg) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP();
    resultado.appendChild(p);
    p.innerHTML = msg;

}