{
  // 중괄호로 감싸지 않으면 다른 파일에서도 식별자가 인식되어 중복됨
  // interface : 객체의 형태를 묘사하는 데에만 사용됨
  // type Point = {
  //   x: number;
  //   y: number;
  // };

  // const pt: Point = { x: 1, y: 2 };

  interface Point {
    x: number;
    y: number;
  }

  const pt: Point = { x: 1, y: 2 };

  interface Person {
    readonly id: number;
    first: string;
    last: string;
    nickname?: string;
    sayHi: () => string;
    // sayHi(): string; 위와 같은 의미지만 다르게 표현한 구문, 화살표 함수이냐 아니냐 차이
  }

  const thomas: Person = {
    first: "Thomas",
    last: "Hardy",
    nickname: "Tom",
    id: 12323,
    sayHi: () => {
      return "Hello!";
    },
  };

  thomas.first = "thomy";
  // thomas.id = 112; readonly 에러

  interface Product {
    name: string;
    price: number;
    applyDiscount(discount: number): number;
  }

  const shoes: Product = {
    name: "Blue Suede Shoes",
    price: 100,
    applyDiscount(amount: number) {
      const newPrice = this.price * (1 - amount);
      this.price = newPrice;
      return this.price;
    },
  };

  interface Dog {
    name: string;
    age: number;
  }
  // 같은 이름의 interface를 나눠서 입력하면 조합된다.
  interface Dog {
    breed: string;
    bark(): string;
  }

  const elton: Dog = {
    name: "Elton",
    age: 5,
    breed: "Austrailan Shepherd",
    bark() {
      return "Woof Woof";
    },
  };

  interface ServiceDog extends Dog {
    // interface extend : interface 상속
    job: "drug sniffer" | "bomb sniffer" | "guide dog";
  }

  const chewy: ServiceDog = {
    name: "Chewy",
    age: 1,
    breed: "chiwawa",
    bark() {
      return "Bark!";
    },
    job: "guide dog",
  };

  interface Human {
    name: string;
  }

  interface Employee {
    readonly id: number;
    email: string;
  }

  interface Engineer extends Human, Employee {
    level: string;
    languages: string[];
  }

  const pierre: Engineer = {
    name: "Pierre",
    id: 1234124,
    email: "pierre@gmail.com",
    level: "senior",
    languages: ["JS", "Python"],
  };

  // Interace와 Type alias의 차이점
  /* 
    1. interface는 객체 타입만 묘사할 수 있다.
    2. interface는 중복 선언 시 조합된다.
    3. interface는 상속이 가능하다.
   */
}
