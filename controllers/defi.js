const Defi = require('../models/defi');

// if user.Admin == true
exports.createDefi = (req, res, next) => {
  const defi = new Defi({
    num_defi: req.body.num_defi,
    nom_defi: req.body.nom_defi,
    date_deb: req.body.date_deb,
    date_fin: req.body.date_fin,
    description: req.body.description,
    point: req.body.point,    
  });
  defi.save().then(
    () => {
      res.status(201).json({
        message: "Defi created successfully!"
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

exports.getOneDefi = (req, res, next) => {
  Defi.findOne({
    _id: req.params.id
  }).then(
    (defi) => {
      res.status(200).json(defi);
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
exports.modifyDefi = (req, res, next) => {
  const defi = new Defi({
    num_defi: req.body.num_defi,
    nom_defi: req.body.nom_defi,
    date_deb: req.body.date_deb,
    date_fin: req.body.date_fin,
    description: req.body.description,
    point: req.body.point, 
  });
  Defi.updateOne({_id: req.params.id}, defi).then(
    () => {
      res.status(201).json({
        message: "Defi updated successfully!"
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

exports.deleteDefi = (req, res, next) => {

    // if date_fin >= current date => delete
  Defi.deleteOne({_id: req.params.id}).then(
    () => {
      res.status(200).json({
        message: "Deleted!"
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

exports.getAllDefi = (req, res, next) => {
  Defi.find().then(
    (defi) => {
      res.status(200).json(defi);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};