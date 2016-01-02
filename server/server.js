
// Use strict mode to enable ES6 : class, etc ...
'use strict';

// Prepare server environment
//==============================================================================

var app = require("./app").app();

// START THE SERVER
// =============================================================================

// set our port in the PORT environment variable
var port = process.env.PORT || 3000;

app.listen(port);
console.log(new Date());
console.log('Waiting for connection on port ' + port);
