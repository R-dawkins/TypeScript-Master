import React,{useRef} from 'react';
interface ShoppingListFormProps{
  onAddItem:(product:string,quantity:number)=>void
}
export default function ShoppingListForm ({onAddItem}:ShoppingListFormProps):JSX.Element{
  const textRef = useRef<HTMLInputElement>(null)
  const numRef = useRef<HTMLInputElement>(null)
  function handleSubmit(e:React.FormEvent){
    e.preventDefault()
    const newProduct = textRef.current!.value;
    const newQty = parseInt(numRef.current!.value);
    onAddItem(newProduct,newQty)
    textRef.current!.value = ""
    numRef.current!.value = ""
  }
  return <form onSubmit={handleSubmit}>
    <input ref={textRef} type="text" placeholder='Product Name'/>
    <input ref={numRef} type="number" min={0}/>
    <button type='submit'>Add Item</button>
  </form>
}