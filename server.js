
// ==========================
// BASE DE DATOS DE ALUMNOS
// ==========================
const alumnos = {
    "0001": {
        nombre: "Alex Fumaneri",
        curso: "2°5 - Turno Mañana"
    },

    "0002": {
        nombre: "Ferrari Francisco",
        curso: "1°3"
    },

    "0003": {
        nombre: "Santino Robles",
        curso: "2°5 - Turno Mañana"
    },

    "0004": {
        nombre: "Tobias Moreira",
        curso: "6°2"
    }
};


// ==========================
// REGISTRO DE ASISTENCIAS
// ==========================
let asistencias = [];


// ==========================
// FUNCION PARA ESCANEAR
// ==========================
function registrarAsistencia(codigo) {

    // Verifica si existe el alumno
    if (!alumnos[codigo]) {
        console.log("Alumno no encontrado");
        return;
    }

    const alumno = alumnos[codigo];

    // Fecha y hora actual
    const ahora = new Date();

    const fecha = ahora.toLocaleDateString();
    const hora = ahora.toLocaleTimeString();

    // Guarda la asistencia
    asistencias.push({
        codigo: codigo,
        nombre: alumno.nombre,
        curso: alumno.curso,
        fecha: fecha,
        hora: hora,
        estado: "Presente"
    });

    console.log("Asistencia registrada:");
    console.log(`${alumno.nombre} - ${alumno.curso}`);
}


// ==========================
// FUNCION PARA VER LISTA
// ==========================
function mostrarAsistencias() {

    console.log("===== LISTA DE ASISTENCIAS =====");

    asistencias.forEach((a) => {
        console.log(`
Codigo: ${a.codigo}
Nombre: ${a.nombre}
Curso: ${a.curso}
Fecha: ${a.fecha}
Hora: ${a.hora}
Estado: ${a.estado}
        `);
    });
}


// ==========================
// FUNCION PARA VER ALUMNOS
// ==========================
function mostrarAlumnos() {

    console.log("===== LISTA DE ALUMNOS =====");

    for (let codigo in alumnos) {

        console.log(`
Codigo: ${codigo}
Nombre: ${alumnos[codigo].nombre}
Curso: ${alumnos[codigo].curso}
        `);
    }
}


// ==========================
// EJEMPLOS DE ESCANEO
// ==========================
registrarAsistencia("0001");
registrarAsistencia("0003");
registrarAsistencia("0004");


// ==========================
// MOSTRAR RESULTADOS
// ==========================
mostrarAsistencias();