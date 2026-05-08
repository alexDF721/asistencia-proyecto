const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.json());

// Base de datos de alumnos (MODIFICADA PARA PRUEBA)
const alumnos = {
    "0001": {
        nombre: "Alex Fumaneri",
        curso: "6°4"
    },

    "0002": {
        nombre: "Ferrari Francisco",
        curso: "1°3"
    },

    "0003": {
        nombre: "Santino Robles",
        curso: "2°5"
    },

    "0004": {
        nombre: "Tobias Moreira",
        curso: "6°4"
    }
};

// Lista de asistencias
let asistencias = [];

// Ruta para registrar asistencia
app.post("/api/asistencia/:codigo", (req, res) => {

    const codigo = req.params.codigo;
    const alumno = alumnos[codigo];

    if (!alumno) {
        return res.status(404).json({
            error: "Alumno no encontrado"
        });
    }

    // Evita duplicados
    const yaExiste = asistencias.find(a => a.codigo === codigo);

    if (yaExiste) {
        return res.json({
            mensaje: "Alumno ya presente"
        });
    }

    const nuevaAsistencia = {
        codigo: codigo,
        nombre: alumno.nombre,
        curso: alumno.curso,
        fecha: new Date().toLocaleString("es-AR")
    };

    asistencias.push(nuevaAsistencia);

    // ⏱ BORRADO AUTOMÁTICO (61 segundos)
    setTimeout(() => {

        asistencias =
            asistencias.filter(a => a.codigo !== codigo);

        console.log(`${alumno.nombre} eliminado automáticamente`);

    }, 61000);

    res.json({
        mensaje: "Asistencia registrada",
        asistencia: nuevaAsistencia
    });

});

// Ruta para ver asistencias
app.get("/api/asistencias", (req, res) => {
    res.json(asistencias);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor iniciado en puerto ${PORT}`);
});