export function Balance({value}){
    return <div className="flex justify-start h-14 mt-3">
        <div className="font-semibold ml-3 mr-2 text-lg">Your Balance</div>
        <div className="font-semibold text-lg">Rs {value}</div>
    </div>
}