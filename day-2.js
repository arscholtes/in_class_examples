// const express = require('express');
// const app = express();
//
// app.get('/hello', function(req, res) {
//   res.send('awwwwww....yeah!')
//
// });
//
//
// app.get('salutation', function(req, res) {
//   res.send(req.params.salutations);
// }
//
//
// app.listen(3000, function() {
//   console.log('to make sure that, um, we aregetting something from that port.')
// });


const express = require('express');
const app = express();

const operator = {
  add: (num1, num2) => num1 + num2;
  subtract: (num1, num2) => num1 - num2;
  multiply: (num1, num2) => num1 * num2;
  divide: (num1, num2) => num1 / num2;
});

app.get('/:operator/:num1/:num2', function (req, res) {
  let operator = req.params.operator;
  console.log(operator);
  let num1 = req.params.num1;
  console.log(num1);
  let num2 = req.params.num2;
  console.log(num2);
  res.send("Answer:" + (Number(req.params.num1) + operator + Number(req.params.num1))
});




// app.get('/lorem/:count', function (req, res) {
//   let count = req.params.count;
//   console.log(count);
//   let text = loremIpsum({
//   count: count,
//   units: 'paragraphs',
//   format: "html"
//   })
//   res.send(text)
// });
