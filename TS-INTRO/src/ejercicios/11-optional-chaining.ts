
/*
    ===== Código de TypeScript =====
*/


interface Pasajero{
    nombre: string;
    hijos?: string[]
}

const pasajero1: Pasajero ={
    nombre: 'Javier'
}

const pasajero2: Pasajero ={
    nombre: 'Fernando',
    hijos: ['Natalia', 'Gabriel']
}

function imprimeHijos( pasajero: Pasajero ): void{

    const cuantosHijos = pasajero.hijos?.length || 0;

    console.log( cuantosHijos );
}



imprimeHijos( pasajero1 );