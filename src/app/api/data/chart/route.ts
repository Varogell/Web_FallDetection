import { NextResponse } from "next/server";

import prisma from "../../../../../lib/prisma";

export const GET = async()=>{
    const res = await prisma.sensorData.findMany()
    

    return NextResponse.json(res)
}