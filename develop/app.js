const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const questions = require("./lib/Questions");
const path = require("path");
const render = require("./lib/htmlRenderer");
const Contructors = {
	Manager,
	Engineer,
	Intern,
};
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const employeeList = [];

const init = () => {
	buildEmployee("Manager");
};

const buildEmployee = async (key) => {
	const result = await inquirer.prompt(questions[key]);
	const employee = new Contructors[key](
		result.name,
		result.id,
		result.email,
		result.additionalparam,
	);
	employeeList.push(employee);
	selectRole();
};

const buildHTML = async () => {
	const HTML = render(employeeList);
	try {
		fs.writeFileSync(outputPath, HTML);
	} catch (error) {
		console.log(error.message);
	}
};

const selectRole = async () => {
	const { role } = await inquirer.prompt(questions.selectRole);
	if (role === "Exit") return buildHTML();
	buildEmployee(role);
};

init();
