// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

// TODO: Write code to define and export the Employee class
class Intern extends Employee {
  constructor(school, name, id, email) {
    super(name, id, email);
    this.school = school;
  }

  //This gets the employees name//
  getSchool() {

  }

  //This gets the employees ID //

  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
