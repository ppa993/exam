var express = require('express');
var router = express.Router();
var questions = require('./questions');


router.get('/', (req, res) => {
    res.send('Hello there!');
});

/*
 * GET dish list.
 */
router.get('/exam', (req, res) => {
    var db = req.db;
    var collection = db.get('records');
    collection.find({}, {}, function (e, docs) {
        res.json(docs);
    });
});

/*
 * GET dish by ID.
 */
router.get('/exam/:id', function (req, res) {
    var db = req.db;
    var collection = db.get('records');
    var nric = req.params.id;
    collection.findOne({ 'nric': nric }, {}, function (e, docs) {
        res.json(docs);
    });
});

/*
 * POST to add new dish.
 */
router.post('/exam', (req, res) => {
    var record = req.body;
    var count = 0;
    record.data.forEach(item => {
        if (questions.some(q => q.question === item.question && q.answer === item.answer)) count++;
    })

    var nr = {
        nric: record.nric,
        result: count,
        total: questions.length,
        time: Date.now()
    } 

    var db = req.db;
    var collection = db.get('records');
    collection.insert(nr, function(err, result){
        res.send(
            (err === null) ? { msg: '' } : { msg: err }
        );
    });
});

module.exports = router;