const express = require("express");
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Halo ini webnya terbaru</h1>');
});

app.listen(PORT, () => console.log(`Server berjalan di port ${PORT}`));