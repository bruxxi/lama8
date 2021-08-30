import dotenv from "dotenv";
import {AddressInfo} from "net";
import express from "express";
import { userRouter } from "./routes/userRouter";
import { bandRouter } from "./routes/bandRouter";
import { concertRouter } from "./routes/concertRouter";
dotenv.config();
const app = express();

app.use(express.json());

app.use("/user", userRouter);
app.use("/band", bandRouter)
app.use("/concert", concertRouter)

const server = app.listen(process.env.PORT ||3000, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Servidor rodando em http://localhost:${address.port}`);
    } else {
      console.error(`Falha ao rodar o servidor.`);
    }
  });