import { NextRequest, NextResponse } from "next/server";

export const secretMiddleware = async (req: NextRequest, res: NextResponse, next: Function) => {
  const body = await req.json();

  if (!body || body.secret !== 'naranja-labs') {
    return NextResponse.json({message: "Usuário não autorizado!"}, {status: 401});
  }

  return next();
}