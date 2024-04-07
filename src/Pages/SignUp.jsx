import { useState } from "react"

function SignUp() {
    const [firstname, setFirstName] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [gender, setGender] = useState("")
    const data = {
        firstname, lastname, email, gender
    }

    function signuphandler(e) {
        if (e.target.name == "firstname") {
            setFirstName(e.target.value)
        }
        if (e.target.name == "lastname") {
            setLastname(e.target.value)
        }
        if (e.target.name == "email") {
            setEmail(e.target.value)
        }
        if (e.target.name == "gender") {
            setGender(e.target.value)
        }

    }
    function signupsubmithandler(e) {
        e.preventDefault();
        console.log(data);

    }
    return <>
        <form onSubmit={signupsubmithandler}>
            <div className="signuppage">
                <label htmlFor="">Enter Your FirstName</label><br /><br />
                <input style={{ border: "3px solid blue", fontSize: "20px", padding: "5px" }} name="firstname" onChange={signuphandler} value={firstname} type="text" placeholder="FirstName" />
                <br /><br />


                <label htmlFor="">Enter Your Lastname</label>
                <br /><br />
                <input style={{ border: "3px solid blue", fontSize: "20px", padding: "5px" }} name="lastname" onChange={signuphandler} value={lastname} type="text" placeholder="Lastname" />
                <br /><br />


                <label htmlFor="">Enter Your Email</label><br /><br />
                <input style={{ border: "3px solid blue", fontSize: "20px", padding: "5px" }} name="email" onChange={signuphandler} value={email} type="text" placeholder="Email" />
                <br /><br />


                <input onChange={signuphandler} type="radio" name="gender" id="" value="male" />
                <label htmlFor="">male</label>
                <input onChange={signuphandler} type="radio" name="gender" id="" value="Female" />
                <label htmlFor="">Female</label>
                <br /><br />


                <button>Sign Up</button>
            </div>
        </form>
    </>
}

export default SignUp