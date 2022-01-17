const Cake = require('../models/cake.js');

module.exports = {

    index: function(req, res){

        Cake.find()

            .then(cakes => {

                res.json(cakes)

            })

            .catch(err =>{

                res.json(err)

        })
    },

    addCake: function(req, res){

        console.log('creating cake')

        let cake = new Cake()

            cake.baker = req.body.baker;

            cake.image = req.body.image;
            cake.save()
                .then(cake => {
                    res.json(cake)
                })
                .catch(err =>{
                    res.json(err)
        })
    },

    details: function(req, res){

        Cake.findOne({_id: req.params.id})
            .then(cake=>{
                res.json(cake);



            })
            .catch(err => {
                res.json(err)
        })
    },



    addRating: function(req, res){

        Cake.findOne({_id: req.params.id})

        .then(cake => {

            cake.ratings.push({rating: req.body.rating, comment: req.body.comment})

            cake.save()
            .then(result => {

                res.json(result)
            })
        })

        .catch(err => {
            res.json(err);
        })

    }
}
