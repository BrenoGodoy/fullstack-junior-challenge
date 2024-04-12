import { jobs } from "@/app/lib/jobs";
import { NextRequest, NextResponse } from "next/server";
import { Status } from "../../utils/status";

export const getById = async (req: NextRequest, res: NextResponse) => {
  const id = req.url.split('jobs/')[1];
  const job = jobs.find(job => job.id === parseInt(id));

  if (!job) {
    return NextResponse.json({ message: "Job não encontrado!" }, { status: Status.BAD_REQUEST });
  }

  return NextResponse.json(job);
}