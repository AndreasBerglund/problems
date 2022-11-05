const Dog = {
  bark: function () {
    console.log(this.name + " is barking!");
  },
};
const dog1 = Object.create(Dog);
dog1.name = "Pinot";
dog1.bark();

class Cat {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  meow() {
    console.log(this.name + " is meowing!");
  }
}

const cat1 = new Cat("Marius", 1);
cat1.meow();
