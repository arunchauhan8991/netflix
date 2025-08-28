import express from "express"
import authroutes from "./routes/auth.route.js"

const app = express()


app.use("/api/v1/auth", authroutes)




app.listen(3000, () => {
    console.log("server is listening at http://localhost:3000");
    
})