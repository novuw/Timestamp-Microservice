// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
app.use(function(req, res){
    var dObj = {"unix": '', 
          "natural": ""};
    var date;
    var exp = /%20/g;
    var link = req.url.substring(1);
    var test = Number(link).toString();
   if(test == 'NaN'){
       //natural date DONE
      var nat = link.replace(exp, " ")
      date = new Date(nat);
      var unix = Number(date.getTime()) / 1000;
      dObj.unix = unix.toString();
      dObj.natural = nat;
      res.end(JSON.stringify(dObj));
    } else if(test != NaN && Number(link) !== 0){
      //unix DONE
      var date = new Date(Number(link) * 1000);
      dObj.unix = link;
      dObj.natural = date.toString();
      res.end(JSON.stringify(dObj));
    } else{
    //neither DONE
      dObj.unix = null;
      dObj.natural = null;
      res.end(JSON.stringify(dObj));
    }
});


// http://expressjs.com/en/starter/basic-routing.html


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
