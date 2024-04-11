import { jobs } from "@/app/lib/jobs";
import { NextRequest, NextResponse } from "next/server";

export const submit = async (req: NextRequest, res: NextResponse) => {
  const name = '';  
  return NextResponse.json({message: `Thank you for your application, ${name}`}, { status: 201 });
}