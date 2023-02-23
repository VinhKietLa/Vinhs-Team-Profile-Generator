// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

// TODO: Write code to define and export the Employee class
class Engineer extends Employee {
  constructor(github, officeNumber, name, id, email) {
    super(officeNumber, name, id, email);
    this.github = github;
  }

  //This gets the employees name//
  getGithub() {

  }

  //This gets the employees ID //

  getRole() {
    return "Manager";
  }
}

module.exports = Engineer;
