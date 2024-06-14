import express from "express";

const router = express.Router();

/**
 * @swagger
 * /bookings:
 *   post:
 *     tags:
 *      - Bookings
 *     summary: Create a new booking
 *     description: Endpoint to create a new booking.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               restaurant:
 *                 type: string
 *                 example: "60a7b2c6c25e2b001f9e4b2b"
 *               tables:
 *                 type: array
 *                 items:
 *                   type: string
 *                   example: "60a7b2c6c25e2b001f9e4b2c"
 *               noOfPersons:
 *                 type: integer
 *                 example: 4
 *               bookingFrom:
 *                 type: string
 *                 format: date-time
 *                 example: "2023-05-20T18:00:00Z"
 *               bookingTo:
 *                 type: string
 *                 format: date-time
 *                 example: "2023-05-20T20:00:00Z"
 *               customer:
 *                 type: string
 *                 example: "60a7b2c6c25e2b001f9e4b2d"
 *               bookingStatus:
 *                 type: string
 *                 enum: [pending, confirmed, canceled]
 *                 example: "pending"
 *               bookingStatusUpdatedBy:
 *                 type: string
 *                 enum: [customer, owner]
 *                 example: "customer"
 *     responses:
 *       '201':
 *         description: Booking created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Booking created successfully
 *                 booking:
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
 * /bookings/{bookingId}:
 *   get:
 *     tags:
 *      - Bookings
 *     summary: Get booking information
 *     description: Endpoint to retrieve booking information by bookingId.
 *     parameters:
 *       - in: path
 *         name: bookingId
 *         required: true
 *         schema:
 *           type: string
 *         description: Booking ID of the booking to retrieve
 *     responses:
 *       '200':
 *         description: Booking information retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: "60a7b2c6c25e2b001f9e4b2b"
 *                 restaurant:
 *                   type: string
 *                   example: "60a7b2c6c25e2b001f9e4b2b"
 *                 tables:
 *                   type: array
 *                   items:
 *                     type: string
 *                     example: "60a7b2c6c25e2b001f9e4b2c"
 *                 noOfPersons:
 *                   type: integer
 *                   example: 4
 *                 bookingFrom:
 *                   type: string
 *                   format: date-time
 *                   example: "2023-05-20T18:00:00Z"
 *                 bookingTo:
 *                   type: string
 *                   format: date-time
 *                   example: "2023-05-20T20:00:00Z"
 *                 customer:
 *                   type: string
 *                   example: "60a7b2c6c25e2b001f9e4b2d"
 *                 bookingStatus:
 *                   type: string
 *                   enum: [pending, confirmed, canceled]
 *                   example: "pending"
 *                 bookingStatusUpdatedBy:
 *                   type: string
 *                   enum: [customer, owner]
 *                   example: "customer"
 *       '404':
 *         description: Booking not found
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /bookings/{bookingId}:
 *   put:
 *     tags:
 *      - Bookings
 *     summary: Update booking information
 *     description: Endpoint to update booking information by bookingId.
 *     parameters:
 *       - in: path
 *         name: bookingId
 *         required: true
 *         schema:
 *           type: string
 *         description: Booking ID of the booking to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               restaurant:
 *                 type: string
 *                 example: "60a7b2c6c25e2b001f9e4b2b"
 *               tables:
 *                 type: array
 *                 items:
 *                   type: string
 *                   example: "60a7b2c6c25e2b001f9e4b2c"
 *               noOfPersons:
 *                 type: integer
 *                 example: 4
 *               bookingFrom:
 *                 type: string
 *                 format: date-time
 *                 example: "2023-05-20T18:00:00Z"
 *               bookingTo:
 *                 type: string
 *                 format: date-time
 *                 example: "2023-05-20T20:00:00Z"
 *               customer:
 *                 type: string
 *                 example: "60a7b2c6c25e2b001f9e4b2d"
 *               bookingStatus:
 *                 type: string
 *                 enum: [pending, confirmed, canceled]
 *                 example: "confirmed"
 *               bookingStatusUpdatedBy:
 *                 type: string
 *                 enum: [customer, owner]
 *                 example: "owner"
 *     responses:
 *       '200':
 *         description: Booking information updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Booking updated successfully
 *       '400':
 *         description: Bad request, invalid input data
 *       '404':
 *         description: Booking not found
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /bookings/{bookingId}:
 *   delete:
 *     tags:
 *      - Bookings
 *     summary: Delete a booking
 *     description: Endpoint to delete a booking by bookingId.
 *     parameters:
 *       - in: path
 *         name: bookingId
 *         required: true
 *         schema:
 *           type: string
 *         description: Booking ID of the booking to delete
 *     responses:
 *       '200':
 *         description: Booking deleted successfully
 *       '404':
 *         description: Booking not found
 *       '500':
 *         description: Internal server error
 */

router.get("/", function (req, res, next) {
  return res.status(200).send("Hello");
});

export default router;
