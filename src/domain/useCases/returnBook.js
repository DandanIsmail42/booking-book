const BookRepository = require("../../infrastructure/repositories/bookRepository");
const MemberRepository = require("../../infrastructure/repositories/memberRepository");

class ReturnBook {
	async execute(memberId, bookId) {
		const book = await BookRepository.getBookById(bookId);
		if (!book || !book.isBorrowed) {
			throw new Error("Book was not borrowed.");
		}

		await BookRepository.returnBook(bookId);

		const now = new Date();
		const borrowedDate = new Date(book.borrowedDate);
		if ((now - borrowedDate) / (1000 * 60 * 60 * 24) > 7) {
			const penaltyUntil = new Date();
			penaltyUntil.setDate(now.getDate() + 3);
			await MemberRepository.updateMemberPenalty(memberId, penaltyUntil);
		}
	}
}

module.exports = new ReturnBook();
