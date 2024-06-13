const BorrowBook = require("../../domain/useCases/borrowBook");
const ReturnBook = require("../../domain/useCases/returnBook");
const CheckBooks = require("../../domain/useCases/checkBooks");
const AddBook = require("../../domain/useCases/addBook");
class BookService {
	async borrowBook(memberId, bookId) {
		return await BorrowBook.execute(memberId, bookId);
	}

	async returnBook(memberId, bookId) {
		return await ReturnBook.execute(memberId, bookId);
	}

	async checkBooks() {
		return await CheckBooks.execute();
	}

	async addBook(title) {
		return await AddBook.execute(title);
	}
}

module.exports = new BookService();
