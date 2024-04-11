import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { RequestBodySchema } from "../schemas";

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
    RequestBodySchema.parse(body);

    return next(body);
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ message: "Corpo da requisição inválido" }, { status: 400 });
    }
    if (error.message === 'Unexpected end of JSON input') {
      return NextResponse.json({message: "Usuário não autorizado!"}, {status: 401});
    }

    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}