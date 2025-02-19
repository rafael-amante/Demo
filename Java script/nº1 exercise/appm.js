let age = 32;
let userName = "Rapha";
let hobbies = ["Sports","Cooking","Reading"];
// alert(hobbies [0]);
let job = {
    title: "Developer",
    Place: "New York",
    salary: "50000",
};

let totalAdultYears;

function calculateAdultYears(userAge) {
  let result;
  result = userAge - 18;
  return result;
}

totalAdultYears = calculateAdultYears(age);
console.log(totalAdultYears);

age = 45;
totalAdultYears = calculateAdultYears(age);

console.log(totalAdultYears);

let person = {
  name: "Rapha", //<--- property
  greet() {      //<--- method
    console.log("Hello!");
  }
};

person.greet();