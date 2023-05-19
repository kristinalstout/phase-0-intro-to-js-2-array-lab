// Write your solution here!
const cats = ["Milo","Otis","Garfield"];

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function destructivelyAppendCat(name){
    return cats.push(name);
}
destructivelyAppendCat("Ralph");

function destructivelyPrependCat(name){
    return cats.unshift(name);
}
destructivelyPrependCat("Bob");

function destructivelyRemoveLastCat(){
    return cats.pop();
}
destructivelyRemoveLastCat(-1);

function destructivelyRemoveFirstCat(){
    return cats.shift();
}
destructivelyRemoveFirstCat(0);

function appendCat(name){
    const allCats = [...cats, (name)];
    return allCats;
}
appendCat("Broom");

function prependCat(name){
    const newCats = [(name), ...cats];
    return newCats
}
prependCat("Arnold");

function removeLastCat(){
    const updatedCats = [...cats];
    updatedCats.pop();
    return updatedCats;
}
removeLastCat(-1);

function removeFirstCat(){
    const firstCat = [...cats];
    firstCat.shift();
    return firstCat;
}
removeFirstCat(0);
