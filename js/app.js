alert('Bienvenido/a a A y M Carwash')

let nombreUsuario = prompt('Ingrese su nombre').toLocaleLowerCase()

console.log(`Hola ${nombreUsuario}`)

alert('Hola ' + nombreUsuario)

let servicio = parseInt(prompt('Ingrese el NUMERO de servicio de lavado por el que desea consultar: \n 1.Lavado Artesanal \n 2.Lavado de ruedas \n 3.Lavatapizado \n 4.Limpieza de interiores'));

if (isNaN(servicio)) {
    alert('Ingrese el NUMERO de servicio de lavado por el que desea consultar')
} else {
    switch(servicio){
        case 1:
            for (let i = 1; i <= servicio; i++) {
                let lavadoArtesanal = 'El servicio de Lavado Artesanal por el valor de un (1) auto es de $10.000';
    alert(lavadoArtesanal);
    console.log(i, lavadoArtesanal);
}
break;
        case 2:
            for (let i = 2; i <= servicio; i++) {
                let lavadoDeRuedas = 'El servicio de Lavado de ruedas por el valor de un (1) auto es de $8.000';
    alert(lavadoDeRuedas);
    console.log(i, lavadoDeRuedas);
}
break;
        case 3:
            for (let i = 3; i <= servicio; i++) {
                let lavatapizado = 'El servicio de Lavatapizado por el valor de un (1) auto es de $35.000';
    alert(lavatapizado);
    console.log(i, lavatapizado);
}
break;
        case 4:
            for (let i = 4; i <= servicio; i++) {
            let limpiezaDeInteriores = 'El servicio de Limpieza de interiores por el valor de un (1) auto es de $5.000';
    alert(limpiezaDeInteriores);
    console.log(i, limpiezaDeInteriores);
}
break;
default:
    alert(nombreUsuario + ' ingresa alguna de las opciones anteriores');
break;
}}
