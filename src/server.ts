import express from 'express';
import cors from 'cors';
import { productsRouter } from './routes/products.route';
import { connect } from './connectDB';


const PORT = 5050;
const app = express();

connect();

app.use(cors());

app.use('/products', express.json(), productsRouter);


app.get('/', (req, res) => {
  res.end('Hello world!');
});

app.listen(PORT, () => {
  console.log(`API is running on http://localhost:${PORT}`);
});
