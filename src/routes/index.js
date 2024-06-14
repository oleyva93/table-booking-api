import express from "express";

import authRoutes from "./auth.routes.js";
import userRoutes from "./user.routes.js";
import restaurantRoutes from "./restaurant.routes.js";
import tableRoutes from "./table.routes.js";
import bookingRoutes from "./booking.routes.js";

const router = express.Router();

// Verify that the server is running
router.get("/ping", function (req, res, next) {
  return res.status(200).send("Hello");
});

router.use("/api/auth", authRoutes);
router.use("/api/users", userRoutes);
router.use("/api/restaurants", restaurantRoutes);
router.use("/api/tables", tableRoutes);
router.use("/api/bookings", bookingRoutes);

export default router;
