// tsc -w or tsc --watch : 파일을 감시하며 변경사항이 있을 시 자동 컴파일
// tsc : 터미널에 tsc만 치면 해당 폴더의 모든 파일이 한번에 컴파일 됨
// tsc 파일명 : 해당 파일만 컴파일
// noEmitOnError : 컴파일 에러가 있을 시 javascript파일로 변환되지 않음
interface Chicken {
  breed: string;
  eggsPerWeek: number;
  name: string;
  age: number;
}

const norma: Chicken = {
  breed: "Silkie",
  eggsPerWeek: 4,
  name: "Norma",
  age: 2,
};

const juniper: Chicken = {
  breed: "Silkie",
  eggsPerWeek: 5,
  name: "juniper",
  age: 2,
};
