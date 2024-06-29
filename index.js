// Write your solution here!
//destructively append a cat's name
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    return cats.push(name);
}
destructivelyAppendCat("Raph");
console.log(cats);

//destructively prepend a cat's name
function destructivelyPrependCat(name) {
    return cats.unshift(name);
}
destructivelyPrependCat("Bob");
console.log(cats);

//destructively remove last cat's name
function destructivelyRemoveLastCat() {
    return cats.pop();
}
destructivelyRemoveLastCat();
console.log(cats);

//destructively remove first cat's name
function destructivelyRemoveFirstCat() {
    return cats.shift();
}
destructivelyRemoveFirstCat();
console.log(cats);

//non-destructively append a cat's name
function appendCat(name) {
    return [...cats, name];
}
console.log(appendCat("Broom"));

//non-destructively prepend a cat's name
function prependCat(name) {
    return [name, ...cats];
}
console.log(prependCat("Arnold"));

//non-dstructively remove last cat's name
function removeLastCat() {
    return cats.slice(0, 2)
}
removeLastCat();
console.log(removeLastCat());

//non-destructively remove first cat's name
function removeFirstCat() {
    return cats.slice(1);
}
console.log(removeFirstCat());