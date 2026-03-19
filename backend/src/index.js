import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import apiRoutes from './routes/api.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares Globais
app.use(cors()); // Permite o React (Vite) chamar a API sem erros de CORS
app.use(express.json()); // Permite que a API leia o req.body em formato JSON no Checkout

// Registro de Rotas
app.use('/api', apiRoutes);

// Rota Raiz (Healthcheck)
app.get('/', (req, res) => {
    res.json({ message: 'Bem-vindo à API Premium da PanPizz!' });
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor Back-end rodando majestosamente na porta ${PORT}`);
});
