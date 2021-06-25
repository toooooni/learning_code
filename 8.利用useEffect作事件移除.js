import React, { useEffect } from "react"
const [size,setSize] = React.useState({});
React.useEffect(() =>{
    // 窗口大小发生变化时间处理函数
    const handler = () => {
        setSize(getSize())
    }
    window.addEventListener('resize',handler)
    //返回一个 callback 在组件销毁时调用
    return() => {
        window.removeEventListener('resize',handler)
    }
},[])