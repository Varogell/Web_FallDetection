import { FC } from "react"

interface props{
    title:string
    cls:string
    fnc?:any
    
}
const Button: FC<props> =({title,cls,fnc})=>{
    return(
    
    <button className={cls} onClick={fnc}>
                        {title}
    </button>
    )
}
export default Button