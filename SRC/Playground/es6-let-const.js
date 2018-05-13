var nameVar = 'Andrew';
console.log(nameVar);


const multiplier = {
  numbers: [4, 19, 5, 3, 1, 4],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map((num) => num * this.multiplyBy);
  }
};

console.log(multiplier.multiply())
