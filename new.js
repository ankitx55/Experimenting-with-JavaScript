// for (let index = 0; index < 5; index++) {
//     console.log("this name is used: ")
// }


const express = require("express");
const app = express();
// console.dir(app);

app.listen(3000, () => {
    console.log("listening on port 3000")
});


app.get('/r/:subreddit', (req, res) => {
        const { subreddit } = req.params;
        res.send(`<h1>browsing the ${subreddit}search`);
    })
    app.use((req, res) => {
        console.log("We got a new request")
        res.send("this is a response, we accepted your request");
    })

app.get('/cats', (req, res) => {
    console.log("new request for cats")
    res.send(`We got a new request of cats`)
})


app.get('/search', (req, res) => {
    
    const { q } = req.query;
    res.send(`<h1>this is the result of the search ${q}</h1>`)
    console.log("new request for a search")
})

app.get('*', (req, res) => {
    console.log("nothing found")
    res.send("this is the default page")
})