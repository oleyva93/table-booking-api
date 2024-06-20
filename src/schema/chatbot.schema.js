/**
 * @openapi
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - first_name
 *         - last_name
 *         - email
 *         - phone
 *         - password
 *         - role
 *       properties:
 *         first_name:
 *          type: string
 *          default: Jane
 *         last_name:
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
 *      required:
 *       - name
 *       - address
 *       - admin
 *       - business_hours
 *       - services
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
 *        business_hours:
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
 *        services:
 *          type: object
 *          properties:
 *           Sunday:
 *             type: array
 *             items:
 *              type: string
 *           Monday:
 *             type: array
 *             items:
 *              type: string
 *     Table:
 *      type: object
 *      required:
 *        - restaurant_id
 *        - table_identifier
 *      properties:
 *        restaurant_id:
 *          type: string
 *          format: ObjectId
 *        table_identifier:
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
 *      required:
 *       - restaurant_id
 *       - booking_from
 *       - no_of_persons
 *       - client_id
 *      properties:
 *        restaurant_id:
 *          type: string
 *          format: ObjectId
 *        tables:
 *          type: array
 *          items:
 *            type: string
 *            format: ObjectId
 *        no_of_persons:
 *          type: integer
 *          default: 4
 *        booking_from:
 *          type: string
 *          default: "2022-01-01T00:00:00.000Z"
 *          format: date-time
 *        booking_to:
 *          type: string
 *          default: "2022-01-01T00:00:00.000Z"
 *          format: date-time
 *        client_id:
 *          type: string
 *          format: ObjectId
 *        booking_status:
 *          type: string
 *          enum:
 *            - pending
 *            - confirmed
 *            - canceled
 *        booking_status_updated_by:
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
 *             required: [booking_from, no_of_persons]
 *             properties:
 *               booking_from:
 *                 type: string
 *                 format: date-time
 *                 example: "2023-05-20T18:00:00Z"
 *                 required: true
 *               booking_to:
 *                 type: string
 *                 format: date-time
 *                 example: "2023-05-20T20:00:00Z"
 *                 required: true
 *               no_of_persons:
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
 *                       id:
 *                         type: string
 *                         example: "60a7b2c6c25e2b001f9e4b2c"
 *                       table_identifier:
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
 *             required: [client_first_name, client_last_name, client_email, client_phone, no_of_persons, restaurant_id, booking_from]
 *             properties:
 *               client_first_name:
 *                type: string
 *                example: "Jane"
 *               client_last_name:
 *                type: string
 *                example: "Doe"
 *               client_email:
 *                 type: string
 *                 example: "jane@mail.com"
 *               client_phone:
 *                 type: string
 *                 example: "1234567890"
 *               restaurant_id:
 *                 type: string
 *                 example: "60a7b2c6c25e2b001f9e4b2b"
 *                 required: true
 *               tables:
 *                 type: array
 *                 items:
 *                   type: string
 *                   example: "60a7b2c6c25e2b001f9e4b2c"
 *               no_of_persons:
 *                 type: integer
 *                 example: 4
 *               client_id:
 *                 type: string
 *                 example: "60a7b2c6c25e2b001f9e4b2b"
 *               booking_from:
 *                 type: string
 *                 format: date-time
 *                 example: "2023-05-20T18:00:00Z"
 *                 required: true
 *               booking_to:
 *                 type: string
 *                 format: date-time
 *                 example: "2023-05-20T20:00:00Z"
 *                 required: true
 *               booking_status:
 *                 type: string
 *                 enum: [pending, confirmed, canceled]
 *                 example: "pending"
 *     responses:
 *       '201':
 *         description: Booking created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  id:
 *                   type: string
 *                   example: "60a7b2c6c25e2b001f9e4b2b"
 *                  client_first_name:
 *                   type: string
 *                   example: "Jane"
 *                  client_last_name:
 *                   type: string
 *                   example: "Doe"
 *                  client_email:
 *                    type: string
 *                    example: "jane@mail.com"
 *                  client_phone:
 *                    type: string
 *                    example: "1234567890"
 *                  restaurant_id:
 *                    type: string
 *                    example: "60a7b2c6c25e2b001f9e4b2b"
 *                    required: true
 *                  tables:
 *                    type: array
 *                    items:
 *                      type: string
 *                      example: "60a7b2c6c25e2b001f9e4b2c"
 *                  no_of_persons:
 *                    type: integer
 *                    example: 4
 *                  booking_from:
 *                    type: string
 *                    format: date-time
 *                    example: "2023-05-20T18:00:00Z"
 *                    required: true
 *                  booking_to:
 *                    type: string
 *                    format: date-time
 *                    example: "2023-05-20T20:00:00Z"
 *                    required: true
 *                  client_id:
 *                    type: string
 *                    example: "60a7b2c6c25e2b001f9e4b2d"
 *                    required: true
 *                  booking_status:
 *                    type: string
 *                    enum: [pending, confirmed, canceled]
 *                    example: "pending"
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
 *               type: array
 *               items:
 *                type: object
 *                properties:
 *                  id:
 *                   type: string
 *                   example: "60a7b2c6c25e2b001f9e4b2b"
 *                  restaurant_id:
 *                   type: string
 *                   example: "60a7b2c6c25e2b001f9e4b2b"
 *                  tables:
 *                   type: array
 *                   example: ["60a7b2c6c25e2b001f9e4b2c"]
 *                   items:
 *                    type: string
 *                    format: ObjectId
 *                  no_of_persons:
 *                    type: integer
 *                    default: 4
 *                  booking_from:
 *                    type: string
 *                    default: "2022-01-01T00:00:00.000Z"
 *                    format: date-time
 *                  booking_to:
 *                    type: string
 *                    default: "2022-01-01T00:00:00.000Z"
 *                    format: date-time
 *                  client_id:
 *                    type: string
 *                    example: "60a7b2c6c25e2b001f9e4b2d"
 *                    format: ObjectId
 *                  booking_status:
 *                    type: string
 *                    enum:
 *                     - pending
 *                     - confirmed
 *                     - canceled
 *                  booking_status_updated_by:
 *                    type: string
 *                    enum:
 *                     - customer
 *                     - owner
 *       '400':
 *         description: Bad request, invalid input data
 *       '500':
 *         description: Internal server error
 */
