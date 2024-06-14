import express from "express";

const router = express.Router();

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

router.get("/", function (req, res, next) {
  return res.status(200).send("Hello");
});

export default router;
