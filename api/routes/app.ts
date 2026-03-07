import { Router } from "express";

const routes = Router();

routes.get("/ping", (req, res) => res.status(200).send("Hello World!"));

export { routes as HbtRoutes };