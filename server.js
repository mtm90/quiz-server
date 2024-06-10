const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

let quizAnswers = [];

// POST route to submit answers
app.post('/submit-answers', (req, res) => {
    const answers = req.body;
    quizAnswers.push(answers);
    console.log('Received answers:', answers);  // Log received answers
    res.status(200).send({ message: 'Answers received successfully!' });
});

// GET route to retrieve all submitted answers
app.get('/submit-answers', (req, res) => {
    console.log('Retrieving all answers');  // Log retrieval attempt
    res.status(200).json(quizAnswers);
});

app.get('/', (req, res) => {
    res.send('Quiz Server is running');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
