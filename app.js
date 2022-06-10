import express from "express";
import user from "./routes/user.js"
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import cors from "cors"

export const app = express();

app.use(express.json());
app.use(fileUpload({
    limits: {fileSize: 50 * 1024 *1024},
    useTempFiles: true
}))
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
app.use("/api/v1", user)