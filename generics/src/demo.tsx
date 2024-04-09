// function getRandomElement<T>(list: T[]): T {
//   const randomIdx = Math.floor(Math.random() * list.length);
//   return list[randomIdx];
// }

const getRandomElement=<T,>(list: T[]): T => {
  const randomIdx = Math.floor(Math.random() * list.length);
  return list[randomIdx];
}

// react와 typescript의 결합인 tsx파일에서는 제네릭 키워드를 화살표 함수에 사용할 때 , 쉼표를 T뒤에 넣어주어야 정상작동한다.