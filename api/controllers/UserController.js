module.exports = {
  moncompte: function (req, res)
  {
    var data = {};

    data.mesdata = {
      title: "Titre",
      content: "Contenu",
      /**uneautre = {
        prop1_de_uneautre = 1,
        prop2_de_uneautre = "sous-titre",
      }**/
    };

    data.user= req.user;

    return res.view('moncompte', data);
  }
};

