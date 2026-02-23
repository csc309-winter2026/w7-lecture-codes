const x: string = "Hello, World!";
console.log(x);

let y: number = 42;
const z: string = x + y; // takes string | number

function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet("Alice"));
console.log(greet(23)); // error
console.log(greet()); // error
console.log(greet("Bob", "Smith")); // error

console.log(greet(true as any)); // no error!

// @ts-ignore
console.log(greet(123));

function greet2(name?: string): string {
  if (name) {
    return `Hello, ${name}!`;
  } else {
    return "Hello!";
  }
}

console.log(greet2("Charlie"));
console.log(greet2());

function add(a: number, b: number): number {
  return a + b;
}

function add2(a: string, b: string): string {
  return a + b;
}

console.log(add(5, 10));
console.log(add("Hello, ", "TypeScript!")); // error

function add3(a: number | string, b: number | string): string {
  if (typeof a === "number" && typeof b === "number") {
    return "Number addition: " + (a + b);
  } else if (typeof a === "string" && typeof b === "string") {
    return "String concatenation: " + (a + b);
  } else {
    throw new Error("Invalid arguments");
  }
}

console.log(add3(5, 10));
console.log(add3("Hello, ", "TypeScript!"));
console.log(add3(false, true)); // compile error
console.log(add3([], 2)); // compile error
console.log(add3(5, "10")); // runtme error

function add4<T extends number | string>(a: T, b: T): T {
  if (typeof a === "number" && typeof b === "number") {
    return (a + b) as T;
  } else {
    // both are string
    return ((a as string) + b) as T;
  }
}
console.log(add4("Hello, ", "TypeScript!"));
console.log(add4(5, "10")); // compile error

function add6(a: any, b: any): any {
  return a + b;
}

console.log(add6(5, 10));
console.log(add6("Hello, ", "TypeScript!"));
console.log(add6([], null));

function add7(a: unknown, b: unknown): unknown {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else if (typeof a === "string" && typeof b === "string") {
    return a + b;
  } else {
    throw new Error("Invalid arguments");
  }
}

console.log(add7(5, 10));
console.log(add7("Hello, ", "TypeScript!"));
console.log(add7([], null));

const arr: number[] = [1, 2, 3, "dal"]; // error
const arr2: (number | string)[] = [1, 2, 3, "dal"];

type Person2 = {
  name: string;
  age: number;
  height: number | null;
  balance?: number; // optional
  bankrupt: boolean | undefined;
};

interface Person {
  name: string;
  age: number;
  height: number | null;
  balance?: number; // optional
  bankrupt: boolean | undefined;
  c: unknown;
}

type Student2 = Person2 & {
  grade: number;
};

interface Student extends Person {
  grade: number;
}

let person2: Person = {
  c: 1,
  name: "Alice",
  age: 30,
  height: null,
}; // error

let person: Person = {
  c: "hello",
  name: "Bob",
  age: 25,
  height: null,
  bankrupt: undefined,
};

person.name = null; // error
person.name = undefined; // error
person.height = undefined; // error

console.log(person.balance); // undefined
console.log(person.bankrupt); // undefined
console.log(person.height, typeof person.height); // null 'object'
console.log(typeof person); // object

function print(person: Person | null): void {
  if (person === null) {
    console.log("Person is null");
  } else {
    console.log(person.name, person.age);
  }
}

function print2(person: Person | null): void {
  console.log(person?.name, person?.age); // javascript optional chaining
}

print(undefined); // error
print(undefined as any); // runtime error
