"use client"
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import path from "path";
import React, { use, useState } from "react";
import { FaBarsStaggered, FaBell, FaGear } from "react-icons/fa6";
import { IoMdHelpCircle } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
import { SiGoogleanalytics } from "react-icons/si";

export default function Sidebar(){

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const pathname = usePathname()
    const isActive = ()=>{
        if("/"==="/"){
            return pathname === "/"
        }
        return pathname.includes("")
    }
    const router = useRouter()
    const logout = async () => {
    await signOut()
    router.push("/login")
  }
    return(
    <>
    <div className="fixed left-2 top-2 z-20 xl:hidden"> 
    <button onClick={()=> setIsOpen(!isOpen)}><FaBarsStaggered className="text-xl"/></button>
    
    </div>
       
        <div className={`fixed bg-white h-screen top-0 z-10 w-[70%] md:w-[40%] border-r shadow-md transition-all duration-300 ${isOpen?"translate-x-0":"-translate-x-full"} xl:w-[20%] xl:translate-x-0 py-3`}>
        <div className="fixed left-2 top-2 z-20 xl:hidden"> 
        {/* <button onClick={()=> setIsOpen(!isOpen)}><FaBarsStaggered className="text-xl"/></button> */}
    
        </div>
            <h1 className="mt-12 mb-5 text-gray-400">Menu</h1>
            <div className="flex flex-col gap-2">

            <Link className={`text-blue-500 font-bold flex items-center gap-2 p-4 ${isActive()?"drop-shadow-lg":""}`} href='/'>
            <RxDashboard className="text-2xl" />Dashboard
            </Link>
            <Link className={`text-blue-500 font-bold flex items-center gap-2 p-4 ${isActive()?"drop-shadow-lg":""}`} href='/notification'>
            <FaBell className="text-2xl" />Notification
            </Link>
            <Link className={`text-blue-500 font-bold flex items-center gap-2 p-4 ${isActive()?"drop-shadow-lg":""}`} href='/analytics'>
            <SiGoogleanalytics className="text-2xl" />Analiytics
            </Link>
            <Link className={`text-blue-500 font-bold flex items-center gap-2 p-4 ${isActive()?"drop-shadow-lg":""}`} href='/profil'>
            <FaGear className="text-2xl" />Settings
            </Link>
            <Link className={`text-blue-500 font-bold flex items-center gap-2 p-4 ${isActive()?"drop-shadow-lg":""}`} href='/faq'>
            <IoMdHelpCircle className="text-2xl" />Faq
            </Link>
            <button className="btn rounded-md bg-blue-500 text-white px-3 py-1 ml-3 mr-3" onClick={() => logout()}>logout </button>
            </div>


        </div>
    </>
    )
}