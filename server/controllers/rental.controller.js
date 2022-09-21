const Rental = require("../models/rental.model");

const createNewRental = (req, res) => {
    Rental.create(req.body)
        .then((newRental) => {
            res.json({ newRental });
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
};

const getAllRentals = (req, res) => {
    Notable.find().sort({"name":1})
        .then((allRentals) => {
            res.json(allRentals);
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
};

const getOneRental = (req, res) => {
    Rental.findOne({ _id: req.params.id })
        .then((queriedRental) => {
            res.json(queriedRental);
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
};

const updateRental = (req, res) => {
    Rental.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    })
        .then((updatedRental) => {
            res.json({ updatedRental });
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
};

const deleteRental = (req, res) => {
    Rental.deleteOne({ _id: req.params.id })
    .then((deletedRental) => {
            res.json({ deletedRental });
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
};

module.exports = { createNewRental, getOneRental, getAllRentals, updateRental, deleteRental };