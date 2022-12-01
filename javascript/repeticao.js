// for ( var i=0; i < 3 ; i++) {
//     console.log('Repetição nro ' + i);
// } 

// for (var i = 0; i < 10; i++) {
//     console.log("aprovado, carreando.. ", i );
// }

// var contador = 0;

// while (contador < 11) {
//     console.log("9 x " + contador + "=" + 9*contador);
//     contador++;
// }

// var sorteados = [5, 78, 93, 23, 45];
// var nro = 93;
// var i = 0;
while (i < sorteados.length) {
    if (sorteados[i] == nro) {
        break;
    }
    console.log(sorteados[i]);
    i++;
}
// vai imprimir 5 e 78


var result = '';
var i = 0;

do{
    i = i + 1;
    result = result + i;
}while (i< 5) {
    console.log(result);
}