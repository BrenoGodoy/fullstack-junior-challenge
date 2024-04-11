import { secretMiddleware } from "../../middlewares";
import { handler } from "../../middlewares/handler";
import { getById } from "./controller";

export const POST = handler(secretMiddleware, getById);