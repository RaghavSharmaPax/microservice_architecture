import { BaseService } from "./index.js";

class PostService extends BaseService {
  constructor() {
    super();
    this.run();
  }

  attachRoutes() {
    this.router.get(this.baseUrl + "/posts", async (req, res) => {
      const { posts } = await (
        await fetch("https://dummyjson.com/posts")
      ).json();

      res.status(200).send(posts);
    });
  }

  configureCLI() {
    this.program.option("--port <value>", "Give a port number", "6000").parse();
    const { port } = this.program.opts();

    this.startServer(port);
  }

  run() {
    this.baseUrl = this.baseUrl + "/post-service";
    this.attachRoutes();
    this.configureCLI();
  }
}

new PostService();
