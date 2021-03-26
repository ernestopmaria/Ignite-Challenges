/* eslint-disable prettier/prettier */
import express from "express";
import swagguerUi from 'swagger-ui-express'

import { usersRoutes } from "./routes/users.routes";
import swaggerFile from './swagger.json'


const app = express();

app.use(express.json());
app.use("/api-docs", swagguerUi.serve, swagguerUi.setup(swaggerFile))
app.use("/users", usersRoutes);

export { app };
