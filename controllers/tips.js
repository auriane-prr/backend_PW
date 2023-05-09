const Tips = require('../models/tips');

/* if user.Admin == true
exports.createTips = (req, res, next) => {
  const tips = new Tips({
    num_tips: req.body.num_tips,
    nom_tips: req.body.nom_tips,
    description: req.body.description,
  });
  tips.save().then(
    () => {
      res.status(201).json({
        message: "Tips created successfully!"
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
*/

exports.createTips = ('/add-tip', async (req, res) => {
  const { nom_tips, description } = req.body;
  const newTips = new Tips({nom_tips, description });
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
  Tips.deleteOne({_id: req.params.id}).then(
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