import React from "react"
import { useEffect } from "react";

const getSize = () => {
    return window.innerWidth >1000 ? "large":"small";
}
const useWindowSize = () => {
    const [size,setSize] = React.useState(getSize());
    useEffect(() =>{
    const handle = () =>{
        setSize(getSize())
    };
    window.addEventListener('resize',handle)
    return () =>{
        // @ts-ignore
        window.removeEventListener('resize',handle)
    };

    },[]);//[]中为useEffect所依赖的数组。当[]的值发生改变的时候重新创建新的订阅
    return size;
}
const Demo = () => {
    const size = useWindowSize()
    if(size === "small") return <SallComponent/>;
    else return <largeComponent />
}