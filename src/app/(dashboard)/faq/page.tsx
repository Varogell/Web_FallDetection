"use client"
import Button from "@/components/atom/button";
import Link from "next/link";
import { title } from "process";
import { FC, useState } from "react";
import { CiSearch } from "react-icons/ci";

interface AccordionProps{
title:string
children:string
}

const Accordion: FC<AccordionProps> = ({title, children})=> {
    const [isOpen, setIsOpen]= useState(false);
    const toggleAccordion = () =>{
        setIsOpen(!isOpen);
    }
    return(
        <div className=" rounded-2xl mb-6 w-[470px] my-0 mx-auto">
                <div className="flex item-center justify-center rounded-2xl p-4 cursor-pointer bg-blue-500 text-white"
                onClick={toggleAccordion}>
                    <span className="font-medium">{title}</span>
                    
                </div>
                {isOpen && (
                    <div className="p-4 rounded-2xl bg-blue-300 ">{children}</div>
                )}

            </div>
    )
}

export default function Faq(){
    return(
        <div className="h-screen">
        <div className="flex justify-end items-center gap-2 mr-4 mt-2 py-2">
          <img className="w-10" src="/avatar.png" alt="" />
          <div><Link href="/profil" className="border-2 rounded-md px-2 "> edit profil</Link>
          </div>
        </div>
        <div className="w-[80%] my-0 mx-auto">
        <div className="relative ">

        <input type="search" name="search" id="" placeholder="Search here..." className="border-2 p-2 px-6 rounded-3xl w-full"/>
        <CiSearch className="absolute top-3 right-6 text-xl" />
        </div>

        </div>
        <h1 className="text-center my-6">About</h1>
        <h1 className="text-center text-4xl font-bold">Frequently Asked Questions</h1>
        <div className="bg-blue-200 w-[500px] my-0 mx-auto mt-4 py-2">

        <h1 className="text-center ">Do you have any question? Just ask here</h1>
        </div>
        <div className="mt-6">
            <Accordion title=" Apa itu layanan deteksi jatuh?" children="Layanan deteksi jatuh adalah sistem yang menggunakan sensor dan algoritma untuk mendeteksi jika seseorang mengalami jatuh. Sistem ini kemudian mengirimkan peringatan ke kontak darurat atau layanan medis untuk memastikan bantuan cepat diberikan." />
            <Accordion title="Bagaimana cara kerja sistem deteksi jatuh?" children="Sistem deteksi jatuh menggunakan sensor yang ditempatkan pada sabuk pengguna. Ketika sensor mendeteksi pola gerakan yang sesuai dengan jatuh, sistem akan mengirimkan notifikasi ke bot telegram." />
            <Accordion title="bagaimana cara saya melihat notifikasi?" children="yang perlu anda lakukan adalah bergabung dengan telegram yang tersedia di menu notification" />
        </div>
           </div>
    )
}