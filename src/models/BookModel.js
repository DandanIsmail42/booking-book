const { DataTypes } = require("sequelize");
const sequelize = require("../infrastructure/database");

const Book = sequelize.define(
	"Book",
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		isBorrowed: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
		},
	},
	{}
);

module.exports = Book;
