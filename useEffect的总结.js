import React from 'react'
//1.每次render后执行：
React.useEffect(() =>{
    //不提供第二个参数参数作为依赖项
})

//2.只第一次render后执行
React.useEffect(()=>{
    //提供一个空数组
},[])

//3.第一次 + 依赖项发生变化之后执行
React.useEffect(() =>{
    //提供一个依赖数组
},[something])

//4.组件unmout之后执行
React.useEffect(() =>{
    //返回一个回调函数
    return() =>{

    }
})