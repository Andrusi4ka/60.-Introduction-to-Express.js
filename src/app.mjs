import express from 'express'
import router from './routes/root.mjs'

const PORT = 3000;
const app = express();

app.use('/', router)

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});