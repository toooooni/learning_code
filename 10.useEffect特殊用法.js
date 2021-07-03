import React, { useEffect } from 'react'
//1.没有依赖项 ，每次render之后重新执行
useEffect(() =>{
    //每次 render 完后重新执行
    console.log('rer-render')
})
//2.空数组作为依赖项，只在首次执行时出发
useEffect(() =>{
    console.log('did mount')
})