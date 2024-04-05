// const stuff: (string | number)[] = [1, "2", 3, 4, "5"];
// tuple type

// const color: number[] = [23, 45];
const color: [number, number, number] = [1, 2, 3, 4];

type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, "OK"];
// const goodRes: HTTPResponse = ["OK", 200]; --- error
// goodRes[0] = "200"; --- error
goodRes.push(123); // tuple 타입은 push와 pop을 막지 못하는 한계가 있다.
goodRes.pop();
goodRes.pop();
goodRes.pop();

// tuple은 자주 사용하지는 않는다. 차라리 객체 타입을 사용

const responses: HTTPResponse[] = [[200, "OK"]];

// enum type
const PENDING = 0;
const SHIPPED = 1;
const DELIVERED = 2;

enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED,
}

const myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus) {
  return status === OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.RETURNED);

enum ArrowKeys {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
}
