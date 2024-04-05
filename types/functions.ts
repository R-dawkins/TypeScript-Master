// The function parameter type
// function square(num: number) {
//   return num * num;
// }

// function greet(person: string) {
//   return `Hi there, ${person}!`;
// }

const doSomething = (person: string, age: number, isFunny: boolean) => {};

square(3);
greet("true");
doSomething("ChickenFace", 76, true);

// 파라미터 기본값 위치
function greet(person: string = "stranger") {
  return `Hi there, ${person}!`;
}

// The function return type
function square(num: number): number {
  return num * num;
}

const add = (x: number, y: number): number => {
  return x + y;
};

function rando(num: number) {
  if (Math.random() < 0.5) {
    return num.toString();
  }
  return num;
}

const colors = ["white", "yellow", "blue"];
colors.map((color) => {
  return color.toUpperCase();
});

function printTwice(msg: string): void {
  console.log(msg);
}
// void type은 Undefined나 Null을 반환한다.

function makeError(msg: string): never {
  throw new Error(msg);
}

function gameLoop(): never {
  while (true) {
    console.log("Game loop running");
  }
}
// Never Type은 절대 반환되면 안되는 함수
