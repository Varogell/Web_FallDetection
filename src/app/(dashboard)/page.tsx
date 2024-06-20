'use client'
import Example from "@/components/chart/Example";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { GoAlertFill } from "react-icons/go";
// import Sidebar from "./Sidebar";

export default function Home() {
  const [datas,setDatas] = useState<any>([])


  const getData=async()=>{
    const res = await fetch("http://localhost:3000/api/data/chart")
    const data = await res.json()
    setDatas(data)
  }

  useEffect(()=>{
    getData()
  },[])

  

  return (
  <div>
      <div className="flex justify-end items-center gap-2 mr-4 mt-2 py-2">
        <img className="w-10" src="/avatar.png" alt="" />
        <div><Link href="/profil" className="border-2 rounded-md px-2 "> edit profil</Link>
        </div>
   
      </div>
      <hr className="border-b" />
      <div className="ml-4 mt-10">
        <h1 className="text-4xl font-bold">Hello,</h1>
        <p>How can we help you?</p>
        <div className="mt-4 flex items-center gap-2">
          <button className="bg-blue-500 p-2 px-9 rounded-3xl text-white">Ask Something?</button>
          <h1>Or</h1>
          <div className="relative">

          <input type="search" name="search" id="" placeholder="Search here..." className="border-2 p-2 px-6 rounded-3xl w-[40rem]"/>
          <CiSearch className="absolute top-3 right-6 text-xl" />
          </div>
          </div>
        <div className="flex items-center gap-1 mt-6">
          <h1>Analytics</h1>
          <hr className="border-b-2 w-[85%] " />
        </div>
        {/* <div>
          <div className="border-2 w-[90%] h-72 rounded-md mt-2"></div>
        </div> */}
        {/* <div className="flex items-center gap-1 mt-6">
          <h1>Notification History</h1>
          <hr className="border-b-2 w-[83%] " />
        </div>
        <div className="flex flex-col gap-3">
          <div className="border p-3 rounded-2xl flex items-center gap-2"><GoAlertFill className="text-red-600 text-xl"/> 03/28/2024 - 06.13 PM</div>
          <div className="border p-3 rounded-2xl flex items-center gap-2"><GoAlertFill className="text-red-600 text-xl"/> 03/28/2024 - 06.13 PM</div>
        </div> */}
        <div className="border-2 w-[85%] h-96 rounded-md mt-2"><Example datas={datas}/>    </div>  
        {/* <div> 
          <h1>gasir biru </h1>
          <h1>jkadhfjads</h1>
          <h1>hvdhs</h1>
        </div> */}
      </div>
    </div>
  )
}
