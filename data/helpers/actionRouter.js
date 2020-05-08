const express = require("express");

const Actions = require("./actionModel");

const router = express.Router();

router.get("/", (req, res) => {
    Actions.get()
        .then(actions => {
            console.log(err);
            res
                .status(500)
                .json({ errorMessage: "There was ane error retrieving the data." });
        });
});

router.get("/:id", (req, res) => {
    Actions.get(req.params.id)
        .then(actions => {
            res.status(200).json(actions);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ errorMessage: "THere was an error retrieving the data." });
        });
});