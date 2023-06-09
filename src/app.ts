import "reflect-metadata"
import "express-async-errors"
import express from "express"
import cors from "cors"
import { usersRoutes } from "./routes/users.routes"
import { handleAppErrorMiddleware } from "./middlewares/handleAppError.middleware"
import { loginRoutes } from "./routes/login.routes"
import { contactRoutes } from "./routes/contact.routes"



const app = express()

app.use(cors());
app.use(express.json())

app.use("/users", usersRoutes)
app.use("/login", loginRoutes)
app.use("/contact", contactRoutes)

app.use(handleAppErrorMiddleware)

export default app