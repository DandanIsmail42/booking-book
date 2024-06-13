const express = require("express");
const router = express.Router();
const MemberController = require("../controllers/memberController");

/**
 * @swagger
 * components:
 *   schemas:
 *     Member:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: uuid
 *           description: The auto-generated id of the member
 *         name:
 *           type: string
 *           description: The name of the member
 *         penaltyUntil:
 *           type: boolean
 *           description: The date until the member is penalized
 *       example:
 *         id: 342243242dwdq23ed321
 *         name: John Doe
 *         penaltyUntil: false
 */

/**
 * @swagger
 * tags:
 *   name: Members
 *   description: The members managing API
 */

/**
 * @swagger
 * /members:
 *   get:
 *     summary: Returns the list of all the members
 *     tags: [Members]
 *     responses:
 *       200:
 *         description: The list of the members
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items
 *                 $ref: '#/components/schemas/Member'
 */
router.get("/", MemberController.checkMembers);

/**
 * @swagger
 * /members/add:
 *   post:
 *     summary: Add a new member
 *     tags: [Members]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Member'
 *     responses:
 *       201:
 *         description: The member was successfully created
 *       400:
 *         description: Bad request
 */
router.post("/add", MemberController.addMember);

module.exports = router;
