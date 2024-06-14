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

/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: Endpoints related to user authentication
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Endpoints related to user management
 */

/**
 * @swagger
 * tags:
 *   name: Restaurants
 *   description: Endpoints related to restaurant management
 */

/**
 * @swagger
 * tags:
 *   name: Tables
 *   description: Endpoints related to table management
 */

/**
 * @swagger
 * tags:
 *   name: Bookings
 *   description: Endpoints related to booking management
 */

router.use("/api/auth", authRoutes);
router.use("/api/users", userRoutes);
router.use("/api/restaurants", restaurantRoutes);
router.use("/api/tables", tableRoutes);
router.use("/api/bookings", bookingRoutes);

export default router;
