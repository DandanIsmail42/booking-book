const express = require("express");
const dotenv = require("dotenv");
const sequelize = require("../infrastructure/database");
const swagger = require("../swagger");
dotenv.config();

const app = express();
app.use(express.json());

const bookRoutes = require("./routes/bookRoutes");
const memberRoutes = require("./routes/memberRoutes");

app.use("/books", bookRoutes);
app.use("/members", memberRoutes);
swagger(app);

const PORT = process.env.PORT || 8000;

sequelize
	.sync()
	.then(() => {
		app.listen(PORT, () => {
			console.log(`Server is running on port ${PORT}`);
		});
	})
	.catch((err) => {
		console.error("Unable to connect to the database:", err);
	});
