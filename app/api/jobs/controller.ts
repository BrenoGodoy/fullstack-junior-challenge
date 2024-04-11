import { jobs } from "@/app/lib/jobs";
import { NextResponse } from "next/server";

export const getAll = async (req: Request, res: Response) => {
  return NextResponse.json(jobs);
}