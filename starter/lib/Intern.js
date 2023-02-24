// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

// TODO: Write code to define and export the Employee class
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  //This gets the employees name//
  getSchool() {
    return this.school;
  }

  //This gets the employees ID //

  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
