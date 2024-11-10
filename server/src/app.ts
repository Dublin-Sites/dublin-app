import "reflect-metadata";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { AppDataSource } from "./config/data-source";
import userRoutes from "./routes/user.routes";

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

export default app;
