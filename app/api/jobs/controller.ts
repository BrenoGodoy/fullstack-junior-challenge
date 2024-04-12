import { jobs } from "@/app/api/lib/jobs";
import { NextRequest, NextResponse } from "next/server";

export const getAll = async (req: NextRequest, res: NextResponse) => {
  const query = req.nextUrl.searchParams.get('level');
  if (query) {
    const filteredJobs = jobs.filter((job) => job.level === query);

    return NextResponse.json(filteredJobs);
  };

  return NextResponse.json(jobs);
}