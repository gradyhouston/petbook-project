const db = require('../models');
const Pets = db.Pets;
const User = db.User;
const path = require("path");

module.exports = function(app) {

  function isPetsExist(condition) {

    return new Promise((resolve, reject) => {
      Pets.findOne({
        where: condition
      }).then((Pets) => {
        if (Pets != null) {
          resolve(true);
        } else {
          resolve(false);
        }
      }).catch((err) => {
        reject(err)
      });
    });
  };

  app.post("/api/signup-pet", (req, res) => {
    console.log(req.body);
    let newPets = {};
    newPets = req.body;
    isPetsExist({
      Pets_name: newPets.Pets_name
    }).then((result) => {
      if (!result) {
        Pets.create(newPets)
          .then(function(dbPets) {
            res.json(dbPets);
            return dbPets;
          })
          .catch(function(err) {
            res.json(err);
          });
        // res.render('profile.handlebars', {
        //   data: JSON.stringify(data, null, 4);
        // });b
      } else {
        console.log('Pets already exist in the Database');
      };
    });
  });

  // app.get("/signup-pet", function(req, res) {
  //   res.render('signup-pet.handlebars', req.user)
  // });


};