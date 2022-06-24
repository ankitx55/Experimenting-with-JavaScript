// for (let index = 0; index < 5; index++) {
//     console.log("this name is used: ")
// }


const express = require("express");
const app = express();
// console.dir(app);

app.use(() => {
    console.log("We got a new request")
})

app.listen(3000, () => {
    console.log("listening on port 3000")
});