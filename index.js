const express = require('express');
const path = require('path')
//init app
const app = express();
//load view engine
app.set('views',path.join(__dirname,'./views'));
app.set('view engine','pug');
app.use(express.static(path.join(__dirname,'./public')))
//home route
app.get('/',function(req,res){
  res.render('index.pug');
});
//init sereve
app.listen(3000,function(){
  console.log('server started 3000 port');
})
