const MemberService = require("../../application/services/memberService");

class MemberController {
	async checkMembers(req, res) {
		try {
			const members = await MemberService.checkMembers();
			res.status(200).send(members);
		} catch (error) {
			res.status(400).send(error.message);
		}
	}

	async addMember(req, res) {
		const { name } = req.body;
		try {
			const member = await MemberService.addMember(name);
			res.status(201).send(member);
		} catch (error) {
			res.status(400).send(error.message);
		}
	}
}

module.exports = new MemberController();
