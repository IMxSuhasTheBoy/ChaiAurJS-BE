const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros)  // original arr modified

// console.log(marvel_heros);
// console.log(marvel_heros[3])
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)  // ret new arr without modifing original arr
// console.log(allHeros);

// spread / rest---------------

const all_new_heros = [...marvel_heros, ...dc_heros]; // advantage over concat method : multiple arr spread for returning into one arr

// console.log( all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);

// console.log(Array.isArray("Hitesh"));
// console.log(Array.from("Hiteshfddss")); // string is converted in to arr with each indices
console.log(Array.from({ name: "hitesh" }).values); // interesting  : to make an arr from obj must specify for key / value to have in arr, syntax to be learnt

//---------------------
const set = new Set(["foo", "bar", "baz", "foo"]);
// console.log(Array.from(set));
// console.log(Array.of(set));
//---------------------


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
