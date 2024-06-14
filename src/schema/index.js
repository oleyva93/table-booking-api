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
