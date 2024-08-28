import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export function SendMoney(){
    const [searchParams] = useSearchParams();
    const [ amount, setAmount ] = useState(0);
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    

    return <div className="flex justify-center items-center space-y-8 h-screen">
        
        <div className="text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg">
        <div className="flex flex-col space-y-1.5 p-6">
        <div className="text-3xl font-bold text-center">Send Money</div>
        </div>
      
        <div className="flex items-center space-x-4">
            <div className="rounded-full h-12 w-12 bg-green-500 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full ">
                  <span className="text-2xl text-white">{name[0]}</span>
                </div>
            </div>
            <h3 className="text-2xl font-semibold">{name}</h3>
        </div>

        <div className="space-y-4">
            <div className="space-y-2">
            <label className="font-medium text-sm">Amount (in Rs)</label>
            <div>
                <input onChange={e => {
                    setAmount(e.target.value)
                }} type="number" placeholder="Enter Amount" className="w-full h-10 rounded-lg border px-3">
                </input>
            </div>
            </div>
            <button onClick={() =>{
                axios.post("http://localhost:3000/api/v1/account/transfer",{
                    to:id,
                    amount
                },{
                    headers:{
                        Authorization : "Bearer " + localStorage.getItem("token")
                    }
                })
            }} className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white">
            Initiate Transfer
            </button>
            </div>
        </div>            
    </div>   
}