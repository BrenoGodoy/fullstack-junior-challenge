import { NextRequest, NextResponse } from "next/server";
import { Status } from "../../utils/status";

export const submit = async (req: NextRequest, res: NextResponse, next: any, body?: any) => {
  const name = body.name;

  return NextResponse.json({message: `Thank you for your application, ${name}.`}, { status: Status.CREATED });
}