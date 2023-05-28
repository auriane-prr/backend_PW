const Image = require('../models/image');

exports.createImage = (req, res, next) => {
    const image = new Image({
      nom_image: req.body.nom_image,
    });
    image.save().then(
      () => {
        res.status(201).json({
          message: "Image posted successfully!"
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

exports.getImage = (req, res, next) => {
    Image.findOne({
      nom_image: req.params.nom_image
    }).then(
      (image) => {
        res.status(200).json(image);
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
  };