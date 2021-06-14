import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on por t ${PORT}`);
});
