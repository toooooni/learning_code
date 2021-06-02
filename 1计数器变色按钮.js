import React from "react";

function CountChecker({ count }){
  const color = count >10 ? "black":"pink";
  return <span style ={{color}}>{count}</span>
}
export default function Counter(){
  const [count,setCount] = React.useState(0);
  return(
    <div>
      <button onClick = {()=>setCount(count +1)}>
      <CountChecker count = {count}/>
      </button>
    </div>
  )
}