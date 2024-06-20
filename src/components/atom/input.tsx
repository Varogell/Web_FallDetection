import { FC } from "react"

interface props{
    title:string
    htmlfor?:string
    id:string
    size:string
}
const Input: FC<props> =({title,htmlfor,id,size})=>{
    return(
    <div className="flex flex-col">
    <label>{title}</label>
    <input type="text" id={id} className={`border-2 ${size} rounded-lg`} />
    </div>
    )
}
export default Input