let numero = 140153;
let horassomadas = 0;
let minutossomados = 0;
let segundossomados = 0;

// horas
while (numero >= 3600) {
    horassomadas++;
    numero -= 3600;
}

// minutos
while (numero >= 60) {
    minutossomados++;
    numero -= 60;
}

// segundos
while (numero >= 1) {
    segundossomados++;
    numero -= 1;
}

console.log(`${horassomadas}:${minutossomados}:${segundossomados}`);
