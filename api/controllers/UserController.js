module.exports = {
  moncompte: function (req, res)

  {
    var data = {};

    data.mesdata = {
      title: "Présentation",
      content: "Entrer une description",
    };

    data.user = req.user;

    var where = {id: req.user.id};

    User.findOne(where)
      .populate('addresses')
      .exec(function(err, user){
      console.log(user);
      data.user = user;
      return res.view('moncompte', data);
    });

  }


};

