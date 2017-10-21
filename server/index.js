const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , middleware = require('./middleware')
    , session = require('express-session');

const app = express();
app.use(bodyParser.json());
app.use(cors());
// app.use(middleware.isAuthed);
app.use(session({
    secret: 'jbeebsistheman',
    resave: false,
    saveUninitialized: true
}))


// app.use is middleware! also, when you do app.use, it applies to all endpoints
// app.use(function (req, res, next) {
//     console.log('middleware');
//     next();
// });


// example showing middleware. wouldn't send password in a url query
// app.use(function (req, res, next) {
//     if (req.query.password === 'mylittlepony') {
//         next()
//     } else {
//         res.status(403).send('Nice try...')
//     }
// });

app.get('/api/users', function (req, res) {
    req.session.favCar = 'Porsche 911 GT3 RS';
    res.status(200).send(req.session.favCar);
})

// app.get('/api/secretData', function(req, res) {
//     res.status(200).send('super secret data')
// })


// run this in Postman and look at editor terminal and Postman to see middleware and endpoint in action.
// app.get('/api/users', function (req, res, next) {
//     console.log('I am the middleware');
//     next();
// }, function (req, res) {
//     res.status(200).send('Hello');
// })

const PORT = 3838;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));