
//Estrategia de resolucion:
//1. declaracion de variableas

let carrera;
let sexo;
let cantMaterias;
let notaProm;
let edad;
let contAlumfisica = 0;
let promAlufisicamejor = 0;
let nombFismejor;
let flagfis = 1;
let nomalummasjoven
let contFis;
let contQuim;
let conSist;
let proFis;
let porQuim;
let porSis;
let conttotalalu;


//2.generar un bucle que me permita ingresar los datos 
//segun la cantidada de veces que sea necesario o que el cliente desee.

for (let i = 0; i < 500; i++) {
    //3.solicitar datos  y validar los mismos

    carrera = prompt('Quimica/Fisica/Sistemas').toLowerCase();
    while (carrera != 'Quimica' && carrera != 'Fisica' && carrera != 'Sistemas' && !isNaN(carrera)) {

        carrera = prompt('Quimica/Fisica/Sistemas').toLowerCase();
    };
    sexo = prompt('ingrese su sexo: masculino/femenino/no binario').toLowerCase();
    while (sexo != 'masculino' && sexo != 'femenino' && sexo != 'no binario' && !isNaN(sexo)) {

        sexo = prompt('Sexo invalido, ingrese nuevamente su sexo').toLowerCase();
    }

    cantMaterias = prompt('cantidad de materias(entre 1 y 5)');
    while (cantMaterias < 1 || cantMaterias > 5 || isNaN(cantMaterias)) {

        cantMaterias = prompt('cantidad de materias(entre 1 y 5)');
    }

    notaProm = prompt('Nota promedio entre 0 y 10');
    while (notaProm < 1 || notaProm > 5 || isNaN(notaProm)) {

        notaProm = prompt('Nota promedio entre 0 y 10');
    }
    edad = prompt('Ingrese su edad');
    while (isNaN(edad)) {

        edad = prompt('Ingrese su edad');

        //Respondo a las necesidades dadas en un principio por el cliente.



        if (carrera == 'fisica' && notaProm > promAlufisicamejor) {
            promAlufisicamejor = notaProm;
            nombFismejor = nombre;
        };

        if (flagfis == 1 || edad < alummasjoven && sexo == 'femenino') {

            alummasjoven = edad;
            nomalummasjoven = nombre;

        };

        if (carrera == 'fisica') {

            contFis = contFis + 1
            proFis = (conttotalalu * 100) / contFis

        } if (carrera == 'quimica') {

            contQuim = contQuim + 1
            porQuim = (conttotalalu * 100) / contQuim

        } if (carrera == 'sistemas') {

            conSist = conSist + 1
            porSis = (conttotalalu * 100) / conSist

        }






        conttotalalu = conttotalalu + 1;

    }


    //Respondo a las necesidades dadas en un principio por el cliente.




}
function mostrar() {
    console.log(`El nombre del mejor promedio de los alumnos que estudian Fisica: ${nombFismejor}`);
    console.log(`El nombre de la alumna mas joven: ${nomalummasjoven}`);
    console.log(`Porcentaje de estudiantes que estudia cada carrera`);
    console.log(`fisica:${proFis}%`);
    console.log(`sistemas:${porSis}%`);
    console.log(`quimica: ${porQuim}%`);

}