// getting query handlers
query = require("../db/QueryHandlers");

//getting router
const router = require("express").Router();
const middleware = require("./middlewares");

router.get("/", middleware, function(req, res) {
  console.log("not logged in");
  res.render("pages/home");
});
// requiring routes
const login = require("./login_route");
const register = require("./register_route");
const browseHotels = require("./browseHotels_route");
const users = require("./user_route");
const rooms = require("./room_route");
const checkin = require("./checkIn_route");
const checkout = require("./checkOut_route");
const hotel = require("./hotel");

// Exporting Binded pages
module.exports = function routesBinder(app) {
  app.use("/", router);
  login(app);
  register(app);
  browseHotels(app);
  users(app);
  rooms(app);
  checkin(app);
  checkout(app);
};
