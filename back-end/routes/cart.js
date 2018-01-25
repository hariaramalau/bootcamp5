const express = require("express");
const Cart = require("../models/cart");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/new", (req, res) => {


    if (!req.files.picture) {
        return res.status(400).send("No files were uploaded");
    }

    let image = req.files.picture;
    let date = new Date();
    let imageName = date.getTime() + ".png"

    image.mv("./public/cart/" + imageName, (error) => {

        if (error) return res.status(500).send(error);

        let newObj = new Cart({
            type: req.body.type,
            _id : req.body._id,
            name: req.body.name,
            price: req.body.price,
            picture: "http://localhost:3000/cart/" + imageName
        });

        newObj.save((error) => {
            if (error) {
                res.status(500).send(error);
            }
            else {
                res.json(newObj);
            }
        });

    });

});


router.get("/:id", (req, res) => {

    Cart.findById(req.params._id, (error, result) => {
        if (error) {
            res.status(500).json(error);
        }
        else {
            res.json(result)
        }
    });

});

router.get("/:pants", (req, res) => {

    Cart.findById(req.params.type, (error, result) => {
        if (error) {
            res.status(500).json(error);
        }
        else {
            res.json(result)
        }
    });

});

router.get("/", (req, res) => {

    Cart.find({}, (error, result) => {
        if (error) {
            res.status(500).json(error);
        }
        else {
            res.json(result)
        }
    });
});

router.delete("/:id", (req, res) => {

    Cart.findByIdAndRemove(req.params.id, (error, result) => {
        if (error) {
            res.status(500).json(error);
        }
        else {
            res.json(result)
        }
    });

});

module.exports = (function () {
    return router;
})();