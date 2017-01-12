module.exports = {

  identifiant: function (req, res)
  {
    var identifiant = {};

    identifiant.mesdata = {
      title: "Changer les identifiants"
    };

    identifiant.user= req.user;

    return res.view('identifiant', identifiant);
  }
};
