import { Heading } from "../components/Heading";
import { SubHeading } from "../components/Subheading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/BottomLabel";
import { BottomWarning } from "../components/BottomWarning";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Signup = () => {
    const [firstName,setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username,setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    return <div className="bg-slate-500 h-screen flex justify-center items-center">
    <div className="bg-white rounded-md w-96 p-4 overflow-hidden " >
    <Heading label={"Signup"} />
    <SubHeading label={"Enter your information to create an account"} />
    <InputBox onChange={e =>
    setFirstName(e.target.value)
    } field={"First Name"} />
    <InputBox  onChange={e =>
    setLastName(e.target.value)
    } field={"Last Name"} />
    <InputBox onChange={e =>
    setUserName(e.target.value)
    } field={"Email"} />
    <InputBox onChange={e =>
    setPassword(e.target.value)
    } field={"Password"} />
    <Button onClick={async() => {
        const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
            username,
            firstName,
            lastName,
            password
        })
        localStorage.setItem("token",response.data.token);
        navigate("/dashboard");
    }
    } label={"Signup"} />
    <BottomWarning label={"Already have an account?"} linktext={"Signin"} to={"/signin"}/>    
    </div>
    </div>
}