// External Module
const express = require("express");
const storeRouter = express.Router();

// Local Module
const storeController = require("../controllers/storeController");

// Authentication middleware
const isAuth = (req, res, next) => {
  if (req.session && req.session.isLoggedIn) {
    next();
  } else {
    res.redirect("/login");
  }
};

storeRouter.get("/", storeController.getIndex);
storeRouter.get("/homes", storeController.getHomes);
storeRouter.get("/bookings", isAuth, storeController.getBookings);
storeRouter.get("/favourites", isAuth, storeController.getFavouriteList);

storeRouter.get("/homes/:homeId", storeController.getHomeDetails);
storeRouter.post("/favourites", isAuth, storeController.postAddToFavourite);
storeRouter.post("/favourites/delete/:homeId", isAuth, storeController.postRemoveFromFavourite);

module.exports = storeRouter;