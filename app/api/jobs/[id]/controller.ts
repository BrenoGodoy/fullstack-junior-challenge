import { jobs } from "@/app/lib/jobs";
import { NextRequest, NextResponse } from "next/server";

export const getById = async (req: NextRequest, res: NextResponse) => {
  const id = req.url.split('jobs/')[1];
  const job = jobs.find(job => job.id === parseInt(id));

  if (!job) {
    return NextResponse.json({ message: "Job não encontrado!" }, { status: 404 });
  }

  return NextResponse.json(job);
}