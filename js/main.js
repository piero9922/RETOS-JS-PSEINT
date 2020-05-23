// --------1ER RETO--------// 

function Suma(a,b){
    return a + b
  }
  
  console.log(Suma(20,30));

// --------2DO RETO--------// 

function Examenes(c,d,e,f){
    console.log(`Su primera nota es : ${c}`,`Su segunda nota es : ${d}`,`Su tercera nota es : ${e}`, `Su cuarta nota es : ${f}`,`EN TOTAL, SU PROMEDIO SERIA : ${(c+e+d+f)/4}`);
 }
 
 Examenes(15,20,14,12);

 // --------3ER RETO--------// 

 function areaRectangulo(base,altura){
     console.log(`El Area del Rectangulo es : ${base*altura}`);
 }

 areaRectangulo(10,10);

 // --------4TO RETO--------// 

 function areaTriangulo(base,altura){
    console.log(`El Area del tringulo es : ${(base*altura)/2}cm²`);
}

areaTriangulo(20,30);

// --------5TO RETO--------// 

function areaCirculo(radio){
    const PI = 3.1416
    return PI*radio**2
}

console.log(areaCirculo(20));

// --------6TO RETO--------// 

function sueldoSemanal(horas,sueldoHoras){
    console.log(`Las Horas de que trabajaste en toda la semana fueron : ${horas}`, `¿Cuanto gana por cada hora trabaja? : ${sueldoHoras}`, `LO QUE GaNAS A LA SEMANA ES : ${horas*sueldoHoras} soles`)
}

sueldoSemanal(48,6);

// --------7MO RETO--------// 

function convertidorPulgadas(p){
    let metros = 0.0254
    console.log(`El resultado de tu operacion es : ${p*metros} metros`) 
}
convertidorPulgadas(2);

// --------8VO RETO--------// 

function convertidorSoles(soles){
    let dolar = 0.29
    console.log(`${soles} soles son : ${soles*dolar} dolares`)
}

convertidorSoles(20);

// --------9NO RETO--------// 

function edad(añoActual,añoNaci){
    console.log(`¿En que año naciste? : ${añoNaci}`)
    console.log(`¿Que año estamos actualmente? : ${añoActual}`)
    console.log(`Tienes ${añoActual - añoNaci} años de edad`)
}

edad(2020,1999);

// --------10MO RETO--------// 

function mayorEdad(maria,rocio,juan){
    maria = 20
    rocio = 30
    juan = 18

    if(maria<rocio && maria<juan){
        console.log(`Maria es la menor y tiene ${maria} años`)
    }else if(rocio<maria && rocio<juan){
        console.log(`Rocio es la menor y tiene ${rocio} años`)
    }else if(juan<maria && juan<rocio){
        console.log(`Juan es el menor y tiene ${juan} años`)
    }else{
      console.log("TODOS TIENEN LA MISMA EDAD")
    }
}

mayorEdad();
// --------11VO RETO--------// 

function bono(persona){
    if(persona === 1){
        console.log("Usted Recibira un Bono de $100")
    }else if(persona === 2){
        console.log("Usted Recibira un Bono de $200")
    }else if(persona === 3){
        console.log("Usted Recibira un Bono de $300")
    }else if(persona === 4){
        console.log("Usted Recibira un Bono de $400")
    }else if(persona === 5){
        console.log("Usted Recibira un Bono de $500")
    }else if(persona >= 6){
        console.log("Usted Recibira un Bono de $1000")
    }else{
        console.log("INGRESE EL NUMERO ADECUADO")
    }
}

bono(10);

// --------12VO RETO--------// 

// ----------------// 
// ----------------// 


// -------15VO RETO---------// 

function votar(x){
    if(x == 18){
        console.log(`ES LA PRIMERA VEZ QUE VAS A VOTAR`)
    }else if(x >= 18){
        console.log(`VOTA CON SABIDURIA`)
    }else{
        console.log(`AUN NO TIENES LA MAYORIA DE EDAD PARA VOTAR`)
    }
}    

votar(18);

