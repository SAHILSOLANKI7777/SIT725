const express = require('express');
const app = express();
const port = 3000;


app.use(express.static('public'));


app.get('/add', (req, res) => {
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);
    let sum = num1 + num2;
    res.send(`Sum: ${sum}`);
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
