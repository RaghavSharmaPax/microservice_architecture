import express, { Router } from "express";
import { Command } from "commander";

class BaseService {
  constructor() {
    this.runBase();
  }

  startServer(port) {
    this.app.listen(port, () => console.log(`Listening on port ${port}`));
  }

  runBase() {
    this.app = express();
    this.router = new Router();
    this.baseUrl = "/api/service";
    this.program = new Command();

    // middleware
    this.app.use(express.json());
    this.app.use(this.router);
  }
  // config function for commander
}
export { BaseService };
