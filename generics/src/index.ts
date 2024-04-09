// generics 제네릭 :

// const nums: number[] = []
const nums: Array<number> = [];
const colors: Array<string> = [];

const inputEl = document.querySelector<HTMLInputElement>("#username")!;
console.dir(inputEl);
inputEl.value = "Hacked";

const btnEl = document.querySelector<HTMLButtonElement>(".btn")!;

function numberIdentity(item: number): number {
  return item;
}
function stringIdentity(item: string): string {
  return item;
}
function booleanIdentity(item: boolean): boolean {
  return item;
}

// function identity(item: any): any {
//   return item;
// }
// any 타입의 사용은 입력 타입과 출력 타입의 상관이 없어지기 떄문에 혼동될 수 있어 사용을 지양해야한다
interface Cat {
  name: string;
  breed: string;
}

function identity<Type>(item: Type): Type {
  return item;
}

// function identity<T>(item: T): T { 관습적으로 Type의 약자인 T를 자주 사용한다.
//   return item;
// }

identity<number>(7);
identity<string>("hello");
identity<Cat>({ name: "blue", breed: "rusian sham" });

function getRandomElement<T>(list: T[]): T {
  console.log(Math.random());
  console.log(list.length);
  console.log(Math.floor(Math.random() * list.length));

  const randomIdx = Math.floor(Math.random() * list.length);
  return list[randomIdx];
}

console.log(getRandomElement<string>(["a", "b", "c", "d"]));
getRandomElement(["a", "b", "c", "d"]);
// type 추론을 사용하여 <>에 파라미터를 넣지 않아도 typescript가 이 배열이 문자열 배열인것을 추론하게 할 수 있다.
// 그러나 document.querySelector와 같은 함수에는 불가능하다.
console.log(getRandomElement<number>([1, 2, 3, 4, 5, 6, 7, 8]));

// 제네릭 키워드의 extends :
function merge<T extends object, U extends object>(object1: T, object2: U) {
  return {
    ...object1,
    ...object2,
  };
}

// const comboObj = merge({ name: "colt" }, { pets: ["blue", "elton"] });
merge<{ name: string }, { pets: string[] }>(
  { name: "colt" },
  { pets: ["blue", "elton"] }
);

interface Lengthy {
  length: number;
}

function printDoubleLength<T extends Lengthy>(thing: T): number {
  return thing.length * 2;
}
// 제네릭 extends : 일정 타입으로 제한
printDoubleLength({ length: 3 });

function makeEmptyArray<T = number>(): T[] {
  // 제네릭 기본값
  return [];
}
// 제네릭 기본값은 빈 배열을 반환하여 타입스크립트가 unknown으로 추론하는 경우 사용할 수 있다.
const unknown = makeEmptyArray(); // 제네릭 기본값을 설정하지 않았다면 Unknown으로 타입 추론한다.
// <T = number> 제네릭의 기본값은 제네릭에 타입 파라미터를 정하지 않았을 때만 작동한다. 아래와 같이 타입을 지정했을때는 기본값이 무시된다.
const strings = makeEmptyArray<string>();

// -----------------
// 제네릭을 활용한 class
interface Song {
  title: string;
  artist: string;
}

interface Video {
  title: string;
  creator: string;
  resolution: string;
}

class VideoPlaylist {
  public videos: Video[] = [];
}

class SongPlaylist {
  public songs: Song[] = [];
}

class Playlist<T> {
  public queue: T[] = [];
  add(el: T) {
    this.queue.push(el);
  }
}

const songs = new Playlist<Song>();

const videos = new Playlist<Video>();
