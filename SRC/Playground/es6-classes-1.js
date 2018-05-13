
class Person {
  constructor(name = 'Annonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi ${this.name}`;
  }
  getDescription() {
    return `${this.name} is ${this.age} years old.`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description = `${description} Their major is ${this.major}.`;
    }

    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  hasHomeLocaiton() {
    return !!this.homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();

    if (this.hasHomeLocaiton()) {
      return `${greeting} from ${this.homeLocation}!`
    }
  }
}

const me = new Student('Ben Lambillotte', 25, 'Computer Science');
console.log(me.getDescription());

const sally = new Student();
console.log(sally.getDescription());

const ted = new Traveler('Ted Mosby', 25, 'San Francisco');
console.log(ted.getGreeting());
