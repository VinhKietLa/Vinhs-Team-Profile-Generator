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
let {managerName, managerID, managerEmail, officeNumber } = await inquirer.prompt({

})








  
}
      let team = [];

      team.push(new Manager('Vinh', 30, 'kietla@live.co.uk', 9999));
      team.push(new Engineer('Helena', 666, 'test@test.com', 'ABC'));
      team.push(new Intern('Ocean', 555, 'cat@test.com', 'Plumcroft'));
      
      
      
      let html = render(team);
      
      // fs.writeFile(outputPath, html);
      
      await fs.writeFile(outputPath, html, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log("File written successfully");
        }
      });
    
  

  // Rest of the code goes here
}

start();

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