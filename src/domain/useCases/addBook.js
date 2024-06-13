const BookRepository = require("../../infrastructure/repositories/bookRepository");

class AddBook {
	async execute(title) {
		return await BookRepository.createBook(title);
	}
}

module.exports = new AddBook();
