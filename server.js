const express = require('express')

const app = express()

// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));

// Start the app by listening on the default
// Heroku port
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`app started on port ${port}`)
});
