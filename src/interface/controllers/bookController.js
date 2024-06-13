const BookService = require("../../application/services/bookService");

class BookController {
	async borrowBook(req, res) {
		const { memberId, bookId } = req.body;
		try {
			await BookService.borrowBook(memberId, bookId);
			res.status(200).json({
				status: 200,
				message: "Book borrowed successfully.",
			});
		} catch (error) {
			res.status(400).send(error.message);
		}
	}

	async returnBook(req, res) {
		const { memberId, bookId } = req.body;
		try {
			await BookService.returnBook(memberId, bookId);
			res.status(200).send("Book returned successfully.");
		} catch (error) {
			res.status(400).send(error.message);
		}
	}

	async checkBooks(req, res) {
		try {
			const books = await BookService.checkBooks();
			res.status(200).send(books);
		} catch (error) {
			res.status(400).send(error.message);
		}
	}

	async addBook(req, res) {
		const { title } = req.body;
		try {
			const book = await BookService.addBook(title);
			res.status(201).send(book);
		} catch (error) {
			res.status(400).send(error.message);
		}
	}
}

module.exports = new BookController();
