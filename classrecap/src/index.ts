// public : 클래스 외부에서도 프로퍼티나 메서드에 변경, 접근, 쓰기 등을 할 수 있다고 알리는 것
// readonly : 프로퍼티에 대한 쓰기 가능 여부를 결정 public 이지만 readonly일 수 있다. 읽기는 할 수 있지만 쓰기는 할 수 없는 것
// class Player {
//   public readonly first: string; // typescript에게 가진 프로퍼티를 알리는 작업
//   public readonly last: string;
//   private score: number = 0; // type annotation 하지 않아도 타입 추론 가능 score = 0이니 score는 number 타입
//   constructor(first: string, last: string) {
//     this.first = first;
//     this.last = last;
//   }

//   secretMethod(): void {
//     console.log("Secret Method!!!");
//   }
// }

// -----------------
// parameter property 파라미터 프로퍼티 : 클래스 프로퍼티 단축 구문
// property 선언이나 this.프로퍼티 등의 일을 할 필요 없이 constructor 파라미터 안에서 해결 가능하다

class Player {
  // public readonly first: string; // typescript에게 가진 프로퍼티를 알리는 작업
  // public readonly last: string;
  // private score: number = 0; // type annotation 하지 않아도 타입 추론 가능 score = 0이니 score는 number 타입
  constructor(
    public first: string,
    public last: string,
    protected _score: number // protected : private과 다르게 자식 클래스에서도 사용 가능하게 하는 키워드이다. private과 같이 클래스 외부에서는 사용하지 못한다.
  ) {}

  private secretMethod(): void {
    console.log("Secret Method!!!");
  }
  get fullName(): string {
    return `${this.first} ${this.last}`;
  }
  get score(): number {
    return this._score;
  }
  set score(newScore: number) {
    // typescript의 setter는 반환 type annotation을 하지 못한다.
    if (newScore < 0) {
      throw new Error("Score cannot be negative!");
    }
    this._score = newScore;
  }
}

class SuperPlayer extends Player {
  public isAdmin: boolean = true;
  maxScore() {
    this._score = 999999;
  }
}

const elton = new Player("Elton", "Steele", 100);
console.log(elton.fullName);
elton.score = 99;
console.log(elton.score);

interface Colorful {
  color: string;
}

interface Printable {
  print(): void;
}

class Bike implements Colorful {
  constructor(public color: string) {}
}
class Jacket implements Colorful, Printable {
  constructor(public brand: string, public color: string) {}
  print(): void {
    console.log(`${this.color}, ${this.brand}`);
  }
}

const bike1 = new Bike("red");
const jacket1 = new Jacket("prada", "red");

interface Payable {
  getPay(): number;
}

abstract class Employee {
  // abstract class : 인스턴스화 할 수 없는 추상적인 클래스를 만들 때 사용한다.
  // 주로 자식클래스에 상속받을 부모 클래스를 만들 때 쓰이는 것 같다.
  constructor(public first: string, public last: string) {}
  abstract getPay(): number;
  greet() {
    console.log("Hello");
  }
}

class FullTimeEmployee extends Employee {
  constructor(first: string, last: string, private salary: number) {
    super(first, last);
  }
  getPay(): number {
    return this.salary;
  }
}

class PartTimeEmployee extends Employee {
  constructor(
    first: string,
    last: string,
    private houlyRate: number,
    private hoursWorked: number
  ) {
    super(first, last);
  }
  getPay(): number {
    return this.houlyRate * this.hoursWorked;
  }
}

const betty = new FullTimeEmployee("Betty", "White", 95000);
console.log(betty.getPay());
const bill = new PartTimeEmployee("Bill", "Billerson", 24, 1100);
