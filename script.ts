const x: string = "Hello, World!";
console.log(x);

let y = 23;
let z: number = false; // error

z = Number(false); // correct

function greet(name: string): string {
  return `Hello, ${name}!`;
}
greet("Alice");
greet(23); // error
greet(23 as any); // correct, but not recommended
greet(); // error
greet("Alice", "Bob"); // error

function greet2(name?: string): string {
  return `Hello, ${name || "World"}!`; // This is JS
}

greet2();

function greet3(name: string = "World"): void {
  return 1; // error
}

function add(a: number, b: number): number {
  return a + b;
}
function add2(a: string, b: string): string {
  return a + b;
}

function add3(a: number | string, b: number | string): number | string {
  let output: number = a; // error
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else if (typeof a === "string" && typeof b === "string") {
    return a + b;
  } else {
    throw new Error("Invalid arguments");
  }
}

add3(1, 2);
add3("Hello, ", "World!");
add3(1, "World!"); // no compiler error, but runtime error
add3(false, []); // compiler error

// @ts-ignore
add3(false, []); // compiler error

function add4<T extends number | string>(a: T, b: T): T {
  if (typeof a === "number" && typeof b === "number") {
    return (a + b) as T;
  } else if (typeof a === "string" && typeof b === "string") {
    return (a + b) as T;
  }
  throw new Error("Invalid arguments"); // This should never happen
}

add4(1, 2);
add4("Hello, ", "World!");
add4(1, "World!"); // compiler error
add4(false, []); // compiler error

const arr: number[] = [1, 2, 3, "four"]; // error
const arr2: (number | string)[] = [1, 2, 3, "four"]; // correct

interface Person {
  name: string;
  age: number;
}

interface Student extends Person {
  gpa: number | null;
  advisor?: string; // preferred
  car: string | undefined;
}

const student: Student = {
  name: "Alice",
  age: 20,
  gpa: 3.5,
}; // error

const student2: Student = {
  name: "Alice",
  age: 20,
  gpa: 3.5,
  car: undefined,
};

student2.gpa = null; // correct
student.name = null; // error

console.log(student2.gpa, typeof student2.gpa); // null 'object'

student2.gpa = 3.5; // correct
console.log(student2.gpa, typeof student2.gpa); // 3.5 'number'

console.log(typeof student2); // 'object'

type ID = string;
type Direction = "North" | "South" | "East" | "West";
type Person2 = {
  name: string;
  age: number;
};

type Student2 = Person2 & {
  gpa: number | null;
  advisor?: string;
  car: string | undefined;
};

var student10: Student2 = {
  name: "Alice",
  age: 20,
}; // error

function getName(person: any): string {
  return person.name;
}
getName(student2);
getName({ name: "123" });
getName(12); // runtime error
getName(null); // runtime error
getName(""); // runtime error

function getName2(person: unknown): string | undefined {
  // return person.name; // error

  if (typeof person === "object" && person !== null && "name" in person) {
    return (person as { name: string }).name;
  }
}

getName2(student2);
getName2({ name: "123" });
getName2(12);
getName2(null);
getName2("");

function getName3(person: Person | null): string | undefined {
  // return person.name; // error
  return person?.name;

