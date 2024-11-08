const prompt = require("prompt-sync")();
// // console.table(matriz);
// // console.log(matriz[0]);

// // for (let index = 0; index < matriz.length; index++) {
// //     console.log(matriz[index][1])
// // }

// // const auto = {
// //     ruedas:4,
// //     color:"red",
// //     patente:"ABC123"
// // }

// // const {ruedas,color,patente,modelo,ano} = auto;

// // console.log("cantidad de ruedas:",ruedas, "color del vehiculo: ",color, patente,modelo,ano);
// // console.log(typeof ruedas, typeof color, typeof patente,typeof modelo,typeof ano);

// const numeros = [1,2,3,4,5];
// // const [pepe,adrian] = numeros


// const otrosNumeros = [6,7,8,9,10];

// const union = [...numeros,...otrosNumeros];

// console.log(numeros);

// console.log(union);

const matriz = [
    [1,2,3,4,5,6,7],
    [8,9,10,11,12,13,14],
    [15,16,17,18,19,20,21],
    [22,23,24,25,26,27,28]
];

// const semana = +prompt(`Ingrese el numero de la semana cuyo total deseas ver
// opcion 1: primer semana
// opcion 2: segunda semana
// opcion 3: tercera semana
// opcion 4: cuarta semana `)

// console.log("eleccion de la semana", semana);

function GastosDeTodaLaSemana(elNumeroDeLaSemana) {
    let acumulador = 0;


    if(isNaN(+elNumeroDeLaSemana) || elNumeroDeLaSemana === true || elNumeroDeLaSemana === false){
        console.log("El valor ingresado no es un numero")
        return;
    }

    if(+elNumeroDeLaSemana > matriz.length){
        console.log("La elNumeroDeLaSemana indicada no existe");
        return;
    }

    for(let index = 0; index < matriz[elNumeroDeLaSemana-1].length; index++) {
        acumulador += matriz[elNumeroDeLaSemana-1][index];
    }

    return acumulador;
}

function GastosDeTodaLaSemana2(semana){
    
    let acumular = matriz[semana-1].reduce((acumulador,valorActual,index) => {
        //console.log("Estoy en el indice: ", index, "El valor actual es", valorActual, "El valor actual del acumulador es", acumulador);
        return acumulador + valorActual
    },0)

    return acumular
}

function GastosDeUnDiaDeLaSemana(dia) {
    let acumulador = 0;
    
    for (let index = 0; index < matriz.length; index++) {
        acumulador += matriz[index][dia-1];
    }
    
    return acumulador
}

function GastosDeUnDiaDeLaSemana2(dia) {
    
    let acumulador = matriz.reduce( function(acumulador,valorActual){
        return acumulador + valorActual[dia-1]
    },0)
    
    
    return acumulador
}

function getBalance(semana,dia){
    const balance = {
        gastoDeLaSemana: GastosDeTodaLaSemana2(semana),
        gastosDeUnDiaAlMes: GastosDeUnDiaDeLaSemana2(dia)
    }

    return balance
}

//const seamana = prompt("Indicame la semana que deseas calcular")
console.log(GastosDeTodaLaSemana(false));
// console.log(balance(1,3));
// console.log(GastosDeTodaLaSemana(1));
// console.log(GastosDeTodaLaSemana2(1));
// console.table(matriz);

// console.log(GastosDeUnDiaDeLaSemana(1));
// console.log("-------------------------------");

// console.log(GastosDeUnDiaDeLaSemana2(1));

// function saludo(cadena){

// }

// const contar = () => {}

// const resultado = contar(1,2);


// function getPersona(nombre,edad,nacionalidad){
//     const persona = {
//         nombre,
//         edad,
//         nacionalidad
//     }
//     return persona
// };

// const andres = getPersona("Andres",43,"Argentina");
