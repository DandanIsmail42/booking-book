const CheckMembers = require("../../domain/useCases/checkMembers");
const AddMember = require("../../domain/useCases/addMember");
class MemberService {
	async checkMembers() {
		return await CheckMembers.execute();
	}

	async addMember(name) {
		// Tambahkan method untuk menambahkan anggota
		return await AddMember.execute(name);
	}
}

module.exports = new MemberService();
