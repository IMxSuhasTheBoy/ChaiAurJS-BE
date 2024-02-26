const inventory = {
  camera: "gopro",
  bag: "skybag",
  // vehicle: "cycle",
  food: "poha",
  // water: "waterJar"
};

/// Nullish for assigning defalt value
inventory.vehicle ??= "bike";
console.log(inventory.vehicle);

/// Logical AND assignment : It evaluates the expression on the left-hand side (LHS). If the result of the evaluation is truthy, it assigns the value of the expression on the right-hand side (RHS) to the variable on the left-hand side.
inventory.food &&= "biryani";
console.log(inventory.food);

/// Logical OE assignment : works opposite of above operator

inventory.water ||= "waterBottles";
console.log(inventory.water);
