var path = require ("path");

module.exports = {
  moncompte: function (req, res) {
    var data = {};

    data.mesdata = {
      title: "Présentation",
      content: "Entrer une description",
    };

    data.user = req.user;

    var where = {id: req.user.id};

    User.findOne(where)
      .populate('addresses')
      .exec(function (err, user) {
        console.log(user);
        data.user = user;
        return res.view('moncompte', data);
      });

  },


    uploadAvatar: function (req, res) {

      req.file('avatar').upload({
        dirname: require('path').resolve(sails.config.appPath, 'assets/images/avatar') //appPath renvoie chemin absolue
      }, function (err, files) {
        if (err)
          return res.negotiate(err);

        var where = {id: req.user.id, avatarurl: path.basename(files[0].fd)};

        console.log(files[0]);
        console.log(path.basename(files[0].fd));

        User.update(where)
          //.populate('avatarurl')
          .exec(function (error, user) {
            console.log(user);
            data.user = user;
            return res.view('moncompte', data);
          });
      });

    }

};

