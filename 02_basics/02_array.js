const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

marvel_heros.push(dc_heros); // original arr modified

// console.log(marvel_heros);
// console.log(marvel_heros[3])
// console.log(marvel_heros[3][1]);

///now comment line 4, then test bellow
// const allHeros = marvel_heros.concat(dc_heros)  // ret new arr without modifing original arr
// console.log(allHeros);

// console.log(marvel_heros)
// console.log(dc_heros)

/// spread / rest---------------

// const all_new_heros = [...marvel_heros, ...dc_heros]; /// advantage over concat method : multiple arr spread for returning into one arr

// console.log( all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]; ///khichadi Array > nested Array

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Hitesh"));
console.log(Array.isArray(["calm", 25, "calmCalm25"]));
console.log(Array.from("Hiteshfddss")); /// string is converted in to arr with each indices
///console.log(Array.from({ name: "hitesh" }).values); /// !nteresting  : to make an arr from obj must specify for key / value to have in arr, syntax to be learnt and modify, not usefull currently

//---------------------
const ggSet = new Set(["river", "ocean", "windmill", "ocean", "rain", "ocean"]);

console.log(ggSet);
console.log(ggSet.size);
console.log(ggSet.has("pond"));
/// add( ) delete() clear()

// console.log(Array.from(ggSet));
// console.log(Array.of(ggSet));
//---------------------

let score1 = 100;
let score2 = 200;
let score3 = 300;
let score4 = 500;

console.log(Array.of(score1, score2, score3));

const scores = Array.of(score1, score2, score3, score4);
const nestArry = [3, [1, "pick"]];

///Destructring
const [got1, got2, got3] = scores;
const [, [, gotPick]] = nestArry;

console.log(gotPick);

///Rest
const [x, y, ...remaining] = scores;
console.log(remaining)

const exercise2 = [1, [0,1]];
console.log( [...exercise2, 7, ...exercise2[1]] )

///[][][][[][][]Array Advavnced[][][][][][][] in jsvuTool.js

/// v8 discussion
// https://github.com/v8/v8
/// jsvu : JavaScript (engine) version Updater.
// https://github.com/GoogleChromeLabs/jsvu#readme
