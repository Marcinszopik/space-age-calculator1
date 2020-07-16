export class Person {
  constructor(age,country){
    this.age = age;
    this.country = country;
   

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

  yearsExpectedToLiveOnEarth() {
    if (this.country === "Spain") {
      return 83 - this.age
  } else if (this.country === "Sweden"){
    return 82 - this.age 

  } else if (this.country === "Russia") {
    return 72 -this.age
  }

}



    
      
      
}



