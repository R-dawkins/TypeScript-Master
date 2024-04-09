// typeof Type guard
// 원시 값을 좁히거나 제거할 때 주로 사용
function triple(value: number | string) {
  if (typeof value === "string") {
    return value.repeat(3);
  }
  return value * 3;
}

console.log(triple("3"));

// Truthiness Type guard
// null, undefined, falsy 값을 좁히거나 제거할 때 주로 사용
const el = document.getElementById("idk");
if (el) {
  el; // htmlel
} else {
  el; // null
}

const printLetters = (word?: string) => {
  // ? 키워드의 뜻은 해당 변수가 optinal하다는 뜻 (선택정)
  if (word) {
    for (let char of word) {
      console.log(char);
    }
  } else {
    console.log("you did not pass in a word");
  }
};

// Equality (동등) Type guard

function someDemo(x: string | number, y: string | boolean) {
  if (x === y) {
    // x, y 둘다 string이어야 통과된다.
  }
}

// in Operator Type guard
// 객체 안에 특정 프로퍼티가 있는지 확인할 수 있는 in 연산자를 활용한 타입 가드
interface Movie {
  title: string;
  duration: number;
}
interface TVshow {
  title: string;
  numEpisodes: number;
  episodeDuration: number;
}

function getDuration(media: Movie | TVshow) {
  if ("duration" in media) {
    return media.duration;
  } else {
    return media.numEpisodes * media.episodeDuration;
  }
}

console.log(getDuration({ title: "roadofthering", duration: 240 }));
console.log(
  getDuration({ title: "modernFamily", numEpisodes: 12, episodeDuration: 40 })
);

//instanceof Type guard
// 특정 클래스에 값이 존재하는지 등을 확인할 수 있는 타입 가드
function printFullDate(date: string | Date) {
  if (date instanceof Date) {
    console.log(date.toUTCString());
  } else {
    console.log(new Date(date).toUTCString());
  }
}

class User {
  constructor(public username: string) {}
}

class Company {
  constructor(public name: string) {}
}

function printName(entity: User | Company) {
  // if("username" in entity) in을 사용한 타입 좁히기도 가능
  // 하지만 둘다 동일한 이름을 가진 프로퍼티라면 instanceof를 사용한 타입 좁히기가 불가피 할 것이다.
  if (entity instanceof User) {
    entity;
  } else {
    entity;
  }
}

// type Predicates (타입 명제)
interface Cat {
  name: string;
  numLives: number;
}

interface Dog {
  name: string;
  breed: string;
}
function isCat(animal: Cat | Dog): animal is Cat {
  // parameter name(여기서는 animal) is Cat : 이 구문이 typescript에게 이 함수가 True를 반환한다면 animal은 Cat타입이라고 말해준다. 이부분이 type Predicates
  return (animal as Cat).numLives !== undefined; // animal이 Cat임을 단언한 후 Cat에 있는 프로퍼티가 undefined인지 확인하여 true or false를 뱉는다.
}
function makeNoise(animal: Cat | Dog): string {
  if (isCat(animal)) {
    return "Meow";
  } else {
    return "Woof!";
  }
}

// Discriminated Unions (판별 유니온)
// 공통적인 프로퍼티를 공유하는 여러 유형을 생성하여 구분할 수 있는 일종의 이정표를 만들어 두는 방법
interface Rooster {
  name: string;
  weight: number;
  age: number;
  kind: "Rooster";
}
interface Cow {
  name: string;
  weight: number;
  age: number;
  kind: "Cow";
}
interface Pig {
  name: string;
  weight: number;
  age: number;
  kind: "Pig";
}
interface Sheep {
  name: string;
  weight: number;
  age: number;
  kind: "Sheep";
}
type FarmAnimal = Pig | Cow | Rooster | Sheep;

function getFarmAnimalSound(animal: FarmAnimal) {
  switch (animal.kind) {
    case "Pig":
      return "Oink";
    case "Cow":
      return "Moooo";
    case "Rooster":
      return "Cockadoodledo";
    // case "Sheep":
    // return "Baaa";
    default:
      // 모든 케이스를 정확히 처리했다면 default까지 오지 않는다. 그러나 실수로 처리를 하지 못했다면 default가 실행된다
      const shouldNeverGetHere: never = animal; //never 타입에는 어떤 타입도 할당할 수 없기 때문에 타입스크립트가 에러를 알려준다.
      return shouldNeverGetHere;
    // 공식 문서에서는 변수명을 _exhaustiveCheck로 사용한다고 한다.
  }
}
const stevie: Rooster = {
  name: "Stevie Chicks",
  weight: 2,
  age: 1.5,
  kind: "Rooster",
};
console.log(getFarmAnimalSound(stevie));
