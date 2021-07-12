const axios = require("axios");
const db = require("../models");

module.exports ={
  findAll: (req, res)=>{
    const { query: params } = req;
    axios
    .get("", { params 
    })
    .then(results =>
      results
      )
  }
}