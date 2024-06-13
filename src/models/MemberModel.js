const { DataTypes } = require("sequelize");
const sequelize = require("../infrastructure/database");

const Member = sequelize.define(
	"Member",
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		penaltyUntil: {
			type: DataTypes.DATE,
			allowNull: true,
		},
	},
	{}
);

module.exports = Member;
