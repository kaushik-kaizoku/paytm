import { Heading } from "../components/Heading";
import { SubHeading } from "../components/Subheading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/BottomLabel";
import { BottomWarning } from "../components/BottomWarning";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signin = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
    return <div className="bg-slate-500 flex justify-center items-center h-screen">  
    <div className="bg-white rounded-md m-4 w-96 p-4 overflow-hidden " >
    <Heading label={"Signin"} />
    <SubHeading label={"Enter your information to log in"} />
    <InputBox onChange={e => {
        setUserName(e.target.valu)
    }} field={"Email"} />
    <InputBox onChange={e => {
        setPassword(e.target.value)
    }} field={"Password"} />
    <Button onClick={async() => {
        const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
            username,
            password
        })
        localStorage.setItem("token",response.data.token);
        navigate("/dashboard");
    }} label={"Signin"} />
    <BottomWarning label={"Don't have an account?"} linktext={"Signup"} to={"/signup"}/>    
    </div>
    </div>    
}