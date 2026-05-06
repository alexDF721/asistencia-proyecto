const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static(__dirname));

let presentes = {};

const alumnos = {
    "0001": "Alex Fumaneri",
    "0002": "Ferrari Francisco",
    "0003": "Santino Robles",
    "0004": "Tobias Moreira"
};

app.post('/scan', (req, res) => {
    const { id } = req.body;

    if (alumnos[id]) {
        presentes[id] = {
            nombre: alumnos[id],
            hora: new Date().toLocaleTimeString()
        };

        console.log(alumnos[id] + " presente");

        res.json({ ok: true });
    } else {
        res.json({ ok: false });
    }
});

app.get('/presentes', (req, res) => {
    res.json(presentes);
});

setInterval(() => {
    const ahora = new Date();

    if (ahora.getHours() === 11 && ahora.getMinutes() === 30) {
        presentes = {};
        console.log("Se borró la asistencia");
    }
}, 60000);

app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});