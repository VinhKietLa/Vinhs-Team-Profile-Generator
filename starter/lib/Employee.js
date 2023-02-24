// TODO: Write code to define and export the Employee class
class Employee {

  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
}

//This gets the employees name//
getName() {
  return this.name
}

//This gets the employees ID //

getId() {
  return this.id;
}

//This gets the employees email //

getEmail() {
  return this.email;
}

//This gets the employees role //

getRole() {
    return 'Employee';
}


}

module.exports = Employee

