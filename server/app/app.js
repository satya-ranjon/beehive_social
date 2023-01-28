import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";

// INTERNAL IMPORT
import authRoute from "../routers/auth.js";
import userRoute from "../routers/users.js";
import postRoute from "../routers/posts.js";

/* CONFIGURATIONS */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use("assets", express.static(path.join(__dirname, "public/assets")));

/* ROUTES CONNECTION */
app.use("/auth", authRoute);
app.use("/user", userRoute);
app.use("/posts", postRoute);

export default app;
