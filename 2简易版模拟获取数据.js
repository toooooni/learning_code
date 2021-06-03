import React from "react"

export default function UseList(){
    const [users,setUsers] = React.useState([]);
    const [loading,setLoading] = React.useState(false);
    const [error,setError] = React.useState();
    const feachUsers = async () =>{
        setLoading(true);
        try{
            const res = await fetch("https://reqres.in/api/users/")
            const json = await res.json();
            setUsers(json.data);
        }catch(err){
            setError(err)
        }
        setLoading(false)
    }
    
    return (
        <div>
            <button onClick = {feachUsers}  disabled ={loading}>
                {loading ? "loading" :"Show Users"}
            </button>
            {error && <div style={{color: "red"}}>Failed:{String(error)}</div>}
            <br/>
            <ul>
                {users.length >0 &&
                users.map((user) =>{
                    return <li key ={user.id}>{user.first_name}</li>
                })}
            </ul>
        </div>
    )
}