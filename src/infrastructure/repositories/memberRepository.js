const Member = require("../../models/MemberModel");

class MemberRepository {
	async findMemberById(memberId) {
		return await Member.findByPk(memberId);
	}

	async updateMemberPenalty(memberId, penaltyUntil) {
		const member = await Member.findByPk(memberId);
		if (member) {
			member.penaltyUntil = penaltyUntil;
			await member.save();
		}
		return member;
	}

	async getAllMembers() {
		return await Member.findAll();
	}

	async createMember(name) {
		return await Member.create({ name });
	}
}

module.exports = new MemberRepository();
