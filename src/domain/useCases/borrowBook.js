const BookRepository = require("../../infrastructure/repositories/bookRepository");
const MemberRepository = require("../../infrastructure/repositories/memberRepository");
class BorrowBook {
	async execute(memberId, bookId) {
		const member = await MemberRepository.findMemberById(memberId);
		if (!member || new Date(member.penaltyUntil) > new Date()) {
			throw new Error("Member cannot borrow books at this time.");
		}

		const borrowedBooks = await BookRepository.findAvailableBooks();
		const memberBorrowedBooks = borrowedBooks.filter(
			(book) => book.memberId === memberId
		);

		if (memberBorrowedBooks.length >= 2) {
			throw new Error("Member cannot borrow more than 2 books.");
		}

		const book = await BookRepository.getBookById(bookId);
		if (book.isBorrowed) {
			throw new Error("Book is already borrowed by another member.");
		}

		await BookRepository.borrowBook(bookId);
	}
}

module.exports = new BorrowBook();
