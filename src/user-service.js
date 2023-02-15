import { BaseService } from "./index.js";

class UserService extends BaseService {
  constructor() {
    super();
    this.run();
  }

  attachRoutes() {
    this.router.get(this.baseUrl + "/users", async (req, res) => {
      const { users } = await (
        await fetch("https://dummyjson.com/users")
      ).json();

      res.status(200).send(users);
    });
  }

  configureCLI() {
    this.program.option("--port <value>", "Give a port number", "5000").parse();
    const { port } = this.program.opts();

    this.startServer(port);
  }

  run() {
    this.baseUrl = this.baseUrl + "/user-service";
    this.attachRoutes();
    this.configureCLI();
  }
}

new UserService();
