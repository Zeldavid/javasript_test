let invertirCadena = () => {
    const cadena = 'Lineru';
    let cadenaArreglo = cadena.split('');
    let invertirCadena = cadenaArreglo.reverse();
    let cadenaInvertida = invertirCadena.join('');
    return cadenaInvertida;
}

let ordenarArreglo = () => {
    const numberTest = [2, 25, 4, 2, 3, 4, 7];
    let ordenar = numberTest.sort((a, b) => { return a - b });
    return ordenar;
}

let ordenarObjeto = () => {
    const arryObject = [];
    const arryObject_ = [];
    const objectTest = [{
            name: 'Homero Simpson',
            age: 53,
            profession: 'nuclear energy operator'
        },
        {
            name: 'Moe Szyslak',
            age: 57,
            profession: 'barman'
        },
        {
            name: 'Montgomery Burns',
            age: 86,
            profession: 'nuclear energy boss'
        },
        {
            name: 'Apu Nahasapeemapetilon',
            age: 45,
            profession: 'owner operator'
        }
    ];

    objectTest.sort((a, b) => {
        if (a.name > b.name) {
            return 1;
        }
        if (a.name < b.name) {
            return -1;
        }
        return 0;
    })
    return objectTest;
}

let retornarMayuscula = (cadena) => {
    return cadena.toUpperCase();
}

let factorial = (num) => {
    if (num < 0) {
        return -1;
    } else if (num == 0) {
        return 1;
    } else {
        return (num * factorial(num - 1));
    }
}



console.log('a.-------------CADENA INVERTIDA---------------');
console.log(invertirCadena());

console.log('b.-------------ORDENAR ARREGLO---------------');
console.log(ordenarArreglo());

console.log('c.-------------ORDENAR OBJETO---------------');
console.log(ordenarObjeto());

console.log('d.-------------DEVOLER MAYUSCULA---------------');
console.log(retornarMayuscula('fintech'));

console.log('f.-------------FACTORIAL---------------');
console.log(factorial(43));