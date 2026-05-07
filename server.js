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

// ⏱ BORRADO AUTOMÁTICO (PROTOCOLO)
setInterval(() => {
    presentes = {};
    console.log("Se borró la asistencia (modo prototipo)");
}, 60000);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
