import express from "express";

const router = express.Router();

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

router.get("/", function (req, res, next) {
  return res.status(200).send("Hello");
});

export default router;
