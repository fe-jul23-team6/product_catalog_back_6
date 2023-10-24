import express from 'express';
// import cors from 'cors';


const PORT = 5050;
const app = express();

// const CLIENT_ORIGIN = process.env.CLIENT_URL;

// app.use(cors({
//   origin: CLIENT_ORIGIN,
// }));
app.get('/', (req, res) => {
  res.end('Hello world!');
});

app.listen(PORT, () => {
  console.log(`API is running on http://localhost:${PORT}`);
});
