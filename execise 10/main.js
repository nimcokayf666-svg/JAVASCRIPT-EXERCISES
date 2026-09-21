//  1 — Blocking vs Non-Blocking

// Blocking
console.log("Start");

alert("Hello");

console.log("End");

// Non-blocking
console.log("Start");

setTimeout(() => {
    console.log("Hello");
}, 2000);

console.log("End");

// 2 — Asynchronous Programming

// Asynchronous Programming waa hab JavaScript u isticmaasho si ay u qabato hawl qaadanaysa waqti,
//  iyadoo aysan barnaamijku istaagin ama sugin hawshaas inay dhammaato

// Waxay kuu oggolaanaysaa in shaqooyin badan la maareeyo isla waqtigaas, halkii mid kasta la sugi lahaa.

// example

console.log("Start");

setTimeout(() => {
    console.log("Hello");
}, 2000);

console.log("End");


// 3 — setTimeout()

// setTimeout(): waa JavaScript function loo isticmaalo in code la fuliyo kadib waqti cayiman.

// exm
setTimeout(() => {
    console.log("heey");
}, 2000);

//  4 — Callback

// Callback function waa function loo gudbiyo function kale si loo fuliyo waqti dambe.

// Waxay muhiim u tahay asynchronous programming sababtoo ah 
// waxay oggolaanaysaa in hawl la fuliyo marka hawl kale dhammaato,
//  iyadoo aan barnaamijku istaagin.

// exm
setTimeout(() => {
    console.log("welcom");
}, 2000);


//  5 — Output Order

// Haddii hal task uu qaadanayo 3 ilbiriqsi, 
// task-ka kale ee isla markiiba shaqayn kara ayaa ugu horreyn dhacaya. 
// Sababtu waa non-blocking JavaScript inuusan sugin task-ka 3-da ilbiriqsi qaadanaya.

// exm
setTimeout(() => {
    console.log("Task 1");
}, 3000);

console.log("Task 2");



