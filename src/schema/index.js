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
 *           default: stringPassword123
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
 * 
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

///////////// Authentication //////////////

/**
 * @swagger
 * /auth/signup:
 *   post:
 *     tags:
 *       - Authentication
 *     summary: Register a New User
 *     description: Creates a new user account.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 example: John
 *               lastName:
 *                 type: string
 *                 example: Doe
 *               email:
 *                 type: string
 *                 format: email
 *                 example: john.doe@example.com
 *               phone:
 *                 type: string
 *                 example: "+1234567890"
 *               password:
 *                 type: string
 *                 example: password123
 *               role:
 *                 type: string
 *                 enum: [admin, owner, client]
 *                 example: client
 *     responses:
 *       '200':
 *         description: User registered successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User registered successfully
 *       '400':
 *         description: Bad request, invalid input data
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     tags:
 *      - Authentication
 *     summary: User Login
 *     description: Authenticates a user and returns an authentication token.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: john.doe@example.com
 *               password:
 *                 type: string
 *                 example: password123
 *     responses:
 *       '200':
 *         description: User authenticated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 accessToken:
 *                   type: string
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
 *                 refreshToken:
 *                   type: string
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
 *       '401':
 *         description: Unauthorized, invalid credentials
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /auth/logout:
 *   post:
 *     tags:
 *      - Authentication
 *     summary: User Logout
 *     description: Logs out the currently authenticated user.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: User logged out successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User logged out successfully
 *       '401':
 *         description: Unauthorized, invalid token
 *       '500':
 *         description: Internal server error
 */

///////////// Booking //////////////

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

///////////// Restaurant //////////////

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

///////////// Table //////////////

/**
 * @swagger
 * /tables:
 *   post:
 *     tags:
 *      - Tables
 *     summary: Create a new table
 *     description: Endpoint to create a new table.
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
 *               tableIdentifier:
 *                 type: string
 *                 example: "Table No 12"
 *               capacity:
 *                 type: number
 *                 example: 4
 *               description:
 *                 type: string
 *                 example: Near the window
 *     responses:
 *       '201':
 *         description: Table created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Table created successfully
 *                 table:
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
 * /tables/{tableId}:
 *   get:
 *     tags:
 *      - Tables
 *     summary: Get table information
 *     description: Endpoint to retrieve table information by tableId.
 *     parameters:
 *       - in: path
 *         name: tableId
 *         required: true
 *         schema:
 *           type: string
 *         description: Table ID of the table to retrieve
 *     responses:
 *       '200':
 *         description: Table information retrieved successfully
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
 *                 tableIdentifier:
 *                   type: string
 *                   example: Table No 12
 *                 capacity:
 *                   type: number
 *                   example: 4
 *                 description:
 *                   type: string
 *                   example: Near the window
 *       '404':
 *         description: Table not found
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /tables/{tableId}:
 *   put:
 *     tags:
 *      - Tables
 *     summary: Update table information
 *     description: Endpoint to update table information by tableId.
 *     parameters:
 *       - in: path
 *         name: tableId
 *         required: true
 *         schema:
 *           type: string
 *         description: Table ID of the table to update
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
 *               tableIdentifier:
 *                 type: string
 *                 example: "Table No 13"
 *               capacity:
 *                 type: number
 *                 example: 6
 *               description:
 *                 type: string
 *                 example: Near the window, updated
 *     responses:
 *       '200':
 *         description: Table information updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Table updated successfully
 *       '400':
 *         description: Bad request, invalid input data
 *       '404':
 *         description: Table not found
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /tables/{tableId}:
 *   delete:
 *     tags:
 *      - Tables
 *     summary: Delete a table
 *     description: Endpoint to delete a table by tableId.
 *     parameters:
 *       - in: path
 *         name: tableId
 *         required: true
 *         schema:
 *           type: string
 *         description: Table ID of the table to delete
 *     responses:
 *       '200':
 *         description: Table deleted successfully
 *       '404':
 *         description: Table not found
 *       '500':
 *         description: Internal server error
 */

///////////// User //////////////

/**
 * @swagger
 * /users:
 *   post:
 *     tags:
 *      - Users
 *     summary: Create a new user
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
 *               lastName:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               phone:
 *                 type: string
 *               password:
 *                 type: string
 *                 format: password
 *               role:
 *                 type: string
 *                 enum:
 *                   - admin
 *                   - owner
 *                   - client
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

/**
 * @swagger
 * /users/{userId}:
 *   get:
 *     tags:
 *       - Users
 *     summary: Get user information
 *     description: Endpoint to retrieve user information by userId.
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID of the user to retrieve information for
 *     responses:
 *       '200':
 *         description: User information retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userId:
 *                   type: string
 *                   example: "615edea67e9bc80022930882"
 *                 firstName:
 *                   type: string
 *                   example: John
 *                 lastName:
 *                   type: string
 *                   example: Doe
 *                 email:
 *                   type: string
 *                   example: john.doe@example.com
 *                 phone:
 *                   type: string
 *                   example: "1234567890"
 *                 role:
 *                   type: string
 *                   example: client
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /users/{userId}:
 *   put:
 *     tags:
 *      - Users
 *     summary: Update user information
 *     description: Endpoint to update user information by userId.
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID of the user to update information for
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 example: John
 *               lastName:
 *                 type: string
 *                 example: Doe
 *               email:
 *                 type: string
 *                 example: john.doe@example.com
 *               phone:
 *                 type: string
 *                 example: "0987654321"
 *               password:
 *                 type: string
 *                 example: newpassword
 *               role:
 *                 type: string
 *                 example: client
 *     responses:
 *       '200':
 *         description: User information updated successfully
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /users/{userId}:
 *   delete:
 *     tags:
 *      - Users
 *     summary: Delete a user
 *     description: Endpoint to delete a user by userId.
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID of the user to delete
 *     responses:
 *       '200':
 *         description: User deleted successfully
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Internal server error
 */
