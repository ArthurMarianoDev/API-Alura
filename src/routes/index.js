import express from "express";
import livros from "./livroRoutes.js"
import autor from "./autoresRoutes.js"

const routes = (app) => {
  app.route("/").get((req,res)=>res.status(200).send("Curso de node.js"))

 app.use(express.json(), livros, autor);

};

export default routes;
