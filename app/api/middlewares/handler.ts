import { NextRequest } from "next/server";

export const handler =
  (...middleware: any[]) =>
  async (request: NextRequest) => {
    let result;
    let body;
    for (let i = 0; i < middleware.length; i++) {
      let nextInvoked = false;
      const next = async (parsedBody?: any) => {
        nextInvoked = true;
        body = parsedBody; 
      };
      result = await middleware[i](request, null, next, body);
      if (!nextInvoked) {
        break;
      }
    }
    if (result) return result;
    throw new Error('Your handler or middleware must return a NextResponse!');
  }