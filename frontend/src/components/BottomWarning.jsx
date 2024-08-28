import {Link} from 'react-router-dom'

export function BottomWarning({label,linktext,to}){
    return <div className="flex justify-center text-sm">
        <div >{label}</div>
        <Link className='pl-1 pointer underline cursor-pointer'  to={to}> 
        {linktext}
        </Link>
    </div>
} 