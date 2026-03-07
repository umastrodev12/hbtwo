import { createServer } from "http";
import express from "express";
import { HbtRoutes } from "./routes/app";

const app = express();
const http = createServer(app);

app.use(HbtRoutes);

export { http };
