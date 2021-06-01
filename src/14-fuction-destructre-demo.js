/**
 * Paramerter are not flexible!
 * They have fixed position!
 *
 * @param {*} username
 * @param {*} email
 * @param {*} mobile
 * @param {*} password
 */
 function createEmployee(username, email, mobile, password) {
    // logic here.
    console.log(`Username ${username}`);
    console.log(`Email ${email}`);
    console.log(`Mobile ${mobile}`);
    console.log(`Password ${password}`);
  }
  
  // calling the function
  createEmployee("rohit@gmail.com", "111223344", "@#@##", "rohit");
  console.log("\n");
  
  /**
   * Parameter position is flexible with, Destrucutre.
   * @param {*} param0
   */
  function createEmployeeV1({ email, username, mobile, password }) {
    // logic here.
    console.log(`Username ${username}`);
    console.log(`Email ${email}`);
    console.log(`Mobile ${mobile}`);
    console.log(`Password ${password}`);
  }
  
  // Use Case 1
  createEmployeeV1({ username: "Rohit" });
  console.log("\n");
  
  // Use Case 2
  createEmployeeV1({ username: "Rohit", password: "@#@#" });
  console.log("\n");
  
  // Use Case 3
  createEmployeeV1({
    username: "Rohit",
    password: "@#@#",
    email: "rohit@gmail.com",
  });
  console.log("\n");
  
  // Use Case 4
  createEmployeeV1({
    username: "Rohit",
    password: "@#@#",
    email: "rohit@gmail.com",
    mobile: "1212333",
  });