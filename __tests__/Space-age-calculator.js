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
});
