//import React form 'react';

function Example(){
const [count,setCount] = React.useState(0)
return (
    <div>
        <p>
            {count}
        </p>
         <button onClick = {() => setCount(count +1)}>+</button>
    </div>
)
}