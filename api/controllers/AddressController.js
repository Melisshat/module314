module.exports = {

  address: function (req, res)
  {
    var address = {};

    address.mesdata = {
      title: "Changer l'adresse"
    };

    address.user= req.user;

    return res.view('address', address);
  }
};
