
/*
    ===== Código de TypeScript =====
*/



function sumar(a: number, b: number): number{
    return a + b;
}


const sumarFlecha = (a: number, b: number): number => {
    return a + b;
}

function multiplicar(numero: number, otroNumero?: number, base: number = 2): number{
    return numero * base;
}


// const resultado = sumar(10, 11);
// const resultado = multiplicar(10, 11, 5);
// console.log(resultado);


interface PersonajeLDR{
    nombre: string;
    pv: number;
    mostrarHP: () => void;
}

function curar( personaje: PersonajeLDR, curarX: number ): void{

    personaje.pv += curarX;
}


const nuevoPersonaje: PersonajeLDR = {

    nombre: 'Strider',
    pv: 50,
    mostrarHP(){
        console.log('Puntos de vida: ', this.pv);
    }

}

curar( nuevoPersonaje, 20);


nuevoPersonaje.mostrarHP();