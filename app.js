var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var itemRouter = require('./routers/item');
var cors = require('cors')


var app = express();
app.use(cors())
var PORT = 8084;
var HOST_NAME = 'localhost';
var DATABASE_NAME = 'shoppingList';

mongoose.set('strictQuery',false)

//mongoose.connect('mongodb+srv://rishi:rMQXtq0YmVXree5h@cluster0.rp4mxa9.mongodb.net/?retryWrites=true&w=majority')
mongoose.connect("mongodb://127.0.0.1:27017/Item", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
  


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/api', itemRouter);

app.listen(PORT, function () {
  console.log('Listening on port ' + PORT);
});
