"use client";

import Link from "next/link";

export default async function Analytics() {

  return (
    <div className="h-screen">
      <div className="flex justify-end items-center gap-2 mr-4 mt-2 py-2">
        <img className="w-10" src="/avatar.png" alt="" />
        <div>
          <Link href="/profil" className="border-2 rounded-md px-2">edit profil</Link>
        </div>
      </div>
      <hr className="border-b" />
      <div className="ml-4 mt-10">
        <h1 className="text-4xl font-bold">Analytics</h1>
        <p>See and check your analytics here</p>
        <div className="flex items-center gap-1 mt-6">
          <h1>Analytics</h1>
          <hr className="border-b-2 w-[83%]" />
        </div>
      </div>
    </div>
  );
}
