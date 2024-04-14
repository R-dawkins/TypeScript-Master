import type { Person } from "./types.js"; // javascript에 영향을 전혀 끼치지 않는 typescript 전용 구문 javascript로 컴파일 되지 않는다.
// import { type Person, 함수 혹은 클래스 등... } from "./types.js";
// Person interface만 타입이고 다른 것들은 함수나 클래스라서 javascript로 컴파일 해야 할 때 쓰는 구문
export default class User implements Person {
  constructor(public username: string, public email: string) {}
  logout() {
    console.log(`${this.username} logs out!!`);
  }
}

export function userHelper() {
  console.log("userHelper");
}
