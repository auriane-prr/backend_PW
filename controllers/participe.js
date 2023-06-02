const Participe = require('../models/participe');

exports.createParticipe = (req, res, next) => {
    const part = new Participe({
        email_u : req.body.email_u,
        event: req.body.nom,
        defi: req.body.defi
    });
    part.save().then(
      () => {
        res.status(201).json({
          message: "Vous êtes bien inscrit!"
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

exports.getOneParticipe = (req, res, next) => {
  Participe.findOne({
    _id: req.params.id
  }).then(
    (part) => {
      res.status(200).json(part);
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
exports.modifyParticipe = (req, res, next) => {
  const part = new Participe({
    email_u : req.body.email_u,
        event: req.body.nom,
        defi: req.body.defi
  });
  Participe.updateOne({_id: req.params.id}, part).then(
    () => {
      res.status(201).json({
        message: "Participation mise à jour"
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

exports.deleteParticipe = (req, res, next) => {
  const supp_part = req.params.email_u;
  Participe.findOneAndDelete({ email_u: supp_part })
    .then((deletedParticipe) => {
      if (!deletedParticipe) {
        return res.status(404).json({
          message: "Participation not found"
        });
      }
      res.status(200).json({
        message: "Deleted!"
      });
    })
    .catch(error => {
      res.status(400).json({
        error: error
      });
    });
};

exports.getAllParticipe = (req, res, next) => {
  Participe.find().then(
    (part) => {
      res.status(200).json(part);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};