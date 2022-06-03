import React  from "react";
import React, { useState } from "react";


function Register(){
    const [input,setInput] = useState({
        name:"",
        email:"",
        username:"",
        password:""
    })

    
    function handleChange(event){
        const {name, value}= event.target;

        setInput(prevInput =>{
            return{
                ...prevInput,
                [name]:value
            }
        })
    }
    function handleClick(event){

    }




    return(
<div>
        <div class="form">
            <h1>signup Here</h1>
            <div class="sign-form ">
                <form action="" method="POST"  >
                    <label> Name
                        <input type="text" onChange={handleChange} name="name"  value={input.name}/>
                    </label>
                    <br/>
                    <label>
                        Email
                        <input type="email" onChange={handleChange}  name="email" />
                    </label><br/>

                    <label>Username
                        <input type="text" onChange={handleChange}  name="uname" />
                    </label><br/>
                    <label>password
                        <input type="password" onChange={handleChange}  name="pword" />
                    </label><br/>

                    <button type="submit" onclick={handleClick}> Register</button>
               

                </form>

            </div>
    
        </div>
    </div>


    );
}

export default Register;