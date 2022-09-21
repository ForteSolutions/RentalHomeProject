const rentalController = require("../controllers/rental.controller");

module.exports = (app) => {
    app.post("/api/rental", rentalController.createNewRental);
    app.get("/api/rental", rentalController.getAllRentals);
    app.get("/api/rental/:id", rentalController.getOneRental);
    app.put("/api/rental/:id", rentalController.updateRental);
    app.delete("/api/rental/:id", rentalController.deleteRental);
    };