export function InputBox({field , onChange}){
    return <div className="flex flex-col my-2">
        <div className="text-sm  font-semibold text-start">{field}</div>
        <input onChange={onChange} className="w-full rounded-lg border-black px-2 py-1 border-2 mt-1"></input>        
    </div>
}