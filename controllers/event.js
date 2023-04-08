const Event = require('../models/event');

exports.createEvent = (req, res, next) => {
  const event = new Event({
    num_event: req.body.num_event,
    nom_event: req.body.nom_event,
    adresse: req.body.adresse,
    place: req.body.place,
    date_deb: req.body.date_deb,
    date_fin: req.body.date_fin,
    description: req.body.description,
    point: req.body.point,
    link:req.body.link,
    
  });
  thing.save().then(
    () => {
      res.status(201).json({
        message: 'Event created successfully!'
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
    (thing) => {
      res.status(200).json(thing);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.modifyEvent = (req, res, next) => {
  const event = new Event({
    num_event: req.body.num_event,
    nom_event: req.body.nom_event,
    adresse: req.body.adresse,
    place: req.body.place,
    date_deb: req.body.date_deb,
    date_fin: req.body.date_fin,
    description: req.body.description,
    point: req.body.point,
    link:req.body.link,
  });
  Event.updateOne({_id: req.params.id}, event).then(
    () => {
      res.status(201).json({
        message: 'Event updated successfully!'
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

    // if date_fin >= current date => delete
  Event.deleteOne({_id: req.params.id}).then(
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