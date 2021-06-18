import React from "react";

const getSize = () =>{
    return window.innerWidth > 1000 ? "large" : "small"
}
const useWindowSize = () => {
    const [size,setSize] = React.useState(0)
    
}
