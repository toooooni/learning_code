import React from 'react'
function BlogView({id}){

    const [blogContent,setBlogContent] = React.useState(null)
    
    React.useEffect(()=>{
        const doAsync = async () => {
            setBlogContent(null);
            const res = await fetch ('/blog-content${id}')
            setBlogContent(await res.text())
        }
    doAsync();
    },[id]);
    const isLoading = !blogContent;
    return <div>{isLoading ? "Loading...." : blogContent}</div>

}