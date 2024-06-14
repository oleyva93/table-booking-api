import express from "express";

const router = express.Router();

/**
 * @swagger
 * /restaurants:
 *   post:
 *     tags:
 *      - Restaurants
 *     summary: Create a new restaurant
 *     description: Endpoint to create a new restaurant.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *               description:
 *                 type: string
 *               admin:
 *                 type: array
 *                 items:
 *                   type: string
 *               verified:
 *                 type: boolean
 *               businessHours:
 *                 type: object
 *                 properties:
 *                   Sunday:
 *                     type: object
 *                     properties:
 *                       start:
 *                         type: string
 *                       end:
 *                         type: string
 *                       example:
 *                         start: "09:00"
 *                         end: "22:00"
 *                   Monday:
 *                     type: object
 *                     properties:
 *                       start:
 *                         type: string
 *                       end:
 *                         type: string
 *                       example:
 *                         start: "09:00"
 *                         end: "22:00"
 *                   Tuesday:
 *                     type: object
 *                     properties:
 *                       start:
 *                         type: string
 *                       end:
 *                         type: string
 *                       example:
 *                         start: "09:00"
 *                         end: "22:00"
 *                   Wednesday:
 *                     type: object
 *                     properties:
 *                       start:
 *                         type: string
 *                       end:
 *                         type: string
 *                       example:
 *                         start: "09:00"
 *                         end: "22:00"
 *                   Thursday:
 *                     type: object
 *                     properties:
 *                       start:
 *                         type: string
 *                       end:
 *                         type: string
 *                       example:
 *                         start: "09:00"
 *                         end: "22:00"
 *                   Friday:
 *                     type: object
 *                     properties:
 *                       start:
 *                         type: string
 *                       end:
 *                         type: string
 *                       example:
 *                         start: "09:00"
 *                         end: "22:00"
 *                   Saturday:
 *                     type: object
 *                     properties:
 *                       start:
 *                         type: string
 *                       end:
 *                         type: string
 *                       example:
 *                         start: "09:00"
 *                         end: "22:00"
 *     responses:
 *       '201':
 *         description: Restaurant created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Restaurant created successfully
 *                 restaurant:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: "60a7b2c6c25e2b001f9e4b2b"
 *       '400':
 *         description: Bad request, invalid input data
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /restaurants/{restaurantId}:
 *   get:
 *     tags:
 *      - Restaurants
 *     summary: Get restaurant information
 *     description: Endpoint to retrieve restaurant information by restaurantId.
 *     parameters:
 *       - in: path
 *         name: restaurantId
 *         required: true
 *         schema:
 *           type: string
 *         description: Restaurant ID of the restaurant to retrieve
 *     responses:
 *       '200':
 *         description: Restaurant information retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: "60a7b2c6c25e2b001f9e4b2b"
 *                 name:
 *                   type: string
 *                   example: Sample Restaurant
 *                 address:
 *                   type: string
 *                   example: 123 Main St
 *                 description:
 *                   type: string
 *                   example: A great place to dine.
 *                 admin:
 *                   type: array
 *                   items:
 *                     type: string
 *                   example: ["60a7b2c6c25e2b001f9e4b2b"]
 *                 verified:
 *                   type: boolean
 *                   example: true
 *                 businessHours:
 *                   type: object
 *                   additionalProperties:
 *                     type: object
 *                     properties:
 *                       start:
 *                         type: string
 *                         example: "09:00"
 *                       end:
 *                         type: string
 *                         example: "22:00"
 *       '404':
 *         description: Restaurant not found
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /restaurants/{restaurantId}:
 *   put:
 *     tags:
 *      - Restaurants
 *     summary: Update restaurant information
 *     description: Endpoint to update restaurant information by restaurantId.
 *     parameters:
 *       - in: path
 *         name: restaurantId
 *         required: true
 *         schema:
 *           type: string
 *         description: Restaurant ID of the restaurant to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *               description:
 *                 type: string
 *               admin:
 *                 type: array
 *                 items:
 *                   type: string
 *               verified:
 *                 type: boolean
 *               businessHours:
 *                 type: object
 *                 properties:
 *                   Sunday:
 *                     type: object
 *                     properties:
 *                       start:
 *                         type: string
 *                       end:
 *                         type: string
 *                   Monday:
 *                     type: object
 *                     properties:
 *                       start:
 *                         type: string
 *                       end:
 *                         type: string
 *                   Tuesday:
 *                     type: object
 *                     properties:
 *                       start:
 *                         type: string
 *                       end:
 *                         type: string
 *                   Wednesday:
 *                     type: object
 *                     properties:
 *                       start:
 *                         type: string
 *                       end:
 *                         type: string
 *                   Thursday:
 *                     type: object
 *                     properties:
 *                       start:
 *                         type: string
 *                       end:
 *                         type: string
 *                   Friday:
 *                     type: object
 *                     properties:
 *                       start:
 *                         type: string
 *                       end:
 *                         type: string
 *                   Saturday:
 *                     type: object
 *                     properties:
 *                       start:
 *                         type: string
 *                       end:
 *                         type: string
 *     responses:
 *       '200':
 *         description: Restaurant information updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Restaurant updated successfully
 *       '400':
 *         description: Bad request, invalid input data
 *       '404':
 *         description: Restaurant not found
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /restaurants/{restaurantId}:
 *   delete:
 *     tags:
 *      - Restaurants
 *     summary: Delete a restaurant
 *     description: Endpoint to delete a restaurant by restaurantId.
 *     parameters:
 *       - in: path
 *         name: restaurantId
 *         required: true
 *         schema:
 *           type: string
 *         description: Restaurant ID of the restaurant to delete
 *     responses:
 *       '200':
 *         description: Restaurant deleted successfully
 *       '404':
 *         description: Restaurant not found
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /restaurants/{restaurantId}/availability:
 *   post:
 *     tags:
 *      - Restaurants
 *     summary: Check table availability
 *     description: Endpoint to check table availability for booking within a specified time range.
 *     parameters:
 *       - in: path
 *         name: restaurantId
 *         required: true
 *         schema:
 *           type: string
 *         description: Restaurant ID of the restaurant to check availability
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               bookingFrom:
 *                 type: string
 *                 format: date-time
 *                 example: "2023-05-20T18:00:00Z"
 *               bookingTo:
 *                 type: string
 *                 format: date-time
 *                 example: "2023-05-20T20:00:00Z"
 *               noOfPersons:
 *                 type: integer
 *                 example: 4
 *     responses:
 *       '200':
 *         description: Table availability checked successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 available:
 *                   type: boolean
 *                   example: true
 *                 tables:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "60a7b2c6c25e2b001f9e4b2c"
 *                       tableIdentifier:
 *                         type: string
 *                         example: "Table No 12"
 *                       capacity:
 *                         type: number
 *                         example: 4
 *                       description:
 *                         type: string
 *                         example: Near the window
 *       '400':
 *         description: Bad request, invalid input data
 *       '404':
 *         description: Restaurant not found
 *       '500':
 *         description: Internal server error
 */

router.get("/", function (req, res, next) {
  return res.status(200).send("Hello");
});

export default router;
