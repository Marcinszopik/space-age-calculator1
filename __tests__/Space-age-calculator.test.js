import { Person } from "../src/solar.js";

describe("Person", () => {
  test("should tell us age on Earth", () => {
    const person = new Person(40);
    expect(person.age).toEqual(40);
  });

  test("should tell us age on Mercury", () => {
    const person = new Person(40);
    expect(person.ageOnMercury()).toEqual(166);
  });

  test("should tell us age on Venus", () => {
    const person = new Person(40);
    expect(person.ageOnVenus()).toEqual(64);
  });

  test("should tell us age on Mars", () => {
    const person = new Person(40);
    expect(person.ageOnMars()).toEqual(21);
  });

  test("should tell us age on Jupiter", () => {
    const person = new Person(40);
    expect(person.ageOnJupiter()).toEqual(3);
  });


  test("should tell us life expcectancy if you are from Spain", () => {
    const person = new Person(40, "Spain");
    expect(person.yearsExpectedToLiveOnEarth()).toEqual(43);
  });

  test("should tell us life expcectancy if you are from Sweden", () => {
    const person = new Person(40, "Sweden");
    expect(person.yearsExpectedToLiveOnEarth()).toEqual(42);
  });
 
  test("should tell us life expcectancy if you are form Russia", () => {
    const person = new Person(40, "Russia");
    expect(person.yearsExpectedToLiveOnEarth()).toEqual(32);
  });

  
});



