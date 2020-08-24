const defualtEmployee = (role) => [
	{
		type: "input",
		message: `What is the ${role}'s name?`,
		name: "name",
	},
	{
		type: "input",
		message: `What is the ${role}'s id?`,
		name: "id",
	},
	{
		type: "input",
		message: `What is the ${role}'s Email?`,
		name: "email",
	},
];

module.exports = {
	Manager: [
		...defualtEmployee("Manger"),
		{
			type: "input",
			message: "What is the Manager's office number?",
			name: "additionalparam",
		},
	],
	Engineer: [
		...defualtEmployee("Engineer"),
		{
			type: "input",
			message: "What is the Endingeer's GitHub?",
			name: "additionalparam",
		},
	],
	Intern: defualtEmployee("Intern").concat([
		{
			type: "input",
			message: "What is the Intern's school?",
			name: "additionalparam",
		},
	]),
	selectRole: {
		name: "role",
		type: "list",
		message: "What Employee would you like to add?",
		choices: ["Engineer", "Intern", "Exit"],
	},
};
