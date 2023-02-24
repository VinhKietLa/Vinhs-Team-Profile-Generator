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

//This is an empty array, which is used to store the new instances of Manager, Engineer and Employee objects created from the users inputs in inquirer.
let team = [];

async function start() {
  //These variables are here and not within the while statement because they cannot be accessed otherwise.
  let engineerName, engineerID, engineerEmail, engineerGithub;
  let internName, internID, internEmail, internSchool;

  //This inquirer is used to create the manager and the output is that a new instance of manager is pushed to the empty Team array.
  let { managerName, managerID, managerEmail, officeNumber } =
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
        validate: function (value) {
          //This function validates that the users input is an email address.
          const pass = value.match(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ // email address regular expression
          );
          if (pass) {
            return true;
          }
          return "Please enter a valid email address"; //This message is printed if a valid email is not provided.
        },
      },
      {
        type: "input",
        message: "Enter Office Number:",
        name: "managerOfficeNumber",
        validate: function (value) {
          const valid = !isNaN(parseFloat(value));
          return valid || "Please enter a number"; //This messaege is printed if the user does not enter a valid number.
        },
      },
    ]);
  //This is used to push the new manager object to the Team array.
  team.push(new Manager(managerName, managerID, managerEmail, officeNumber));

  //This while statement is created because it is required to keep within a loop if the user does not decide to end the application and keep adding an intern or engineer.
  while (true) {
    const { inputSelection } = await inquirer.prompt([
      {
        type: "list",
        message: "What type of team member do you want to add?",
        name: "inputSelection",
        choices: [
          "Add an engineer",
          "Add an intern",
          "Finish building my team",
        ],
      },
    ]);
    //If the user selects engineer then a new object is created with their inputs.
    if (inputSelection === "Add an engineer") {
      ({ engineerName, engineerID, engineerEmail, engineerGithub } =
        await inquirer.prompt([
          {
            type: "input",
            message: "Enter Engineer name:",
            name: "engineerName",
          },
          {
            type: "input",
            message: "Enter Engineer ID:",
            name: "engineerID",
          },
          {
            type: "input",
            message: "Enter Engineer email:",
            name: "engineerEmail",
          },
          {
            type: "input",
            message: "Enter Engineer GitHub username:",
            name: "engineerGithub",
          },
        ]));
      team.push(
        new Engineer(engineerName, engineerID, engineerEmail, engineerGithub)
      );
      //If the user selects intern then a new object is created with their inputs.
    } else if (inputSelection === "Add an intern") {
      ({ internName, internID, internEmail, internSchool } =
        await inquirer.prompt([
          {
            type: "input",
            message: "Enter intern name:",
            name: "internName",
          },
          {
            type: "input",
            message: "Enter intern ID:",
            name: "internID",
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
        ]));
      team.push(new Intern(internName, internID, internEmail, internSchool));

    // if the user selects finish then the application will stop and will print out a message to let them know.
    } else {
      console.log("The application is now finished :)");
      break;
    }
    //This will pass the team array to the render function and will store this in HTML.
    let html = render(team);

    //This will write the html variable to a team.html in the output folder.
    await fs.writeFile(outputPath, html, {});
  }
}
//This starts the application function. 
start();

//pseudo code//
// let team = [];

// team.push(new Manager(managerName, managerID, managerEmail, officeNumber));
// team.push(new Engineer(engineerName, engineerID, engineerEmail, engineerGithub));
// team.push(new Intern(internName, internID, internEmail, internSchool));

// if (err) {
//   console.log(err);
// } else {
//   console.log("File written successfully");
// }

// console.log(`${managerName}`);

// Rest of the code goes here
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
