const Chat = require('../models/chat');

// if user.Admin == true
exports.createChat = (req, res, next) => {
  const chat = new Chat({
    id_chat: 1,
    texte: "salut, je voulais savoir si t'étais dispo la semaine prochaine ?",
    participants: ["Aline", "Maurice", "Georges"],
    eventcorr: "nom_event"
  });
  chat.save().then(
    () => {
      res.status(201).json({
        message: "Chat created successfully!"
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

exports.getOneChat = (req, res, next) => {
  Chat.findOne({
    _id: req.params.id
  }).then(
    (chat) => {
      res.status(200).json(chat);
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
exports.modifyChat = (req, res, next) => {
  const chat = new Chat({
    id_chat: req.body.id_chat,
    texte: req.body.texte, 
    participants: req.body.participants,
    eventcorr: req.body.eventcorr
  });
  Chat.updateOne({_id: req.params.id}, chat).then(
    () => {
      res.status(201).json({
        message: "Chat updated successfully!"
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

exports.deleteChat = (req, res, next) => {

  Chat.deleteOne({_id: req.params.id}).then(
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

exports.getAllChat = (req, res, next) => {
  Chat.find().then(
    (chat) => {
      res.status(200).json(chat);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};