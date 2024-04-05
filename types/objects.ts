// function printName(person: { first: string; last: string }): void {
//   console.log(`${person.first} ${person.last}`);
// }
// printName({ first: "Thomas", last: "Jenkins" });

// let coordinate: { x: number; y: number } = { x: 32, y: 20 };
// function randomCoordinate(): { x: number; y: number } {
//   return { x: Math.random(), y: Math.random() };
// }

// printName({ first: "Mick", last: "Jagger", age: 34 });
// const singer = { first: "Mick", last: "Jagger", age: 34 };
// printName(singer);
// 직접 속성을 추가적으로 적으면 타입스크립트가 오류를 발생시키지만
// 객체를 변수로 만들어서 함수의 인수로 삼으면 지정된 속성이 있는지 없는지만 살펴보고 부가적인 속성이 있어도 오류를 발생시키지 않는다.

// type alias
// type Point = {
//   x: number;
//   y: number;
// };
// let coordinate: Point = { x: 32, y: 20 };
// function randomCoordinate(): Point {
//   return { x: Math.random(), y: Math.random() };
// }

// function doublePoint(point: Point): Point {
//   return { x: point.x * 2, y: point.y * 2 };
// }

// type MyNum = number;

// let age: MyNum = 12312;

// Nested Objects
type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: {
    producer: string;
    writer: string;
  };
};

function calculatePayout(song: Song): number {
  return song.numStreams * 0.0033;
}

function printSong(song: Song): void {
  console.log(`${song.title} - ${song.artist}`);
}

const mySong: Song = {
  title: "Unchained Melody",
  artist: "Righteous Brothers",
  numStreams: 1235125,
  credits: {
    producer: "Phil Spector",
    writer: "Alex North",
  },
};

calculatePayout(mySong);
printSong(mySong);

type Point = {
  x: number;
  y: number;
  z?: number;
};

const myPoint: Point = { x: 1, y: 3 };
// readonly intersection(제어자)
type User = {
  readonly id: number;
  username: string;
};

const user: User = {
  id: 1234,
  username: "catgirl",
};

type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};

type ColorfulCircle = Circle & Colorful;
//&를 활용한 교차 타입

const happyface: ColorfulCircle = {
  radius: 4,
  color: "yellow",
};

type Cat = {
  numLives: number;
};

type Dog = {
  breed: string;
};

type CatDog = Cat & Dog & { age: number };

const christy: CatDog = {
  numLives: 7,
  breed: "Husky",
  age: 9,
};
