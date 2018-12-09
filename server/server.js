const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const pool = require('./modules/pool');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
// POST new feedback
app.post('/submit', async (req, res) => {
	// hold all the data in a var
	const feedbackAnswers = req.body;
	console.log('in server post feeling', feedbackAnswers.feeling);
	console.log('in server post understanding', feedbackAnswers.understanding);
	console.log('in server post support', feedbackAnswers.support);
	console.log('in server post comments', feedbackAnswers.comments);
	// hold sql insert text in a var
	const queryTxt = `INSERT INTO "feedback" 
		("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4,);`;
	// post into sql
	pool.query(queryTxt, [feedbackAnswers.feeling, feedbackAnswers.understanding,
		feedbackAnswers.support, feedbackAnswers.comments])
			.then(result => {
			// send back the results
			res.sendStatus(201);
			}).catch(error => {
				res.sendStatus(500);
	})
});

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
	console.log('Listening on port: ', PORT);
});