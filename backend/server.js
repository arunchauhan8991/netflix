import { ENV_VARS } from "./config/envVariables.js"
import express from "express"
import authroutes from "./routes/auth.route.js"
import { connectDB } from "./config/db.js"

const app = express()

const PORT = ENV_VARS.PORT

app.use(express.json())    // will allow us to parse req.body 

app.use("/api/v1/auth", authroutes)




app.listen(PORT , () => {
    console.log(`server is listening at http://localhost:${PORT}`);
    connectDB()
})