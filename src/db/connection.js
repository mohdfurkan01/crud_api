const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose.connect('mongodb://127.0.0.1:27017/contact-api')
    .then(() => {
        console.log("connection is successful");
    }).catch((e) => {
        console.log("No connection");
    })

