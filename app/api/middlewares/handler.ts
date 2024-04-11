import { NextRequest } from "next/server";

export const handler =
  (...middleware: any[]) =>
  async (request: NextRequest) => {
    let result;
    let body; // Store the parsed body here
    for (let i = 0; i < middleware.length; i++) {
      let nextInvoked = false;
      const next = async (parsedBody?: any) => { // Optional argument to receive body
        nextInvoked = true;
        body = parsedBody; // Save the passed body
      };
      result = await middleware[i](request, null, next, body); // Pass body if available
      if (!nextInvoked) {
        break;
      }
    }
    if (result) return result;
    throw new Error('Your handler or middleware must return a NextResponse!');
  }