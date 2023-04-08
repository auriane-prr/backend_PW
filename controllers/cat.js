const Cat = require('../models/cat');

// if user.Admin == true
exports.createCat = (req, res, next) => {
  const cat = new Cat(
    { num_cat: 1, libelle: "DIY"},
    { num_cat: 2, libelle: "With your friends"},
    { num_cat: 3, libelle: "Environment"},
    { num_cat: 4, libelle: "Help"},
  );
  cat.save().then(
    () => {
      res.status(201).json({
        message: 'Categorie created successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getOneCat = (req, res, next) => {
  Cat.findOne({
    _id: req.params.id
  }).then(
    (cat) => {
      res.status(200).json(cat);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

// if user.Admin == true
exports.modifyCat = (req, res, next) => {
  const cat = new Cat({
    num_cat: req.body.num_cat,
    libelle: req.body.libelle, 
  });
  Cat.updateOne({_id: req.params.id}, cat).then(
    () => {
      res.status(201).json({
        message: 'Categorie updated successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.deleteCat = (req, res, next) => {
  Cat.deleteOne({_id: req.params.id}).then(
    () => {
      res.status(200).json({
        message: 'Deleted!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getAllCat = (req, res, next) => {
  Cat.find().then(
    (cat) => {
      res.status(200).json(cat);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};