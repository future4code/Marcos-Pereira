import dotenv from "dotenv";
import { AddressInfo } from "net";
import express from "express";
import { walkingRouter } from "./routes/WalkingRouter";

dotenv.config();
const app = express();
app.use(express.json());

app.get("/", walkingRouter);
app.post("/walking", walkingRouter);
app.get("/show/:id", walkingRouter);
app.get("/start_walk/:id", walkingRouter);
app.get("/finish_walk/:id", walkingRouter);

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

export default app;
