const express = require('express');
const app = express();
const PORT = 3000;
app.get('/', (req, res) => {
    res.send('Halo! Aplikasi express ini jalan di docker!');
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});