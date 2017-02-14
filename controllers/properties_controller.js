'use strict';

const propertiesGo = require('../utils/ws_part1');

// GET /properties/:id
module.exports.getPropertyByID = (req, res) => {
  const id = req.params.id.toString().trim();
  
  const data = {
    "type": "get",
    "key": id
  };

  propertiesGo.myProcessMsg(data, (err, response) => {
    if (err) {
      console.log(err);
      return res.status(500).end("Something went wrong. Check console");
    }
    return res.json(response);
  });
};

// POST /properties
module.exports.createProperty = (req, res) => {

  const property = {
    "owner": req.body.owner.toString().trim(),
    "aadhar": req.body.aadhar.toString().trim(),
    "area": req.body.area.toString().trim(),
    "location": req.body.location.toString().trim()
  };

  const data = {
    "type": "create",
    property
  };

  propertiesGo.myProcessMsg(data, (err, response) => {
    if (err) {
      console.log(err);
      return res.status(500).end("Something went wrong. Check console");
    }
    return res.status(201).json(response);
  });
};