export class Person {
  constructor(age){
    this.age = age;
  }

  ageOnMercury() {
   const porp = 100 / 24;
    this.age *= porp;
    return Math.floor(this.age);
  }

  ageOnVenus() {
    const porp = 100 / 62;
    this.age *= porp;
    return Math.floor(this.age);
  }

  ageOnMars() {
    // const porp = 100 / 1.88;
    this.age /= 1.88;
    return Math.floor(this.age);
  }  

  ageOnJupiter() {
   // const porp = 100 / 11.86
    this.age /= 11.86;
    return Math.floor(this.age);
  }   

}