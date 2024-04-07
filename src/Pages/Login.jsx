import { useState } from "react"

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const data = { username, password }
    function Loginhandler(e) {
        if (e.target.name == "username") {
            setUsername(e.target.value)
        }
        if (e.target.name == "password") {
            setPassword(e.target.value)
        }

    }
    function loginsubmithandler(e) {
        e.preventDefault();
        console.log(data);

    }
    return <>

        <form onSubmit={loginsubmithandler}>
            <div className="loginpage">
                <label htmlFor="">Enter Your Username</label>
                <br /><br />
                <input style={{border:"3px solid blue", fontSize:"20px",padding:"5px"}} name="username" value={username} onChange={Loginhandler} type="text" placeholder="username" />
                <br /><br />


                <label htmlFor="">Enter Your Password</label>
                <br /><br />
                <input style={{border:"3px solid blue", fontSize:"20px",padding:"5px"}} name="password" value={password} onChange={Loginhandler} type="text" placeholder="password" />
                <br /><br />

                <button style={{border:"2px solid blue"}}>LogIn</button>
            </div>
        </form>
    </>
}

export default Login