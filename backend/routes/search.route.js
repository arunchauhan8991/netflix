import express from "express"
import { getSearchHistory, removeItemFromSearchHistory, searchMovie, searchPerson, searchTv } from "../controller/search.controller.js";

const searchroutes = express.Router();

searchroutes.get("/person/:query", searchPerson)
searchroutes.get("/movie/:query", searchMovie)
searchroutes.get("/tv/:query", searchTv)

searchroutes.get("/history", getSearchHistory)

searchroutes.delete("/history/:id", removeItemFromSearchHistory)

export default searchroutes