'use strict';
// **Github:** https://github.com/thunks/toa
//
// **License:** MIT

var Toa = require('../index');
var app = Toa(function (Thunk) {
  this.body = this.toJSON();
});

app.listen(3000);
