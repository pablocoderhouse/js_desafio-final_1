                          //<<<<<<<<<<<<Desafio Final 1>>>>>>>>>>>>>


let persona = Number(prompt("ingrese cantidad de personas"));
let noches = Number(prompt("ingrese cantidad de noches"));
let cabana_economica = 2000; //boton para seleccionar cabaña economica
let cabana_familiar = 5000; //boton para seleccionar cabaña familiar
let cabana_ejecutiva = 8000; //boton para seleccionar cabaña ejecutiva
 
function multiplicar(persona, noches, cabana_economica,) {    
 
    let precio_total = persona * noches * cabana_economica;
alert(`el Valor total de la estadia es ${precio_total}`);
    if (noches >=7) {
        let precio_total = persona * noches * cabana_economica;
        let descuento = precio_total * 15 / 100;
        let valor_total_descuento= precio_total - descuento;
        alert(`tenes un 15% de descuento, el costo total es ${valor_total_descuento}`);
    }
 
}

function multiplicar(persona, noches, cabana_familiar) {   

    let precio_total = persona * noches * cabana_familiar;
    alert(`el Valor total de la estadia es ${precio_total}`);
    if  (noches >=7) {
        let precio_total = persona * noches * cabana_familiar;
        let descuento = precio_total * 15 / 100;
        let valor_total_descuento= precio_total - descuento;
        alert(`tenes un 15% de descuento, el costo total es ${valor_total_descuento}`);
    }
}

function multiplicar(persona, noches, cabana_ejecutiva) {

    let precio_total = persona * noches * cabana_ejecutiva;
    alert(`el Valor total de la estadia es ${precio_total}`);
    if (noches >=7) {
        let precio_total = persona * noches * cabana_ejecutiva;
        let descuento = precio_total * 15 / 100;
        let valor_total_descuento= precio_total - descuento;
        alert(`tenes un 15% de descuento, el costo total es ${valor_total_descuento}`);
}
}

multiplicar(persona, noches, cabana_economica);
multiplicar(persona, noches, cabana_familiar);
multiplicar(persona, noches, cabana_ejecutiva);





//<<<<<<<<<<<<<Desafio 5 agregando Objetos>>>>>>>>>>>>
console.log('Caracteristicas de las cabañas')
class cabaña { constructor(ambiente, cocina, calefaccion, cochera, valor) {
    this.ambiente = ambiente;
    this.cocina = cocina;
    this.calefaccion = calefaccion;
    this.cochera = cochera;
    this.valor = valor;
}
}
const cabaña_economica= new cabaña(2, "equipada", "aire frio-calor", "compartida", 2000);
const cabaña_familiar= new cabaña(3, "equipada", "radiadores", "compartida", 5000);
const cabaña_ejecutiva= new cabaña(4, "equipada", "radiadores y hogar a leña", "privada", 8000);
console.log(cabaña_economica);
console.log(cabaña_familiar);
console.log(cabaña_ejecutiva);


//<<<<<<<<<<<<<Desafio 6 agregando Arrays>>>>>>>>>>>>>
console.log('Busqueda de hostel y filtro de cabañas x precio')
const cabañas = [{ id: 1,  cabaña: "economica", precio: 2000, capacidad: 2  },
                  {  id: 2,  cabaña: "familiar", precio: 5000, capacidad: 4 },
                  {  id: 3,  cabaña: "ejecutiva", precio: 8000, capacidad: 6 },
                  {  id: 4,  cabaña: "hostel", precio: 1000, capacidad: 1 }];


const buscarhostel = cabañas.find(cabaña => cabaña.id === 4); 
console.log(buscarhostel);

//buscado alojamiento con valor menor a 5000 
const alojamientoEconomico = cabañas.filter(cabaña => cabaña.precio <5000); 
console.log(alojamientoEconomico);





