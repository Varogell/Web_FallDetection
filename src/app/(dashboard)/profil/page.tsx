'use Client'
import Button from "@/components/atom/button";
import Input from "@/components/atom/input";
import Link from "next/link";
import { Client } from "pg";

export default function Profil(){
    // const getDetailData = async () => {
    //     const res = await fetch('/api/admin/data-petugas/by_id?id=${params.id}, {
    //       method: "GET",
    //     })
    //     if (res.status === 404) {
    //       setIsFound(false)
    //     } else if (res.ok) {
    //       const parse = await res.json()
    //       setData(parse)
    //       
    //     }
    //   }
    return(
        <div className="h-screen">
        <div className="flex justify-end items-center gap-2 mr-4 mt-2 py-2">
          <img className="w-10" src="/avatar.png" alt="" />
          <div><Link href="/profil" className="border-2 rounded-md px-2 "> edit profil</Link>
          </div>
     
        </div>
        <hr className="border-b" />
        <div className="ml-4 mt-10">
          <h1 className="text-4xl font-bold">Edit Profile</h1>
        </div>
        <div className="ml-4">
            <form action="" className="w-[85%] ">
                <div className="flex gap-10 justify-between">
                    <Input title="First Name" id="firstname" size="w-80" />
                    <Input title="Last Name" id="lastname" size="w-80" />
                   
                    </div>
                    <Input title="Username" id="username" size="w-full" />
                    <Input title="Addres" id="addres" size="w-full" />
                    <Input title="Contact" id="contact" size="w-full" />
                <div className="flex gap-10 justify-between mt-4">
                    <Input title="City" id="city" size="w-80" />
               
                    <Input title="State" id="state" size="w-80" />
                </div>
                    <Input title="Password" id="password" size="w-full" />
                <div className="mt-8">
                
                    <Button title="Cancel" cls="bg-white border-2 rounded-3xl w-32 mr-4" />
                    {/* <button className="bg-blue-500 text-white border-2 rounded-3xl w-32">
                        Save
                    </button> */}
                    <Button title="Save" cls="bg-blue-500 text-white border-2 rounded-3xl w-32"  />
                </div>

                
                
                
                
                
                
            </form>
        </div>
      </div>
    )
}