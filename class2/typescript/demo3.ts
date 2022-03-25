let a;
a = 10;
a = "A";
a = true;
a = 10.0;

let b: number;
b = 10;
//b = 'A';

let c = 10;
//c = 'A';

let d: number;
let e: string;
let f: boolean;
let g: any;
let h: any[] = [10, "A", true, 10.0];
let k: number[] = [1, 2, 3];

const colorRed = "Red";
const colorYellow = "Yellow";

enum Color {
  Red,
  Greem,
  Yellow,
}

enum Gender {
  Male,
  Female,
}

enum Days {
  Monday = 10,
  Tuesday = 20,
  Wednesday = 30,
  Thursady = 40,
  Friday = 50,
}

console.log(Days.Wednesday)
