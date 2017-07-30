var app=require('express')(),
    port=process.env.PORT||8080,
    morgan=require('morgan'),
    bodyParser=require('body-parser');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:true}));

app.use(require('./app/routes'));

app.listen(port,function(){
  console.log('app listening on '+port);
});