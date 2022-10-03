let fechaDiaIngreso = parseInt (prompt ("Ingrese la fecha de ingreso (Día)"));
let fechaMesIngreso = parseInt (prompt ("Ingrese la fecha de ingreso (Mes)"));

let fechaDiaSalida = parseInt (prompt ("Ingrese la fecha de salida (Día)"));
let fechaMesSalida = parseInt (prompt ("Ingrese la fecha de salida (Mes)"));

let tiposDeHabitaciones = 0;

let reserva = false;

let habitacion1 = 0;
let habitacion2 = 5;
let habitacion3 = 5;
let habitacion4 = 5;
let habitacion5 = 5;

let nombre = "";
let apellido = "";
let email = "";
let precio = "$$$";

function reservarHabitacion() {

    while ((fechaDiaIngreso > 31 || fechaDiaIngreso < 1) || (fechaMesIngreso > 12 || fechaMesIngreso < 1) || (fechaDiaSalida > 31 || fechaDiaSalida < 1) || (fechaMesSalida > 12 || fechaMesSalida < 1)) {

        alert("No es posible reservar en la fecha ingresada, vuelva a intentarlo");

        fechaDiaIngreso = parseInt (prompt ("Ingrese la fecha de ingreso (Día)"));
        fechaMesIngreso = parseInt (prompt ("Ingrese la fecha de ingreso (Mes)"));


        fechaDiaSalida = parseInt (prompt ("Ingrese la fecha de salida (Día)"));
        fechaMesSalida = parseInt (prompt ("Ingrese la fecha de salida (Mes)"));

        }

    alert("Su reserva será del " + fechaDiaIngreso + "/" + fechaMesIngreso + " hasta el " + fechaDiaSalida + "/" + fechaMesSalida);

    while (reserva === false) { 
        
        tiposDeHabitaciones = parseInt (prompt ("Ingrese para cuantas personas será la habitación, máximo 5 personas"));
        
        if (tiposDeHabitaciones === 1 && habitacion1 > 0) {

            habitacion1--;
            reserva = true;
            alert("Usted reservará una habitacion para " + tiposDeHabitaciones + " persona/s. Su fecha de ingreso será el " + fechaDiaIngreso + "/" + fechaMesIngreso + " y su fecha de salida " + fechaDiaSalida + "/" + fechaMesSalida + ". Y tendrá un costo de $$$");
        
        } else if (tiposDeHabitaciones === 2 && habitacion2 > 0) {

            habitacion2--;
            reserva = true;   
            alert("Usted reservará una habitacion para " + tiposDeHabitaciones + " persona/s. Su fecha de ingreso será el " + fechaDiaIngreso + "/" + fechaMesIngreso + " y su fecha de salida " + fechaDiaSalida + "/" + fechaMesSalida + ". Y tendrá un costo de $$$");
        
        } else if (tiposDeHabitaciones === 3 && habitacion3 > 0) {

            habitacion3--;
            reserva = true;
            alert("Usted reservará una habitacion para " + tiposDeHabitaciones + " persona/s. Su fecha de ingreso será el " + fechaDiaIngreso + "/" + fechaMesIngreso + " y su fecha de salida " + fechaDiaSalida + "/" + fechaMesSalida + ". Y tendrá un costo de $$$");
        
        } else if (tiposDeHabitaciones === 4 && habitacion4 > 0) {

            habitacion4--;
            reserva = true;
            alert("Usted reservará una habitacion para " + tiposDeHabitaciones + " persona/s. Su fecha de ingreso será el " + fechaDiaIngreso + "/" + fechaMesIngreso + " y su fecha de salida " + fechaDiaSalida + "/" + fechaMesSalida + ". Y tendrá un costo de $$$");

        
        }else if (tiposDeHabitaciones === 5 && habitacion5 > 0) {

            habitacion5--;
            reserva = true;
            alert("Usted reservará una habitacion para " + tiposDeHabitaciones + " persona/s. Su fecha de ingreso será el " + fechaDiaIngreso + "/" + fechaMesIngreso + " y su fecha de salida " + fechaDiaSalida + "/" + fechaMesSalida + ". Y tendrá un costo de $$$");

        } else {

            alert("No hay habitaciones disponibles para la fecha seleccionada o excedio el limite de personas, intentelo nuevamente");

        }

    }

    if (reserva = true) {

        nombre = prompt ("Ingrese su nombre");
        apellido = prompt ("Ingrese su apellido");
        email = prompt ("Ingrese su e-mail");
        
        alert("Nombre: " + nombre + "\nApellido: " + apellido + "\nE-Mail: " + email + "\nReserva: " + fechaDiaIngreso + "/" + fechaMesIngreso + " hasta " + fechaDiaSalida + "/" + fechaMesSalida + "\nHabitación para: " + tiposDeHabitaciones + "\nPrecio: " + precio);
    }

}

reservarHabitacion();

console.log("Quedan disponibles " + habitacion1 + " habitaciones para 1 persona");
console.log("Quedan disponibles " + habitacion2 + " habitaciones para 2 personas");
console.log("Quedan disponibles " + habitacion3 + " habitaciones para 3 personas");
console.log("Quedan disponibles " + habitacion4 + " habitaciones para 4 personas");
console.log("Quedan disponibles " + habitacion5 + " habitaciones para 5 personas");
console.log(reserva);