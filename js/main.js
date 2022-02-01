
let total = 0;

class ingredientes {
    constructor(id , plato , porciones , precio){
    this.id = id;
    this.plato = plato;
    this.porciones = porciones;
    this.precio = precio;
}
}

const receta = []; 

receta.push(new ingredientes (001 , "asado" , 1 , 1000))
receta.push(new ingredientes (002 , "asado" , 2 , 1800))
receta.push(new ingredientes (003 , "asado" , 3 , 2500))

const bebida = [];

bebida.push(new ingredientes (004 , "gaseosa" , 1 , 200))
bebida.push(new ingredientes (005 , "cerveza" , 1 , 300))
bebida.push(new ingredientes (006 , "vino" , 1 , 500))

let factura = document.createElement("p");
factura.innerHTML = "<h1> Gracias por elegirnos </h1> <br> <h3> Elementos seleccionados: </h3>"
document.body.appendChild(factura);


let comida = prompt("Selecciones cuantas personas son en su mesa, el menú de hoy es Asado('A', 'B', 'C'): \nA-1 \nB-2 \nC-3 \nPara finalizar, presione 0");
while(comida != "0"){
    switch (comida){
        case "A": total = total + receta[0].precio
        alert("Añadiste a tu mesa " + receta[0].plato + " " + receta[0].porciones + " $" + receta[0].precio)

        let prime = document.createElement("p");
        prime.innerHTML = receta[0].plato + " " + receta [0].porciones;
        document.body.appendChild(prime);
        break;

        case "B": total = total + receta[1].precio
        alert("Añadiste a tu mesa " + receta[1].plato + " " + receta[1].porciones + " $" + receta[1].precio);

        let sec = document.createElement("p");
        sec.innerHTML = receta[1].plato + " " + receta [1].porciones;
        document.body.appendChild(sec);
        break;

        case "C": total = total + receta[2].precio
        alert("Añadiste a tu mesa " + receta[2].plato + " " + receta[2].porciones + " $" + receta[2].precio);

        let third = document.createElement("p");
        third.innerHTML = receta[2].plato + " " + receta [2].porciones;
        document.body.appendChild(third);
        break;
        default: alert("No ingresaste un producto válido");
    }
    comida = prompt("Seleccione cuantas personas son en su mesa, el menú de hoy es Asado('A', 'B', 'C'): \nA-1 \nB-2 \nC-3 \nPara finalizar, presione 0");
}

let bebidas = prompt("Desea agregar bebidas? ('A', 'B', 'C'): \nA-Gaseosa $200 \nB-Cerveza $300 \nC-Vino $500 \nPara finalizar, presione 0");
while(bebidas != "0"){
    switch (bebidas){
        case "A": total = total + bebida[0].precio
        alert("Añadiste a tu mesa " + bebida[0].plato + " " + bebida[0].porciones + " $" + bebida[0].precio)

        let prime = document.createElement("p");
        prime.innerHTML = bebida[0].plato + " " + bebida[0].porciones;
        document.body.appendChild(prime);
        break;

        case "B": total = total + bebida[1].precio
        alert("Añadiste a tu mesa " + bebida[1].plato + " " + bebida[1].porciones + " $" + bebida[1].precio);

        let sec = document.createElement("p");
        sec.innerHTML = bebida[1].plato + " " + bebida [1].porciones;
        document.body.appendChild(sec);
        break;

        case "C": total = total + bebida[2].precio
        alert("Añadiste a tu mesa " + bebida[2].plato + " " + bebida[2].porciones + " $" + bebida[2].precio);

        let third = document.createElement("p");
        third.innerHTML = bebida[2].plato + " " + bebida[2].porciones;
        document.body.appendChild(third);
        break;
        default: alert("No ingresaste un producto válido");
    }
    bebidas = prompt("Desea agregar bebidas? ('A', 'B', 'C'): \nA-Gaseosa $200 \nB-Cerveza $300 \nC-Vino $500 \nPara finalizar, presione 0");
}



alert("El precio total es: $" + total);


let factura1 = document.createElement("p");
factura1.innerHTML = "<h2> El total de su compra es: </h2>" + "$" + total;
document.body.appendChild(factura1);






//  --------------------------------------------------------------------
// esto es del tp anterior, no se como fusionarlo. No se me cae una idea
/*
let comidas = prompt("Usted quiere \na)Desayunar $500 +IVA \nb)Almorzar $900 +IVA o \nc)Cenar $800 +IVA? \nSeleccione a - b - c")
let precios = parseInt(prompt("Cuántas personas son en su mesa?: 1 - 2 - 3"))
function costoinicial (a,b){
    return costo = a*b
}

let IVA;
function suma(c,d){
    return IVA = (c*d)/100
}
let valorTotal;
function totals(e,f) {
    return valorTotal = e+f
}


if (comidas == "a"){
    switch(precios) {
        case 1:
        costoinicial (200 , 1);
        suma (200 , 21);
        totals (costo , IVA);
        alert("Su desayuno individual costará $" + valorTotal);
        break;

        case 2:
            costoinicial (200 , 2);
            suma (500 , 21);
            totals (costo , IVA);
            alert("Su desayuno para 2 costará $" + valorTotal + "\nCada persona abonará $" + (valorTotal /2));
            break;
        case 3:
            costoinicial (500 , 3);
            suma (500 , 21);
            totals (costo , IVA);
            alert("Su desayuno para 3 costará $" + valorTotal + "\nCada persona abonará $" + (valorTotal /3));
            break;
    }
} else if (comidas == "b"){
    switch(precios){
    case 1:
        costoinicial (900 , 1);
        suma (900 , 21);
        totals (costo , IVA);
        alert("El menú de hoy es asado. Su almuerzo individual costará $" + valorTotal);
        break; 
    case 2:
        costoinicial (900 , 2);
        suma (900 , 21);
        totals (costo , IVA);
        alert("El menú de hoy es asado. Su almuerzo para 2 costará $" + valorTotal + "\nCada persona abonará $" + (valorTotal /2));
        break;
    case 3:
        costoinicial (900 , 3);
        suma (900 , 21);
        totals (costo , IVA);
        alert("El manú de hoy es asado. Su almuerzo para 3 costará $" + valorTotal + "\nCada persona abonará $" + (valorTotal /3));
        break;
}
}else if(comidas == "c"){
    switch(precios) {
        case 1:
            costoinicial (800 , 1);
            suma (800 , 21);
            totals (costo , IVA);
            alert("Su cena individual costará $" + valorTotal);
            break;

        case 2: 
        costoinicial (800 , 2);
        suma (800 , 21);
        totals (costo , IVA);
        alert("Su cena para 2 costará $" + valorTotal + "\nCada persona abonará $" + (valorTotal /2));
        break;

        case 3: 
        costoinicial (800 , 3);
        suma (800 , 21);
        totals (costo , IVA);
        alert("Su cena para 3 costará $" + valorTotal + "\nCada persona abonará $" + (valorTotal /3));
        break;
    }
} else{
    alert("Por favor, ingrese una opción adecuada")
}

let condicion = true;
let tarjeta;
let codigo;

while (condicion) {    
 valorTotal = prompt("seleccione su método de pago: \na) Efectivo \nb) Tarjeta ")
 if (valorTotal == "a"){
     let cambio = prompt("Necesita cambio? Diga 'si' o 'no'")
     if(cambio != "no"){
         cambio = prompt("De cuánto?")
         alert("Gracias por su compra!")
     }else{
         alert("Gracias por su compra!")
     }
     break;
 } else if (valorTotal == "b"){
    tarjeta = prompt("Ingrese su numero de tarjeta")
    codigo = prompt("Ingrese el codigo de su tarjeta")
    alert("Gracias por su compra!")
    break;
 } else{
     alert("Ingrese un valor correcto")
 }

}*/