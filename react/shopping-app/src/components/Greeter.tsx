import React from 'react';
interface GreeterProps {
  person:string
}
// props:{person:string} > 구조분해 > {person}:string
function Greeter({person}:GreeterProps):JSX.Element{ // 구조분해
  return <h1>Hello! {person}</h1>
}

// const Greeter :React.FC = ()=>{
//   return <h1>Hello</h1>
// }
// React.FC 타입 애너테이션은 지금 현재는 잘 사용하지 않는다 (구식) 현재는 JSX.Element 사용

export default Greeter;