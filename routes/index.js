const { Router } = require("express");
const express = require("express");
const path = require("path");

const router = require("express").Router();

router.get(function (req, res) {
  res.sendFile(path.join(__dirname, "../portfolioapp/build/index.html"));
});

module.exports = router;
