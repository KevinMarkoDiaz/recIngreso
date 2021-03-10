let nombredelcliente;
let cantidaddelamparas;
let marca;
let preciototalventa;
let preciocondescuento;
let preciocompra;
let acumventas;
let acumdesc;


do {

	nombredelcliente = prompt('ingrese un nombre').toLowerCase();
	while (!isNaN(nombredelcliente)) {
		nombredelcliente = prompt('Nombre invalido, ingrese otro nombre').toLowerCase();
	}


	cantidaddelamparas = prompt('ingrese cantidad de lamparas');
	while (isNaN(cantidaddelamparas)) {

		cantidaddelamparas = prompt('cantidad de lamparas invalido, ingrese nuevamente');
	}

	marca = prompt('ingrese su marca: FelipeLamparas /ArgentinaLuz /Illuminatis').toLowerCase();
	while (marca != 'masculino' && marca != 'femenino' && marca != 'no binario' && !isNaN(marca)) {

		marca = prompt('marca invalida, ingrese nuevamente su marca').toLowerCase();
	}

	preciototalventa = prompt('precio por unidad total de la compra');
	while (isNaN(preciototalventa)) {

		preciototalventa = prompt('precio por unidad total de la compra invalido, ingrese nuevamente');
	}

	if (marca == 'felipelamparas' && cantidaddelamparas > 5) {
		preciocondescuento = preciototalventa - 0.1
		preciocompra = preciocondescuento
	} else { preciocompra = preciototalventa }

	nuevaventa = prompt('desea realizar una nueva venta: si/no').toLowerCase();
} while (nuevaventa == 'si');


acumdesc = preciocondescuento +
	acumventas = acumventas + preciocompra;

function mostrar() {
	console.log(`Cuanto recauda la empresa en concepto de todas las ventas realizadas${acumventas}`);
	console.log(`Cuanto "perdio" la empresa en concepto de descuentos${}`);
	console.log(`El promedio de la cantidad de lamparas vendidas de cada marca.${}`);
	console.log(`) La marca que mas ventas realizo${}`);




}
