const cakes = require("../controllers/cakes.js");

module.exports = function(app){

    app.get("/cakes",(req,res)=>{

         cakes.index(req,res)

    });

    app.post("/cakes", (req,res)=>{

        console.log('in post cakes')

        cakes.addCake(req,res)

    });

    app.post("/ratings/:id", (req,res) => {

        cakes.addRating(req, res);

    });

    app.get("/cakes/:id", (req,res)=>{
        
        cakes.details(req,res);

    });


}