module.exports={
  showDashboard: showDashboard
};

function showDashboard(req,res){
  res.send('im dashboard');
}