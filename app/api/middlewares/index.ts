import { NextRequest, NextResponse } from "next/server";

export const secretMiddleware = async (req: NextRequest, res: NextResponse, next: Function) => {
  try {
    const body = await req.json();

    if (body.secret !== 'naranja-labs') {
      return NextResponse.json({message: "Usuário não autorizado!"}, {status: 401});
    }

   return next(body);
  } catch (error: any) {
    if (error.message === 'Unexpected end of JSON input') {
      return NextResponse.json({message: "Usuário não autorizado!"}, {status: 401});
    }

    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export const verifySubmitBody = async (req: NextRequest, res: NextResponse, next: Function, body?: any) => {
  try {    

    return next(body);
  } catch (error: any) {
    if (error.message === 'Unexpected end of JSON input') {
      return NextResponse.json({message: "Usuário não autorizado!"}, {status: 401});
    }

    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}