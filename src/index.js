import http from "http";
import { app } from "./app.js";
import "dotenv/config";
import { connectDataBase } from "./db.connect.js";
const server = http.createServer(app);
server.listen(port, () => {
  connectDataBase();
  console.log(`server is running on ${port}`);
});
