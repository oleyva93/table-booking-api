/**
 * @openapi
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - firstName
 *         - lastName
 *         - email
 *         - phone
 *         - password
 *         - role
 *       properties:
 *         firstName:
 *          type: string
 *          default: Jane
 *         lastName:
 *          type: string
 *          default: Doe
 *         email:
 *           type: string
 *           default: jane.doe@example.com
 *         password:
 *           type: string
 *           default: stringPassword123 - is optional for customer
 *         phone:
 *           type: string
 *           default: 1234567890
 *         role:
 *           type: string
 *           default: user
 *     Restaurant:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *          default: Restaurant Name
 *        address:
 *          type: string
 *          default: Restaurant Address
 *        description:
 *          type: string
 *          default: Restaurant Description
 *        admin:
 *          type: array
 *          items:
 *            type: string
 *            format: ObjectId
 *        verified:
 *          type: boolean
 *          default: false
 *        businessHours:
 *          type: object
 *          properties:
 *           Sunday:
 *             type: object
 *             properties:
 *               start:
 *                 type: string
 *                 example: "09:00"
 *               end:
 *                 type: string
 *                 example: "17:00"
 *           Monday:
 *             type: object
 *             properties:
 *               start:
 *                 type: string
 *                 example: "09:00"
 *               end:
 *                 type: string
 *                 example: "17:00"
 *     Table:
 *      type: object
 *      properties:
 *        restaurant:
 *          type: string
 *          format: ObjectId
 *        tableIdentifier:
 *          type: string
 *          description: eg Table No 12
 *        capacity:
 *          type: number
 *          default: 4
 *        description:
 *          type: string
 *          default: Table Description
 *     Booking:
 *      type: object
 *      properties:
 *        restaurant:
 *          type: string
 *          format: ObjectId
 *        tables:
 *          type: array
 *          items:
 *            type: string
 *            format: ObjectId
 *        noOfPersons:
 *          type: integer
 *          default: 4
 *        bookingFrom:
 *          type: string
 *          default: "2022-01-01T00:00:00.000Z"
 *          format: date-time
 *        bookingTo:
 *          type: string
 *          default: "2022-01-01T00:00:00.000Z"
 *          format: date-time
 *        customer:
 *          type: string
 *          format: ObjectId
 *        bookingStatus:
 *          type: string
 *          enum:
 *            - pending
 *            - confirmed
 *            - canceled
 *        bookingStatusUpdatedBy:
 *          type: string
 *          enum:
 *            - customer
 *            - owner
 */

/**
/////////////////////// Categories ///////////////////////

/**
 * @swagger
 * tags:
 *   name: Bookings
 *   description: Endpoints related to booking management
 */

/**
 * @swagger
 * tags:
 *   name: Clients
 *   description: Endpoints related to client management
 */

/**
 * @swagger
 * tags:
 *   name: Restaurants
 *   description: Endpoints related to restaurant management
 */

/**
 * @swagger
 * /restaurants/{restaurant_id}/availability:
 *   post:
 *     tags:
 *      - Restaurants
 *     summary: Check table availability
 *     description: Endpoint to check table availability for booking within a specified time range.
 *     parameters:
 *       - in: path
 *         name: restaurant_id
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
 *                 required: true
 *               bookingTo:
 *                 type: string
 *                 format: date-time
 *                 example: "2023-05-20T20:00:00Z"
 *                 required: true
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
 *                 required: true
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
 *                 required: true
 *               bookingTo:
 *                 type: string
 *                 format: date-time
 *                 example: "2023-05-20T20:00:00Z"
 *                 required: true
 *               customer:
 *                 type: string
 *                 example: "60a7b2c6c25e2b001f9e4b2d"
 *                 required: true
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
 * /bookings/{booking_id}:
 *   delete:
 *     tags:
 *      - Bookings
 *     summary: Delete a booking
 *     description: Endpoint to delete a booking by bookingId.
 *     parameters:
 *       - in: path
 *         name: booking_id
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

/**
 * @swagger
 * /client/{client_id}/bookings:
 *   get:
 *     tags:
 *      - Clients
 *     summary: Get user bookings
 *     description: Endpoint to get bookings of a user by userId.
 *     parameters:
 *      - in: parameter
 *        name: client_id
 *        required: true
 *        schema:
 *         type: string
 *      - in: query
 *        name: booking_status
 *        required: false
 *        schema:
 *         type: string
 *      - in: query
 *        name: booking_from_gt
 *        required: false
 *        schema:
 *         type: string
 *         format: date-time
 *      - in: query
 *        name: booking_to_lt
 *        required: false
 *        schema:
 *         type: string
 *         format: date-time
 *     responses:
 *       '200':
 *         description: Bookings fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                    type: object
 *                    properties:
 *                      _id:
 *                       type: string
 *                       example: "60a7b2c6c25e2b001f9e4b2b"
 *                      restaurant:
 *                       type: string
 *                       example: "60a7b2c6c25e2b001f9e4b2b"
 *                      tables:
 *                       type: array
 *                       example: ["60a7b2c6c25e2b001f9e4b2c"]
 *                       items:
 *                        type: string
 *                        format: ObjectId
 *                      noOfPersons:
 *                        type: integer
 *                        default: 4
 *                      bookingFrom:
 *                        type: string
 *                        default: "2022-01-01T00:00:00.000Z"
 *                        format: date-time
 *                      bookingTo:
 *                        type: string
 *                        default: "2022-01-01T00:00:00.000Z"
 *                        format: date-time
 *                      customer:
 *                        type: string
 *                        example: "60a7b2c6c25e2b001f9e4b2d"
 *                        format: ObjectId
 *                      bookingStatus:
 *                        type: string
 *                        enum:
 *                         - pending
 *                         - confirmed
 *                         - canceled
 *                      bookingStatusUpdatedBy:
 *                        type: string
 *                        enum:
 *                         - customer
 *                         - owner
 *       '400':
 *         description: Bad request, invalid input data
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /client:
 *   post:
 *     tags:
 *      - Clients
 *     summary: Create a new client
 *     description: Endpoint to create a new user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 required: true
 *               lastName:
 *                 type: string
 *                 required: true
 *               email:
 *                 type: string
 *                 format: email
 *                 required: true
 *               phone:
 *                 type: string
 *                 required: true
 *     responses:
 *       '200':
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User created successfully
 *       '400':
 *         description: Bad request, invalid input data
 *       '500':
 *         description: Internal server error
 */
