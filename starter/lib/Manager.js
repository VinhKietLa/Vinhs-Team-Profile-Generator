const Employee = require("./Employee");


// TODO: Write code to define and export the Employee class
class Manager extends Employee {

    constructor(officeNumber, name, id, email) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  
  //This gets the employees ID //
  
  getRole() {
    return 'Manager';
  }
  
  
  }
  
  module.exports = Manager;