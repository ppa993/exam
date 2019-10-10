var express = require('express');
var router = express.Router();
var questions = require('./questions');


router.get('/', (req, res) => {
    res.send('Hello there!');
});

/*
 * GET dish list.
router.get('/', (req, res) => {
    var result = req.body;
    var count = 0;
    result.forEach(item => {
        if (questions.some(q => q.question === item.question && q.answer === item.answer)) count++;
    })
    res.json({result: count});
});
 */

/*
 * GET dish by ID.
router.get('/:id', function (req, res) {
    var db = req.db;
    var collection = db.get('dishes');
    var articalID = req.params.id;
    collection.find({ '_id': articalID }, {}, function (e, docs) {
        res.json(docs);
    });
});
 */

/*
 * POST to add new dish.
 */
router.post('/submit', (req, res) => {
    var result = req.body.data;
    var count = 0;
    result.forEach(item => {
        if (questions.some(q => q.question === item.question && q.answer === item.answer)) count++;
    })
    res.json({result: count, total: questions.length});
});

/*
 * DELETE to delete dish.
router.delete('/:id', function(req, res) {
    var db = req.db;
    var collection = db.get('dishes');
    var articalToDelete = req.params.id;
    collection.remove({ '_id': articalToDelete }, function(err) {
        res.send((err === null) ? { msg: '' } : { msg:'error: ' + err });
    });
});
 */

module.exports = router;