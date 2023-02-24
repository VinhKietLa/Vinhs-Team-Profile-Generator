// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

// TODO: Write code to define and export the Employee class
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  //This gets the employees github username//
  getGithub() {
    return this.github;
  }

  //This gets the employees ID //

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
