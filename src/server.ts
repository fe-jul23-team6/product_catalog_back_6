import express from 'express';
import cors from 'cors';
import { productsRouter } from './routes/products.route';


const PORT = 5050;
const app = express();

// const CLIENT_ORIGIN = process.env.CLIENT_URL;

// app.use(cors({
//   origin: CLIENT_ORIGIN,
// }));

app.use(cors());


app.use('/products', express.json(), productsRouter);


app.get('/', (req, res) => {
  res.end('Hello world!');
});

app.listen(PORT, () => {
  console.log(`API is running on http://localhost:${PORT}`);
});
