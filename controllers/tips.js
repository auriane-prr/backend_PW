const Tips = require('../models/tips');

exports.createTips = ('/add-tip', async (req, res) => {
  const { nom_tips, description, image } = req.body;
  const newTips = new Tips({nom_tips, description, image });
  try {
    await newTips.save();
    res.send('Tips added successfully!');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error adding tips!');
  }
});

exports.getOneTips = (req, res, next) => {
  Tips.findOne({
    _id: req.params.id
  }).then(
    (tips) => {
      res.status(200).json(tips);
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
exports.modifyTips = (req, res, next) => {
  const tips = new Tips({
    nom_tips: req.body.nom_tips,
    description: req.body.description, 
    image: req.body.image,
  });
  Tips.updateOne({_id: req.params.id}, tips).then(
    () => {
      res.status(201).json({
        message: "Tips updated successfully!"
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

exports.deleteTips = (req, res, next) => {
  const supp_tips = req.params.nom_tips;
  Tips.findOneAndDelete({ nom_tips: supp_tips })
    .then((deletedTips) => {
      if (!deletedTips) {
        return res.status(404).json({
          message: "Tips not found"
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

exports.getAllTips = (req, res, next) => {
  Tips.find().then(
    (tips) => {
      res.status(200).json(tips);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};