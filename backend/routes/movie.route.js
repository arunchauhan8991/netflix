import express from "express"
import { getMovieDetails, getMoviesByCategory, getMovieTrailers, getSimilarMovies, getTrendingMovie } from "../controller/movie.controller.js"

const movieroutes = express.Router()

movieroutes.get("/trending", getTrendingMovie)
movieroutes.get("/:id/trailers", getMovieTrailers)
movieroutes.get("/:id/details", getMovieDetails);
movieroutes.get("/:id/similar", getSimilarMovies);
movieroutes.get("/:category", getMoviesByCategory);

export default movieroutes