import Link from "next/link";
import { GoAlertFill } from "react-icons/go";

export default function Notification(){
    return(
        <div className="h-screen">
        <div className="flex justify-end items-center gap-2 mr-4 mt-2 py-2">
          <img className="w-10" src="/avatar.png" alt="" />
          <div><Link href="/profil" className="border-2 rounded-md px-2 "> edit profil</Link>
          </div>
     
        </div>
        <hr className="border-b" />
        <div className="ml-4 mt-10">
          <h1 className="text-4xl font-bold">Notification</h1>
          <p>If you want to receive notifications when a fall is detected, you need to join our Telegram bot.</p>
          <div className="text-blue-600 underline"><Link href="https://web.telegram.org/k/#@Falldetectionkelompok2_bot">klik disini</Link></div>
          {/* <div className="flex items-center gap-1 mt-6">
            <h1>Notification</h1>
            <hr className="border-b-2 w-[83%] " />
          </div> */}
          {/* <div className="flex flex-col gap-3">
            <div className="border p-3 rounded-2xl flex items-center gap-2"><GoAlertFill className="text-red-600 text-xl"/> 03/28/2024 - 06.13 PM</div>
            <div className="border p-3 rounded-2xl flex items-center gap-2"><GoAlertFill className="text-red-600 text-xl"/> 03/28/2024 - 06.13 PM</div>
          </div> */}
        </div>
      </div>
    )
}