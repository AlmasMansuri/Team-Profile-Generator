const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const Array = [];
// TODO: Write Code to gather information about the development team members, and render the HTML file.
const managerQue = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the team manager's name?",
        validate: function (name) {
          if (name) {
            return true;
          } else {
            console.log("Please enter your name");
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the team manager's id",
        validate: function (id) {
          if (id) {
            return true;
          } else {
            console.log("Please enter your id");
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the team manager's email",
        validate: function (email) {
          if (email) {
            return true;
          } else {
            console.log("Please enter your email");
          }
        },
      },

      {
        type: "input",
        name: "number",
        message: "What is the team manager's office number",
        validate: function (number) {
          if (number) {
            return true;
          } else {
            console.log("Please enter your office number");
          }
        },
      },
    ])
    .then((answers) => {
      console.log(answers);
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.number
      );
      Array.push(manager);
      listOfOptions();
    });
};

const listOfOptions = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "options",
        choices: [
          "Add an Engineer",
          "Add an Intern",
          "Finish building the team",
        ],
        message: "Which type of team member would you like to add?",
        validate: function (options) {
          if (options) {
            return true;
          } else {
            console.log("Please select an option");
          }
        },
      },
    ])
    .then((answers) => {
      console.log(answers);
      if (answers.options === "Add an Engineer") {
        engineerQue();
      } else if (answers.options === "Add an Intern") {
        internQue();
      } else {
        finishBuildTeam();
      }
    });
};

const engineerQue = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the your engineer's name?",
        validate: function (name) {
          if (name) {
            return true;
          } else {
            console.log("Please enter your name");
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is your engineer's id",
        validate: function (id) {
          if (id) {
            return true;
          } else {
            console.log("Please enter your id");
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is your engineer's email",
        validate: function (email) {
          if (email) {
            return true;
          } else {
            console.log("Please enter your email");
          }
        },
      },

      {
        type: "input",
        name: "username",
        message: "What is your engineer's Github username?",
        validate: function (username) {
          if (username) {
            return true;
          } else {
            console.log("Please enter your Github username");
          }
        },
      },
    ])
    .then((answers) => {
      console.log(answers);
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.username
      );
      Array.push(engineer);
      listOfOptions();
    });
};

const internQue = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the your Intern's name?",
        validate: function (name) {
          if (name) {
            return true;
          } else {
            console.log("Please enter your name");
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is your Intern's id",
        validate: function (id) {
          if (id) {
            return true;
          } else {
            console.log("Please enter your id");
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is your engineer's email",
        validate: function (email) {
          if (email) {
            return true;
          } else {
            console.log("Please enter your email");
          }
        },
      },

      {
        type: "input",
        name: "school",
        message: "What is your Inter's? school",
        validate: function (school) {
          if (school) {
            return true;
          } else {
            console.log("Please enter your school");
          }
        },
      },
    ])
    .then((answers) => {
      console.log(answers);
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      Array.push(intern);
      listOfOptions();
    });
};

const finishBuildTeam = () => {
  console.log("Finish building the team");

  fs.writeFile(outputPath, render(Array), function (err, file) {
    if (err) throw err;
    console.log("Saved!");
  });
};
managerQue();
