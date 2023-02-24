const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.

async function start() {
  let { managerName, managerID, managerEmail, officeNumber, selection } =
    await inquirer.prompt([
      {
        type: "input",
        message: "Enter Manager Name:",
        name: "managerName",
        validate: (managerName) => {
          if (managerName) {
            return true;
          } else {
            console.log("You must enter a name.");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "Enter Manager ID:",
        name: "managerID",
        validate: (managerID) => {
          if (managerID) {
            return true;
          } else {
            console.log("You must enter a valid ID.");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "Enter Manager email:",
        name: "managerEmail",
        validate: function (value) {//This function validates that the users input is an email address.
          const pass = value.match(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ // email address regular expression
          );
          if (pass) {
            return true;
          }
          return 'Please enter a valid email address';//This message is printed if a valid email is not provided.
        },
      },
      {
        type: "input",
        message: "Enter Office Number:",
        name: "managerOfficeNumber",
        validate: function (value) {
          const valid = !isNaN(parseFloat(value));
          return valid || "Please enter a number";//This messaege is printed if the user does not enter a valid number.
        },
      },
      {
        type: "list",
        message: "What would you like to do?",
        name: "selection",
        choices: ["Add an engineer", "Add an intern", "Finish building the team"],
      },
    ]);

    if (selection.selection === "Add an engineer") {
      const engineerAnswers = await inquirer.prompt([
        {
          type: "input",
          message: "Enter engineer name:",
          name: "engineerName",
        },
        {
          type: "input",
          message: "Enter engineer email:",
          name: "engineerEmail",
        },
        {
          type: "input",
          message: "Enter engineer GitHub username:",
          name: "engineerGithub",
        },
      ]);
    
      // Process engineerAnswers here
    } else if (selection.selection === "Add an intern") {
      const internAnswers = await inquirer.prompt([
        {
          type: "input",
          message: "Enter intern name:",
          name: "internName",
        },
        {
          type: "input",
          message: "Enter intern email:",
          name: "internEmail",
        },
        {
          type: "input",
          message: "Enter intern school:",
          name: "internSchool",
        },
      ]);
    
      // Process internAnswers here
    } else {
      // Finish building the team
    }

  let team = [];

  team.push(new Manager(managerName, managerID, managerEmail, officeNumber));
  // team.push(new Engineer("Helena", 666, "test@test.com", "ABC"));
  // team.push(new Intern("Ocean", 555, "cat@test.com", "Plumcroft"));

  let html = render(team);
  await fs.writeFile(outputPath, html, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("File written successfully");
    }
  });

  console.log(`${managerName}`);

  // Rest of the code goes here
}

start();
// console.log(managerName);




// let team = [];

// team.push(new Manager('Vinh', 30, 'kietla@live.co.uk', 9999));
// team.push(new Engineer('Helena', 666, 'test@test.com', 'ABC'));
// team.push(new Intern('Ocean', 555, 'cat@test.com', 'Plumcroft'));

// let html = render(team);

// // fs.writeFile(outputPath, html);

// await fs.writeFile(outputPath, html, function(err) {
//   if (err) {
//       console.log(err);
//   } else {
//       console.log("File written successfully");
//   }
// });
