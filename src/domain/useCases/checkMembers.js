const MemberRepository = require("../../infrastructure/repositories/memberRepository");

class CheckMembers {
	async execute() {
		return await MemberRepository.getAllMembers();
	}
}

module.exports = new CheckMembers();
