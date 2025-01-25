import "dotenv-safe/config";
import express from "express";
import cors from "cors";
import cookieParser from 'cookie-parser';
import logger from "morgan";
import { errorHandler, notFoundHandler } from "./middlewares/errorHandler";
import aiRoutes from './routes/aiRoutes';

const app = express();

app.use(cors({ 
    origin: '*',
    credentials: true
}));
app.use(logger('dev'))
app.use(cookieParser());
app.use("/api/ai", aiRoutes);
app.use(notFoundHandler);
app.use(errorHandler);

const PORT = process.env.PORT || 3005;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
