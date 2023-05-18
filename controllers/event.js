const Event = require('../models/event');

// if user.Admin == true
exports.createEvent = (req, res, next) => {
  const event = new Event({
    nom_event: req.body.nom_event,
    adresse: req.body.adresse,
    date: req.body.date,
    description: req.body.description,
    point: req.body.point,
  });
  event.save().then(
    () => {
      res.status(201).json({
        message: "Event created successfully!"
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

exports.getOneEvent = (req, res, next) => {
  Event.findOne({
    _id: req.params.id
  }).then(
    (event) => {
      res.status(200).json(event);
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
exports.modifyEvent = (req, res, next) => {
  const event = new Event({
    nom_event: req.body.nom_event,
    adresse: req.body.adresse,
    date: req.body.date,
    description: req.body.description,
    point: req.body.point,
  });
  Event.updateOne({_id: req.params.id}, event).then(
    () => {
      res.status(201).json({
        message: "Event updated successfully!"
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

exports.deleteEvent = (req, res, next) => {
  const nom_event = req.params.nom_event;
  Event.findOneAndDelete({ nom_event: nom_event })
    .then(() => {
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


exports.getAllEvent = (req, res, next) => {
  Event.find().then(
    (event) => {
      res.status(200).json(event);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};