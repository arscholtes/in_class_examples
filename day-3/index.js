// middleWare => what happens to the input to get the output
/* module imports *************************************************************/
const express = require("express");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");

const app = express();

/* middleware *****************************************************************/
// serve static content out of this directory
app.use(express.static("./"));
// parse all requests using the generic body parser (req.body is now available)
app.use(bodyParser.urlencoded({extended: true}));
// gives us a way to validate input (e.g., ensure emails are valid)
app.use(expressValidator());

/* routes *********************************************************************/
app.post("/", function(req, res) {
    req.checkBody("email", "Pleas input a valid email address")
      // is the string empty?
      .notEmpty()
      // is the string a valid email address?
      .isEmail();
    // an array of objects encoding which fields failed validation and the corresponding error message
    const errors = req.validationErrors();

    if (errors) {
      // just return the whole array as a string
      res.send(errors);
    } else {
      // get the email from the request body
      res.send("<p>Your user name is: " + req.body.email + "</p>");
    }
});

// start
app.listen(8000, () => console.log("ready!"));
