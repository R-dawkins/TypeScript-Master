// type annotation
let movieTitle: string = "Amadeus";
movieTitle = "Arrival";
movieTitle = 9;
movieTitle.toUpperCase();

let numCatLives: number = 9;
numCatLives += 1;
// numCatLives = "zero";

let gameOver: boolean = false;
gameOver = true;
gameOver = "true";

// type inference = 타입 추론
// typescript로 하여금 타입을 추론하게 하여 직접 타입 정의를(annotation) 할 필요가 없도록 한다.
let tvShow = "Olive Kitteridge";
tvShow = "The Other Two";
tvShow = false;

let isFunny = false;
isFunny = true;
isFunny = "false";

// The any type
let thing: any = "hello";
thing = true;
thing = 1;
thing();
thing.toUpperCase();

// type annotation이 필요한 경우 = 변수의 값이 조건적으로 결정될 때...
const movies = ["Arrival", "The thing", "Alien", "Amadeus"];
let foundMovie: string;

for (let movie of movies) {
  if (movie === "Amadeus") foundMovie = "Amadeus";
}
