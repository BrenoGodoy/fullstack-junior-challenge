import { secretMiddleware, verifySubmitBody } from "../../middlewares";
import { handler } from "../../middlewares/handler";
import { submit } from "./controller";

export const POST = handler(secretMiddleware, verifySubmitBody, submit);