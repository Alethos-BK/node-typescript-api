import "express-async-errors";
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import customerRouter from './routers/customerRouter';
import swaggerUi from 'swagger-ui-express';
import { specs } from './configs/swagger'; 

const app = express();

//app.use(morgan("tiny"));
app.use(cors());
app.use(helmet());
app.use(express.json())
app.use('/customers/', customerRouter);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));

export default app;