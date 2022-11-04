import Express from "express";
import cors from "cors";
import listEndpoints from "express-list-endpoints";

const server = Express();
const port = 3004;

server.use(cors());
server.use(Express.json());

server.listen(port, () => {
  console.table(listEndpoints(server));
  console.log(`the server is running in port ${port}`);
});
