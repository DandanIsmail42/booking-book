const MemberRepository = require("../../infrastructure/repositories/memberRepository");

class AddMember {
	async execute(name) {
		return await MemberRepository.createMember(name);
	}
}

module.exports = new AddMember();
