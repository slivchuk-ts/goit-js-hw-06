class StringBuilder{
constructor(initialValue) {
this.#value = initialValue;
}

#value;

getValue() {
return this.#value;
}

padEnd(str) {
return this.#value += str;
}

padStart(str) {
return this.#value = str + this.#value;
}

padBoth(str) {
return this.#value = str + this.#value + str;
}
}

console.log("-----task3-----");
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="

