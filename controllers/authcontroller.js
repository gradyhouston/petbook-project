var exports = module.exports = {};
const db = require('../models');
const Pets = db.Pets;
const Users = db.Pets;

exports.signup = function(req, res) {
  console.log(req.body);
  res.render('signup.handlebars');
};

exports.signin = function(req, res) {
  console.log(req.body);
  res.render('signin.handlebars');
};

exports.userloggedin = function(req, res) {
  // req.user is created automatically by express-session and passport
  // the req.user object is identified based on a browser cookie
  Pets.findAll({
      where: {
        UserId: req.user.id
      }
    })
    .then(arrayOfSequelizePetObjects => {
      const petObjects = arrayOfSequelizePetObjects.map(obj => obj.dataValues);

      res.render('profile.handlebars', {
        user: req.user,
        pets: petObjects
      });
    })
};
exports.UserId = function(req, res) {
  const UserId = req.user.id.val();
  return UserId
}

// exports.near = function(req, res) {
//   Pets.findAll({
//       where: {
//         UserId: req.user.id
//       }
//     })
//     .then(arrayOfSequelizePetObjects => {
//       const petObjects = arrayOfSequelizePetObjects.map(obj => obj.dataValues);
//
//       res.render('near.handlebars', {
//         user: req.user,
//         pets: petObjects
//       });
//     })
// };

exports.logout = function(req, res) {
  req.session.destroy(function(err) {
    res.redirect('/');
  })
}
