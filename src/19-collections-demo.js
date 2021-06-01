let list = ["DELHI", "KOLKATA", "MUMBAI", "CHENNAI"];

console.log(list);

// A1:: for loop
for (let i = 0; i < list.length; i++) {
  let item = list[i];
  console.log(item);
}

console.log("\n");

// A2 :: Enhance For Loop
for (let item of list) {
  console.log(item);
}

console.log("\n");
// A3 :: LAMDA :: ARROW FUNCTION
list.forEach((item, index) => console.log(item));