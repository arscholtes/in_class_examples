const express = require('express');
const app = express();

app.get('/hello', function(req, res) {
  res.send('awwwwww....yeah!')

});


app.get('salutation', function(req, res) {
  res.send(req.params.salutations);
}


app.listen(3000, function() {
  console.log('to make sure that, um, we aregetting something from that port.')
});
