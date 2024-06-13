const express = require("express");
const router = express.Router();
const BookController = require("../controllers/bookController");

/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       required:
 *         - title
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         title:
 *           type: string
 *           description: The title of the book
 *         isBorrowed:
 *           type: boolean
 *           description: Whether the book is borrowed
 *       example:
 *         id: d5fE_asz
 *         title: Harry Potter
 *         isBorrowed: false
 */

/**
 * @swagger
 * tags:
 *   name: Books
 *   description: The books managing API
 */

/**
 * @swagger
 * /books/borrow:
 *   post:
 *     summary: Borrow a book
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               memberId:
 *                 type: string
 *               bookId:
 *                 type: string
 *             example:
 *               memberId: d5fE_asz
 *               bookId: d5fE_asz
 *     responses:
 *       200:
 *         description: The book was successfully borrowed
 *       400:
 *         description: Bad request
 */
router.post("/borrow", BookController.borrowBook);

/**
 * @swagger
 * /books/return:
 *   post:
 *     summary: Return a book
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               memberId:
 *                 type: string
 *               bookId:
 *                 type: string
 *             example:
 *               memberId: d5fE_asz
 *               bookId: d5fE_asz
 *     responses:
 *       200:
 *         description: The book was successfully returned
 *       400:
 *         description: Bad request
 */
router.post("/return", BookController.returnBook);

/**
 * @swagger
 * /books:
 *   get:
 *     summary: Returns the list of all the books
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: The list of the books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 */
router.get("/", BookController.checkBooks);

/**
 * @swagger
 * /books/add:
 *   post:
 *     summary: Add a new book
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       201:
 *         description: The book was successfully created
 *       400:
 *         description: Bad request
 */
router.post("/add", BookController.addBook);

module.exports = router;
