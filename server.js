var app=require('express')(),
    port=process.env.PORT||8080,
    morgan=require('morgan'),
    bodyParser=require('body-parser');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(authenticate);


app.get('/',function(req,res){
  res.sendFile(__dirname+'/index.html');
});
app.get('/about',function(req,res){
  res.json({message:'about!'});
});

app.route('/contact')
  .get(function(req,res){
    res.sendFile(__dirname+'/contact.html');
  })
  .post(function(req,res){
    console.log(req.body);
    res.send('hello' +req.body.name+'! Nice to meet you');
  });

app.get('/@:username/:post_slug', checkName, function(req, res){
  console.log(req.params);
  res.send('You are reading ' + req.params.post_slug + ' by ' + req.params.username);
});

function checkName(req, res, next){   //used for authentication
  console.log(req.params+'this is middleware');

  // validation
  // check the DB
  // var user=User.findOne({username:req.params.username});
  // if(!user)

  next();
}
function authenticate(req,res,next){
  // make sure the user is authenticated
  // req.params.token

  console.log('authenticating user..');
  next();
}

app.listen(port,function(){
  console.log('app listening on '+port);
});