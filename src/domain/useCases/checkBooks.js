const BookRepository = require("../../infrastructure/repositories/bookRepository");

class CheckBooks {
	async execute() {
		return await BookRepository.findAvailableBooks();
	}
}

module.exports = new CheckBooks();
