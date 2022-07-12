const express = require('express');
const app = express();


app.use(express.urlencoded({extended: true}));
app.use(express.json());




app.get('/tacos', (req, res) => {
    res.send("expect request /tacos")
})

app.post('/tacos', (req, res) => {
    const {name, quantity} = req.body;
    res.send(`Here are your ${quantity} ${name}`)
})


app.listen(3000, () => {
    console.log("listening on port 3000")
});
