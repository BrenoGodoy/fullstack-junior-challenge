import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { RequestBodySchema } from "../schemas";
import { Status } from "../utils/status";

export const secretMiddleware = async (req: NextRequest, res: NextResponse, next: Function) => {
  try {
    const secret = req.headers.get('secret');
  
    if (secret !== process.env.SECRET) {
      return NextResponse.json({message: "Usuário não autorizado!"}, {status: Status.UNAUTHORIZED});
    }

   return next(req);
  } catch (error: any) {
    if (error.message === 'Unexpected end of JSON input') {
      return NextResponse.json({message: "Usuário não autorizado!"}, {status: Status.UNAUTHORIZED});
    }

    return NextResponse.json({ message: error.message }, { status: Status.INTERNAL_SERVER_ERROR });
  }
}

export const verifySubmitBody = async (req: NextRequest, res: NextResponse, next: Function) => {
  try {
    const body = await req.json();    
    RequestBodySchema.parse(body);

    return next(body);
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ message: "Corpo da requisição inválido!" }, { status: Status.BAD_REQUEST });
    }
    if (error.message === 'Unexpected end of JSON input') {
      return NextResponse.json({message: "Usuário não autorizado!"}, {status: Status.UNAUTHORIZED});
    }

    return NextResponse.json({ message: error.message }, { status: Status.INTERNAL_SERVER_ERROR });
  }
}