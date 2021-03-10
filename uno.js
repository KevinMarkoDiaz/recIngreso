



//Estrategia de resolucion:
//1. declaracion de variableas

let nombre;
let edad;
let sexo;
let puesto;
let sueldo;
let sueldoProg;
let promsueldoProg;
let contProg;
let sueldoAna;
let contAna;
let promsueldoAna;
let sueldoQa;
let promsueldoQa;
let contQa;
let mayorSueldo;
let mayorSueldoFem;
let contProgNoBinarios;
let acumsueldProg;
let acumsueldAna;
let acumsueldQa;
let flaSueldo = 1;
let sexoConMayorSueldo;
let flaSueldoFem = 1;
let nombreMayorSFemenin;
let contProgNoBin = 0;


//2.generar un bucle que me permita ingresar los datos 
//segun la cantidada de veces que sea necesario o que el cliente desee.

do {
	//3.solicitar datos  y validar los mismos
	nombre = prompt('ingrese un nombre').toLowerCase();
	while (!isNaN(nombre)) {

		nombre = prompt('Nombre invalido, ingrese otro nombre').toLowerCase();
	}

	edad = prompt('ingrese su edad');
	while (isNaN(edad)) {

		edad = prompt('edad invalido, ingrese nuevamente su edad');
	}

	sexo = prompt('ingrese su sexo: masculino/femenino/no binario').toLowerCase();
	while (sexo != 'masculino' && sexo != 'femenino' && sexo != 'no binario' && !isNaN(sexo)) {

		sexo = prompt('Sexo invalido, ingrese nuevamente su sexo').toLowerCase();
	}


	puesto = prompt('ingrese su puesto: programador/analista/Qa').toLowerCase();
	while (puesto !== 'programador' && puesto !== 'analista' && puesto !== 'qa' && !isNaN(puesto)) {

		puesto = prompt('Puesto invalido, ingrese nuevamente su Puesto').toLowerCase();
	}


	sueldo = prompt('ingrese su sueldo');
	while (sueldo < 15000 || sueldo > 70000 || isNaN(sueldo)) {

		sueldo = prompt('Sueldo invalido, ingrese nuevamente su Sueldo');
	}



	//Respondo a las necesidades dadas en un principio por el cliente.
	if (puesto === 'programador') {

		contProg = contProg + 1;
		acumsueldProg = acumsueldProg + sueldo;
		promsueldoProg = acumsueldProg / contProg;
	};


	if (flaSueldo == 1 || sueldo > mayorSueldo) {
		mayorSueldo = sueldo;
		flaSueldo = 0;
		sexoConMayorSueldo = sexo;

	}
	if (flaSueldoFem == 1 || sexo == 'femenino' && sueldo > mayorSueldoFem) {

		nombreMayorSFemenin = nombre;
		mayorSueldoFem = sueldo;
		flaSueldoFem = 0;
	}



	if (puesto == 'progtamador' && sexo == 'no binario' && sueldo <= 50000 && sueldo >= 20000) {
		contProgNoBin = contProgNoBin + 1
	}





	ingresarEmp = prompt('¿quieres ingresar otro empleado? si/no').toLowerCase()

} while (ingresarEmp === 'si');



function mostrar() {


	console.log(`prommedio sueldo programador: ${promsueldoProg}`);
	console.log(`prommedio sueldo analista: ${promsueldoAna}`);
	console.log(`prommedio sueldo qa: ${promsueldoQa}`);
	console.log(`sexo con mayor sueldo: ${sexoConMayorSueldo}`);

	console.log(`nombre del empleado femenino con el mayor salario : ${nombreMayorSFemenin}`);
	console.log(`cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000: ${contProgNoBin}`)


}
