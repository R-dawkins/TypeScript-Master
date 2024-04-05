let age: number | string = 21;
age = 22;
age = "23";

type Point = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  long: number;
};

let coordinates: Point | Loc = { x: 1, y: 2 };
coordinates = { lat: 323.22, long: 323.33 };

function printAge(age: number | string): void {
  console.log(`You are ${age} years old`);
}

printAge(23);
printAge("23");

function calcTax(price: number | string, tax: number) {
  if (typeof price === "string") {
    // type narrowing : 타입 좁히기
    price = parseInt(price.replace("$", ""));
  }
  return price * tax; // 똑똑한 타입스크립트가 if문으로 인해 문자열 price가 들어올리가 없다는 것을 알아차린다
}

// const nums: number[] = [1, 2, 3, 4];
// const stuff: any[] = [1, 2, "3", false];
const stuff: (string | number)[] = [1, 2, 3, "4", "5"]; // union 배열 : 문자열과 숫자 모두 가능한 배열
// const stuff: string | number[] = []; // 괄호가 빠지면 문자열이거나 숫자 배열이어야 하는 전혀 다른 Union 배열 타입이 됨
// const stuff: string[] | number[] = []; // 문자열 배열이거나 숫자 배열이어야 한다 문자열과 숫자 모두는 불가능하다.

const coords2: (Point | Loc)[] = [];
coords2.push({ x: 1, y: 2 });
coords2.push({ lat: 323.22, long: 323.33 });

// Literal Types
let zero: 0 = 0;
zero = 2;

let mood: "Happy" | "Sad" = "Happy";
mood = "Sad";

type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

let today: DayOfWeek = "Monday";
