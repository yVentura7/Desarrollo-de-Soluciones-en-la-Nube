const express = require('express');
const app = express();
const port = 9000;

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static('public'));

// Rutas
const clientesRoutes = require('./routes/cliente');
const productosRoutes = require('./routes/productos');

app.use('/clientes', clientesRoutes);
app.use('/productos', productosRoutes);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
