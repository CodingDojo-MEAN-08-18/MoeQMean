const bodyParser = require('body-parser');

module.exports = function Route(app) {
    app.use(bodyParser.urlencoded({extended: true}));

    app.get('/', function (req, res) {
        res.render('index');
    });

    app.post('/form', function (req, res) {
        submitted = {
            name: req.body.name,
            language: req.body.language,
            location: req.body.location,
            comment: req.body.comment
        };

        // console.log("Name: ", submitted.name);
        // console.log("language: ", submitted.language);
        // console.log("location: ", submitted.location);
        // console.log("comment: ", submitted.comment);

        res.redirect('/');
    });
};