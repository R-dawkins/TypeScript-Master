import axios from "axios";
import _ from "lodash";
const jsonUrl = "https://jsonplaceholder.typicode.com/users"; // jsonplaceholder API
// npm i --save-dev @types/lodash
// DefinitelyTyped Github에서 타입이 동봉 되어있지 않는 lodash 라이브러리 타입 개별 설치
// typescript 공식 웹사이트의 this Type Search 항목에서 각 라이브러리의 타입 설치 안내
_.sample
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

axios
  .get<User[]>(jsonUrl) // 중첨 제네릭 구조 : get에 제네릭 타입을 정하면 data도 타입이 정해짐
  .then((res) => {
    res.data.forEach(printUser);
  })
  .catch((err) => {
    console.log("error", err);
  });

function printUser(user: User) {
  console.log(user.name);
  console.log(user.email);
  console.log(user.phone);
}
