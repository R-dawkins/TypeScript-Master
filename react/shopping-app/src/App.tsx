import React,{useState} from 'react';
import Greeter from './components/Greeter';
import './App.css';
import ShoppingList from './components/ShoopingList';
import Item from './models/item';
import ShoppingListForm from './components/ShoppingListForm';
import {v4 as getId} from "uuid"; // id 생성 라이브러리
const num:number = 123

// const func = <T,>  (x:T): T=> {
  // return x
// }
 // react에서 화살표함수와 제네릭을 병용하려면 후행 쉼표를 넣어주어야 오류가 발생하지 않는다.
// function func<T>(x:T): T{
//   return x
// }

function App() {
  const [items,setItems] = useState<Item[]>([])
  const addItem = (product:string,quantity:number) => {
    console.log(product,quantity);
    setItems([...items,{id:getId(),product,quantity}])
    console.log(items);
    
  }
  // const items = [
  //   {id:1,product:"Lemon",quantity:3},
  //   {id:2,product:"Chicken Breast",quantity:2}
  // ]
  return (
    <div className="App">
      <ShoppingList items={items}></ShoppingList>
      <ShoppingListForm onAddItem={addItem}></ShoppingListForm>
    </div>
  );
}

export default App;
