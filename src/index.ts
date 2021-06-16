import express, { Request, Response } from 'express';
import routes from "./controllers/Users";
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
