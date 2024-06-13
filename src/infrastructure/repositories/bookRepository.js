const Book = require("../../models/BookModel");

class BookRepository {
	async findAvailableBooks() {
		return await Book.findAll({ where: { isBorrowed: false } });
	}

	async borrowBook(bookId) {
		const book = await Book.findByPk(bookId);
		if (book) {
			book.isBorrowed = true;
			await book.save();
		}
		return book;
	}

	async returnBook(bookId) {
		const book = await Book.findByPk(bookId);
		if (book) {
			book.isBorrowed = false;
			await book.save();
		}
		return book;
	}

	async getBookById(bookId) {
		return await Book.findByPk(bookId);
	}

	async createBook(title) {
		return await Book.create({ title });
	}
}

module.exports = new BookRepository();
