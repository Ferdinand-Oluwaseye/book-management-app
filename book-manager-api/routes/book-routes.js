var express = require('express');
var router = express.Router();
var bookScheme = require('../schema/book-schema.js')



router.get('/', (res,req,next) => {
    bookScheme.BookModel.find(function (err,books){
        if(err){
            console.log(err);
        }else{
            res.json(books);
        }
    })
});


router.post('/add', (req,res) => {
    let book = new bookScheme.BookModel(req.body);
    book.save()
        .then(book =>{
            res.status(200).json({'book':'book added successfully'});
        })
        .catch(err => {
            res.status(400).send("unable to save to db");
        });
});

router.route('/edit/:id').get( (req, res) => {
    let id = req.params.id;
    bookScheme.BookModel.findById(id, (err, book) => {
        res.json(book);
    });
});



router.delete('/delete/:id',(req,res) => {
    bookScheme.BookModel.findByIdAndRemove({_id: req.params.id},(req,res) => {
        if(err){
            res.json(err);
        }else{
            res.json('removed successfully');
        }
    });
});

router.get('/update/:id',(req,res) => {
    bookScheme.BookModel.findById(req.params.id, (err,next,book) =>{
        if(!book){
            return next(new Error('Could not load DOcument'))
        }else{
            book.book_name = req.body.book_name;
            book.author_name = req.body.author_name;
            book.serial_number = req.body.serial_number;

            book.save().then(book => {
                res.json('Update done')
            })
            .catch(err => {
                res.status(400).send("unable to update the database");
            })
        }
    });
});




module.exports = router;
