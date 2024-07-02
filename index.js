const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  return  cats.push(name = "Ralph");
}

function destructivelyPrependCat(name) {
   return cats.unshift(name = "Bob");
}

function destructivelyRemoveLastCat() {
    return cats.pop()
}

function destructivelyRemoveFirstCat() {
    return cats.shift();
}

function appendCat(name) {
    return [...cats, "Broom"];
}

function prependCat(name) {
    return ["Arnold", ...cats];
}

function removeLastCat() {
   return cats.slice(0, cats.length - 1);
}

function removeFirstCat() {
    return cats.slice(1);
}