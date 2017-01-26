module.exports = {
  moncompte: function (req, res)
  {
    var data = {};

    data.mesdata = {
      title: "Présentation",
      content: "Entrer une description",
      /**uneautre = {
        prop1_de_uneautre = 1,
        prop2_de_uneautre = "sous-titre",
      }**/

    };

    data.user = req.user;

    User.findOne({id:req.user.id}).populate('addresses').exec(function(err, user){
      console.log(user);
      data.user = user;
      return res.view('test',data);
    });

    return res.view('moncompte', data);

  }
};

