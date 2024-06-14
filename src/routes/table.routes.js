import express from "express";

const router = express.Router();

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

router.get("/", function (req, res, next) {
  return res.status(200).send("Hello");
});

export default router;
