const express = require('express');
const app = express();
const server = app.listen(8080, () => {
    console.log(`Server running on port ${server.address().port}`);
});
app.use(express.static('public'))
console.log("imported pages")
app.use(express.static('img')) 
console.log("imported img")
console.log("static imports finished")
