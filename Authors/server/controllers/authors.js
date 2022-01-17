var Author = require('../models/author.js')

module.exports = {
    index: (req, res) => {
        console.log("Showing all")
        Author.find({})

            .then(authors => res.json({data:authors}))
            .catch(err =>{ 
                console.log("Error showing all!", err), 
                res.json(err)

            })
    },
    show_one: (req, res) => {
        console.log("Showing one")

        Author.findOne({_id: req.params.id})

            .then(author => {

                console.log("This is the author object:", author);
                res.json(author);
            })
            .catch(err => {

                console.log("Error showing one!", err),
                res.json(err)

            });
    },
    create: (req, res) => {

        console.log("Creating")
        author = new Author();
        
        author.name = req.body.name;

        author.save()
            .then(newAuthor => {
                console.log('New entry: ', newAuthor), 
                res.json(newAuthor)
            })
            .catch(err => {
                console.log("Error creating one!", err);
                res.json(err);
            });
    },
    update: (req, res) => {

        console.log("Updating")
        Author.findOne({_id: req.params.id})
            .then(updatedAuthor => {
                updatedAuthor.name = req.body.name;

                
                return updatedAuthor.save();
            })
                .then(updatedAuthor =>{
                    res.json(updatedAuthor)
                })
                .catch(err => {
                    console.log("Error updating one"),
                    res.json(err)
                })
            .catch(err => {
                console.log("Error finding one to update"),
                res.json(err)
            })
    },
    destroy: (req, res) => {

        console.log("Deleting")
        Author.deleteOne({_id: req.params.id})
            .then(deletedAuthor => {
                res.json({data: deletedAuthor})
                console.log(deletedAuthor[name] + " has been removed.")
            })
            .catch(err => {

                console.log("Error deleting one"),
                res.json(err)

            })

    },
};
