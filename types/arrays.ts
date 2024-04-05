// const activeUsers: [] = [];
// [] 빈 배열로 type annotate 하면 빈 배열이어만 한다
// 그렇기 때문에 배열에 Push하거나 직접 값을 넣지 못한다.
// activeUsers.push("1"); - error

const activeUsers: string[] = [];
activeUsers.push("tony");

const ageList: number[] = [45, 19, 25];
ageList[0] = 99;
// ageList[0] = "asd";

// const bools: Array<boolean> = []; 아래 코드와 같은 뜻
const bools: boolean[] = [];

type Point = {
  x: number;
  y: number;
};
// 커스텀 타입이 들어가는 배열 타입
const coords: Point[] = [];
coords.push({ x: 1, y: 2 });
coords.push({ y: 2 });

// 다차원 배열 타입
const board: string[][] = [
  ["X", "O", "X"],
  ["X", "O", "X"],
  ["X", "O", "X"],
];

const demo: number[][][] = [[[3, 4, 5, 6]]];
