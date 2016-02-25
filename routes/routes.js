var _ = require('lodash');
var moment = require('moment');
var sugar = require('sugar');

var momentTime;
var timeNaturalLang;

module.exports = function(app){

    app.get('/', function(req, res){
        res.render('index');
    });


    app.get('/:string(\\d{10})', function(req,res){
        var dateInt = parseInt(req.params.string);
        momentTime = moment(dateInt*1000);
        timeNaturalLang = momentTime.utc().format('MMMM D, YYYY');
        res.json({
            unix: dateInt,
            natural: timeNaturalLang
        })
    });



    app.get('/:string', function(req,res){
        sugarTime = Date.utc.create(req.params.string); // 1
        if (sugarTime == 'Invalid Date') {
            res.json({
                unix: null,
                natural: null
            });
        } else {
            timeNaturalLang = sugarTime.utc().short();
            res.json({
                unix: sugarTime.utc().getTime() / 1000,
                natural: timeNaturalLang
            });
        }
    });



};

// 1 - Date.create comes from sugar