const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Library API",
			version: "1.0.0",
			description: "A simple Express Library API",
		},
		servers: [
			{
				url: "http://localhost:8000",
			},
		],
	},
	apis: ["./src/interface/routes/*.js", "./src/interface/controllers/*.js"], // Path ke file API
};

const swaggerSpec = swaggerJSDoc(options);
console.log(swaggerSpec);
module.exports = (app) => {
	app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
