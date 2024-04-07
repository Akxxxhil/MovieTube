import { useState } from "react"

function Contact(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const[query,setQuery]=useState("")
    const data = {
        name,email,query
    }

    function signuphandler(e) {
        if (e.target.name == "name") {
            setName(e.target.value)
        }
        if (e.target.name == "email") {
            setEmail(e.target.value)
        }
        if (e.target.name == "query") {
            setQuery(e.target.value)
        }
        

    }
    function querysubmithandler(e) {
        e.preventDefault();
        console.log(data);

    }
    return <>
    <form onSubmit={querysubmithandler}>
            <div className="signuppage">
                <label htmlFor="">Enter Your Name</label><br /><br />

                <input style={{ border: "3px solid blue", fontSize: "20px", padding: "5px",borderRadius:"10px" }} name="name" onChange={signuphandler} value={name} type="text" placeholder="Name" />
                <br /><br />


                <label htmlFor="">Enter Your Email</label><br /><br />
                <input style={{ border: "3px solid blue", fontSize: "20px", padding: "5px",borderRadius:"10px" }} name="email" onChange={signuphandler} value={email} type="text" placeholder="Email" />
                <br /><br />

                 <label htmlFor="">Enter Your Query</label><br /><br />
                <textarea name="query"  cols="30" rows="10" style={{border: "3px solid blue",borderRadius:"10px"}}
                value={query} onChange={signuphandler}></textarea><br /><br />




                <button style={{border:"2px solid blue"}}>Submit</button>
            </div>
        </form>
    
    </>
}
export default Contact