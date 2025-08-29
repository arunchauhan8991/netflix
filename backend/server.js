import { ENV_VARS } from "./config/envVariables.js"
import express from "express"
import authroutes from "./routes/auth.route.js"
import { connectDB } from "./config/db.js"
import cookieParser from "cookie-parser";
import movieroutes from "./routes/movie.route.js";
import tvroutes from "./routes/tv.route.js";
import { protectRoute } from "./middleware/protectRoute.js";

const app = express()
app.use(cookieParser());

const PORT = ENV_VARS.PORT

app.use(express.json())    // will allow us to parse req.body 

app.use("/api/v1/auth", authroutes)
app.use("/api/v1/movie", protectRoute, movieroutes)
app.use("/api/v1/tv", protectRoute, tvroutes)




app.listen(PORT , () => {
    console.log(`server is listening at http://localhost:${PORT}`);
    connectDB()
})



